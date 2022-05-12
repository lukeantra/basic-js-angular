import { TodoAPI } from './api.js';

// ~~~~~~~~~~~~~~~~~~~~~~~~~View~~~~~~~~~~~~~~~~~~~~~~~~~
const View = (() => {
    const domstr = {
        todolistPending: '#todolist_pending',
        todolistCompleted: '#todolist_completed',
        todolistinput: '.todolist__input'
    };
    const render = (element, tmp) => {
        element.innerHTML = tmp;
    }
    const createTmp = arr => {
        let tmp = '';

        arr.forEach(ele => {
            if (ele.isCompleted === false) {
                tmp += `<li>
            <div class="todo-item" id="${'span'+ele.id}">
                <span>${ele.content}</span>
            </div>
            <div class="btn-container">
                <button class="edit_btn_pending" id="${ele.id}">
                EDIT
                </button>
                <button class="delete_btn_pending" id="${ele.id}">
                X
                </button>
                <button class="pending_to_completed" id="${ele.id}">
                >
                </button>
            </div> 
        </li>`
            } else {
                tmp += `<li>
            <button class="completed_to_pending" id="${ele.id}">
            <
            </button>
            <div class="todo-item" id="${'span'+ele.id}">
                <span>${ele.content}</span>
            </div>
            <div class="btn-container">
                <button class="edit_btn_completed" id="${ele.id}">
                EDIT
                </button>
                <button class="delete_btn_completed" id="${ele.id}">
                X
                </button>
               
            </div> 
        </li>`
            }

        });
        return tmp;
    }

    return {
        render,
        createTmp,
        domstr
    }
})();
// ~~~~~~~~~~~~~~~~~~~~~~~~~Model~~~~~~~~~~~~~~~~~~~~~~~~~
const Model = ((api, view) => {

    class Todo {
        constructor(content) {

            this.content = content;
            this.isCompleted = false;
            // this.id = 33;
        }
    }
    class State {
        #todolistpending = [];
        #todolistcompleted = [];
        constructor() { }

        get todolistPending() {
            return this.#todolistpending;
        }
        set todolistPending(newarr) {
            this.#todolistpending = newarr;

            const tmp = view.createTmp(this.#todolistpending);
            const element = document.querySelector(view.domstr.todolistPending);
            view.render(element, tmp);
        }

        get todolistCompleted() {
            return this.#todolistcompleted;
        }
        set todolistCompleted(newarr) {
            this.#todolistcompleted = newarr;

            const tmp = view.createTmp(this.#todolistcompleted);
            const element = document.querySelector(view.domstr.todolistCompleted);
            view.render(element, tmp);
        }
    }

    const getAllTodos = api.getAllTodos;
    const deleteTodo = api.deleteTodo;
    const addTodo = api.addTodo;
    const updateTodo = api.updateTodo;

    return {
        getAllTodos,
        deleteTodo,
        addTodo,
        updateTodo,
        State,
        Todo
    }
})(TodoAPI, View);

// ~~~~~~~~~~~~~~~~~~~~~~~~~Controler~~~~~~~~~~~~~~~~~~~~~~~~~
const Controler = ((view, model) => {
    const state = new model.State();

    const todolistPending = document.querySelector(view.domstr.todolistPending);
    const todolistCompleted = document.querySelector(view.domstr.todolistCompleted);
    const input = document.querySelector(view.domstr.todolistinput);

    const addTodo = () => {

        input.addEventListener('keyup', event => {
            if (event.target.value !== '') {
                if (event.key === 'Enter') {
                    const newtodo = new model.Todo(event.target.value);
                    model.addTodo(newtodo).then(todo => {
                        state.todolistPending = [todo, ...state.todolistPending];
                    });
                    event.target.value = '';
                }
            }

        });
    }

    const deleteTodo = () => {

        todolistPending.addEventListener('click', event => {
            if (event.target.className === "delete_btn_pending") {
                state.todolistPending = state.todolistPending.filter(ele => +ele.id !== +event.target.id);
                // console.log(event.target);
                model.deleteTodo(event.target.id);
            }
        });

        todolistCompleted.addEventListener('click', event => {
            if (event.target.className === "delete_btn_completed") {
                state.todolistCompleted = state.todolistCompleted.filter(ele => +ele.id !== +event.target.id);
                model.deleteTodo(event.target.id);
            }

        });
    }

    const updateTodoStatus = () => {

        todolistPending.addEventListener('click', event => {
            if (event.target.className === "pending_to_completed") {
                const [currenttodo] = state.todolistPending.filter(ele => +ele.id === +event.target.id);

                const updatedtodo = {
                    ...currenttodo,
                    isCompleted: !currenttodo.isCompleted
                };
                // console.log(updatedtodo);
                model.updateTodo(event.target.id, updatedtodo);
                state.todolistPending = state.todolistPending.filter(ele => +ele.id !== +event.target.id);
                state.todolistCompleted = [...state.todolistCompleted, updatedtodo];
            }

        });

        todolistCompleted.addEventListener('click', event => {
            if (event.target.className === "completed_to_pending") {
                const [currenttodo] = state.todolistCompleted.filter(ele => +ele.id === +event.target.id);
                const updatedtodo = {
                    ...currenttodo,
                    isCompleted: !currenttodo.isCompleted
                };

                model.updateTodo(event.target.id, updatedtodo);
                state.todolistCompleted = state.todolistCompleted.filter(ele => +ele.id !== +event.target.id);
                state.todolistPending = [...state.todolistPending, updatedtodo];
            }
        });
    }


    const editTodo = () => {
        let isEdit = false;
        todolistPending.addEventListener('click', event => {
            if (event.target.className === "edit_btn_pending") {
                // console.log(event.target);
                if (!isEdit) {
                    let ele = document.getElementById('span'+event.target.id);
                    console.log(ele);
                    let txt = ele.innerText;
                    console.log(txt);

                    ele.innerHTML = `<input value='${txt}' id = '${'thisspan' + event.target.id}'/>`;
                    // document.getElementsByTagName('input')[0].focus();
                    isEdit = !isEdit;
                } else {
                    let ele = document.getElementById('span'+event.target.id);
                    let txt = document.getElementById('thisspan' + event.target.id).value
                    console.log(txt);

                    ele.innerHTML = `<span> ${txt} </span>`;
                    isEdit = !isEdit;
                    const [currenttodo] = state.todolistPending.filter(ele => +ele.id === +event.target.id);
                    const updatedtodo = {
                        ...currenttodo,
                        content: txt,
                    };
                    model.updateTodo(event.target.id, updatedtodo);
                }
            }
        });
        todolistCompleted.addEventListener('click', event => {
            if (event.target.className === "edit_btn_completed") {
                // console.log(event.target);
                if (!isEdit) {
                    let ele = document.getElementById('span'+event.target.id);
                    console.log(ele);
                    let txt = ele.innerText;

                    ele.innerHTML = `<input value='${txt}' id = '${'thisspan' + event.target.id}'/>`;
                    isEdit = !isEdit;
                } else {
                    let ele = document.getElementById('span'+event.target.id);
                    let txt = document.getElementById('thisspan' + event.target.id).value
                    console.log(txt);

                    ele.innerHTML = `<span> ${txt} </span>`;
                    isEdit = !isEdit;
                    const [currenttodo] = state.todolistCompleted.filter(ele => +ele.id === +event.target.id);
                    const updatedtodo = {
                        ...currenttodo,
                        content: txt,
                    };
                    model.updateTodo(event.target.id, updatedtodo);
                }
            }
        });

    }

    const onInit = () => {
        model.getAllTodos().then(data => {

            let arr1 = [];
            let arr2 = [];
            data.forEach(ele => {
                if (ele.isCompleted === false) {
                    arr1.push(ele);
                } else {
                    arr2.push(ele);
                }
            })
            // console.log(data[1].isCompleted);

            state.todolistPending = arr1.reverse();
            state.todolistCompleted = arr2.reverse();

        });
    }

    const bootstrap = () => {
        onInit();
        addTodo();
        deleteTodo();
        updateTodoStatus();
        editTodo();
    }

    return { bootstrap };
})(View, Model);

Controler.bootstrap();
