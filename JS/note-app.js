const notes = JSON.parse(localStorage.getItem('notes')) || []

const noteForm = document.getElementById('note')
const addBtn = document.getElementById('addBtn')
const noteContainer = document.getElementById('note-list')

addBtn.addEventListener('click', () => {
    const note = noteForm.value
    if(note){
        notes.push(note)
        localStorage.setItem('notes', JSON.stringify(notes))
        console.log(notes);
        noteForm.value = ''
        renderNote()
    }
})

function renderNote(){
    noteContainer.textContent = ''
    notes.map((note, index) => {
        const listItem = document.createElement('li')
        listItem.className = 'list-group-item list-group-item-action '
        listItem.innerHTML = `${note}<button type='button' class='btn btn-outline-danger' data-index='${index}'>Delete</button>`
        noteContainer.appendChild(listItem)
    })
}

noteContainer.addEventListener('click', (event) => {
    const index = event.target.getAttribute('data-index')
    notes.splice(index, 1)
    renderNote()
})

renderNote()
