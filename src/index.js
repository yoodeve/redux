import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id : Date.now() }];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const addToDo = (text) => {
  store.dispatch({type:ADD_TODO, text})
 }

const deleteTodo = (e) => {
  const id = e.target.parentNode;
  store.dispatch({type:DELETE_TODO, id})
 }

 
const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML="";
  toDos.forEach(todo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", deleteTodo)
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

store.subscribe(paintTodos)


const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  addToDo(todo);
};

form.addEventListener("submit", onSubmit);
