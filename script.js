   // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

   let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "lorem ipsum",
    "completed": false
  }]

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {
    var toDos = document.getElementById ("todo-list")
    console.log (toDos)
    var i;
    for (i = 0; i < arrayOfTodos.length; i++) {
        var newElement = document.createElement ("li")
        newElement.innerHTML = arrayOfTodos [i] .title
        toDos.appendChild (newElement)
        if (arrayOfTodos [i] .completed == false) {
            newElement.style.color = "red"
        }
}
  }
