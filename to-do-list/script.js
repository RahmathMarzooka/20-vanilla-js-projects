let addBtn = document.getElementById('addBtn')
let addTask = document.getElementById('addTask')
letlist = document.getElementById('list')
let toDoList = []
let toDoId = 1;
let toDoEditId = 0



addBtn.addEventListener('click', addToDoList)
function addToDoList() {
    if (toDoEditId == 0) {
        toDoList.push({ task: addTask.value, taskId: toDoId++ })
    }
    else {
        let editedList = toDoList.find((toDoItem) => {
            return toDoItem.taskId == toDoEditId;
        })
        editedList.task = addTask.value;
        toDoEditId = 0;
        let addBtn = document.getElementById('addBtn')
        addBtn.innerText = "add"

    }
    renderList()
    addTask.value = '';
}


function renderList() {
    list.innerHTML = toDoList.map((toDoItem) => {
        return `<div class ="list-item">
            <span class = "checkBtn"><i class="fa fa-check"></i></span>
            <span class ="item" data-item-id=${toDoItem.taskId} onclick="styleList(event)"> ${toDoItem.task} </span>
            <span class ="edit" data-edit-id = ${toDoItem.taskId} onclick = "editTask(event)"><i class="fa fa-edit"></i></span>
            <span class ="delete" data-delete-id =${toDoItem.taskId} onclick ="deleteTask(event)"><i class="fa fa-trash-o"></i></span>
        </div>`
    }).join('')
}


function styleList(e) {
    e.target.classList.add('strike-task')
    let completedList = e.target.parentElement
    console.log(completedList)
    completedList.classList.add('style-list')
    let checkButton = e.target.previousElementSibling;
    checkButton.classList.add('show-check')

}
function deleteTask(e) {
    let currentTargetId = e.currentTarget.getAttribute("data-delete-id")
    console.log(currentTargetId)
    let filteredlist = toDoList.filter((toDoItem) => {
        return toDoItem.taskId != currentTargetId;
    })
    toDoList = filteredlist;
    renderList()
}


function editTask(e) {
    let editTaskId = e.currentTarget.getAttribute("data-edit-id")
    console.log(editTaskId)
    toDoEditId = editTaskId;
    let editedList = toDoList.find((toDoItem) => {
        return toDoItem.taskId == editTaskId;
    })
    console.log(editedList)
    addTask.value = editedList["task"]
    let updateBtn = document.getElementById('addBtn')
    updateBtn.innerText = "update"
    console.log(toDoEditId)
}






console.log(toDoList)