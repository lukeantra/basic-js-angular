//----------------api----------------------
const Api = (() => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const todopath = "todos";

    const getToDos = () =>
        fetch([baseUrl, todopath].join("/")).then((response) => response.json());

    const deleteTodos = (id) =>
        fetch([baseUrl, todopath, id].join("/"), {
            method: "DELETE",
        });

    const addTodos = (newtodo) =>
        fetch([baseUrl, todopath].join("/"), {
            method: 'POST',
            body: JSON.stringify(newtodo),
        }).then((response) => response.json())


    return {
        getToDos,
        deleteTodos,
        addTodos
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
    const deleteTodos = api.deleteTodos;
    const addTodos = api.addTodos;

    class Newtodo {
        constructor(title) {
            this.title = title
        }
    }

    class State {
        #todos = [];

        get gettodolist() {
            return this.#todos;
        }

        set settodolist(newtodos) {
            this.#todos = newtodos;
            const list = document.querySelector(".list-container");
            const tmp = view.createTmp(newtodos); // 这个也可以是newtodos 或者是 this.#todos
            view.render(list, tmp);
        }
    }

    return {
        getTodos,
        deleteTodos,
        addTodos,
        State,
    };
})(Api, View);

//----------------controller----------------------
const Controller = ((model, view) => {
    const state = new model.State();
    const list = document.querySelector(".list-container");
    const input = document.querySelector(".input-container");

    const init = () => {
        model.getTodos().then((todolist) => {
            state.settodolist = todolist;
        });
    };

    const deleteTodos = () => {
        list.addEventListener("click", (event) => {
            state.settodolist = state.gettodolist.filter(
                (ele) => +ele.id !== +event.target.id
            );
            model.deleteTodos(event.target.id);
        });
    };

    const addTodos = () => { 
        input.addEventListener("keyup", event => {
            if (event.key === "Enter" && event.target.value !== "") {
                const newtodo = new model.Newtodo(event.target.value);

                state.settodolist = state.gettodolist.concat(newtodo);
                state.addTodos(newtodo);
            }
        })

        

    };

    const bootstrap = () => {
        init();
        deleteTodos();
        addTodos();
    };

    return {
        bootstrap,
    };
})(Model, View);

Controller.bootstrap();
