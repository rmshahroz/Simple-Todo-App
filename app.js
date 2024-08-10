//Bactic method
// var username = "Muhammad Shahroz"
// var age = 31

// console.log(`my name is ${username} and my age is ${age}`)


// var fruits = ["mango" , "orange" , "banana"]
// console.log(fruits)
// fruits.push("grapes")

// fruits.slice( 1 , 1 , "kiwi")
// console.log(fruits)

// for (var i=0 ; i<fruits.length; i++){
//     console.log(fruits[i])}



var input = document.querySelector("#input")
var list = document.querySelector("ol")
var todo = []


function rendertodo(){
    list.innerHTML=""
    for(var i = 0; i < todo.length; i++){
        list.innerHTML += `
        <li>${todo[i]}
        <button onclick="deletetodo(${i})">delete</button>
        <button onclick="edittodo(${i})">edit</button>
        </li>
        `
    }
}

function addtodo (){
    
    todo.push (input.value)
    console.log(todo)
    rendertodo()
    input.value=""
}

function deletetodo(index){
    console.log("todo deleted" , index)
    todo.splice(index , 1)
    console.log(todo)
    rendertodo()
}


function edittodo(index){
    var updatedValue = prompt("enter updated value")
    todo.splice(index , 1 , updatedValue)
    rendertodo()

}