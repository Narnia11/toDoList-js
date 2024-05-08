const list = document.getElementById("list")
const input = document.getElementById("input")
const btn = document.getElementById("btn")

let toDoList = []

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(result => result.json())
    .then(data => {
        toDoList = data
        showToDo()
    })
    .catch(error => console.log(error))

class toDo {
    constructor(title) {
        this.userId = 1
        this.id = (toDoList.length + 1)
        this.title = title
        this.completed = false
    }
}

function showToDo() {
    toDoList.filter(n => n.userId === 1 & n.completed === false)

        .forEach(n => {
            const line = document.createElement("li")
            const span = document.createElement("span")
            const checkbox = document.createElement("input")
            checkbox.setAttribute("type", "checkbox")
            span.innerHTML = n.title
            checkbox.addEventListener('change', () => {
                span.style.textDecoration = "line-through"
                makeDone(n)
            })

            line.appendChild(checkbox)
            line.appendChild(span)
            list.appendChild(line)
        })
}

function makeDone(x) {
    x.completed = true
    console.log(x)
}

btn.addEventListener('click', () => {
    addTodo()
})

function addTodo() {
    const newTodo = new toDo(input.value)
    const kondition = toDoList.find((x) => x.title === input.value)
    if(!kondition){
     toDoList.push(newTodo)
    list.innerHTML = null
    showToDo( )
    console.log(newTodo)}
}



















