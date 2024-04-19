console.log(1);
//----------------api----------------------
const Api = (() => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const todopath = "todos";

    const getToDos = () =>
        fetch([baseUrl, todopath].join("/")).then((response) => response.json());

    const deleteTodo = (id) =>
        fetch([baseUrl, todopath, id].join("/"), {
            method: "DELETE",
        });

    const addTodo = (newtodo) =>
        fetch([baseUrl, todopath].join("/"), {
            method: 'POST',
            body: JSON.stringify(newtodo),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then((response) => response.json())


    return {
        getToDos,
        deleteTodo,
        addTodo
    };
})();

//----------------view----------------------
const View = (() => {
    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };

    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((todo) => {
            tmp += `<li>
            <span>${todo.id}-${todo.title}</span>
            <button class="delete-btn" id="${todo.id}">X</button>
          </li>`;
        });
        return tmp;
    };

    return {
        render,
        createTmp,
    };
})();

//----------------model----------------------
const Model = ((api, view) => {
    const getTodos = api.getToDos;
    const deleteTodo = api.deleteTodo;
    const addTodo = api.addTodo;

    class Newtodo {
        constructor(title) {
            this.title = title;
        }
    }

    class State {
        #todos = [];

        get todolist() {
            return this.#todos;
        }

        set todolist(todos) {
            this.#todos = todos;
            //rerender the page
            const list = document.querySelector(".list-container");
            const tmp = view.createTmp(todos); // 这个也可以是newtodos 或者是 this.#todos
            view.render(list, tmp);
        }
    }

    return {
        getTodos,
        deleteTodo,
        addTodo,
        State,
        Newtodo,
    };
})(Api, View);

//----------------controller----------------------
const Controller = ((model, view) => {
    const state = new model.State();
    const list = document.querySelector(".list-container");
    const input = document.querySelector(".input-container");

    const init = () => {
        model.getTodos().then((todolist) => {
            state.todolist = todolist;
        });
    };

    const deleteTodo = () => {
        list.addEventListener("click", (event) => {
            state.todolist = state.todolist.filter(
                (ele) => +ele.id !== +event.target.id
            );
            model.deleteTodo(event.target.id);
        });
    };

    const addTodo = () => {
        // const input = document.querySelector(".input-container");
        input.addEventListener("keyup", event => {
            if (event.key === "Enter" && event.target.value !== "") {
                const todo = new model.Newtodo(event.target.value);
                console.log(todo);

                model.addTodo(todo).then((todo) => {
                    state.todolist = [todo, ...state.todolist];
                    console.log(todo);
                });
                
                event.target.value = "";
            }
        })
    };

    const bootstrap = () => {
        init();
        deleteTodo();
        addTodo();
    };

    return {
        bootstrap,
    };
})(Model);

Controller.bootstrap();
