// ---------------------api ----------------
const api = (() => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const todo = "todos";

    const getTodos = () =>
        fetch([baseUrl, todo].join("/")).then((response) => response.json());

    const deleteTodos = (id) => {
        console.log(id);
        fetch([baseUrl, todo, id].join("/"), {
            method: "DELETE",
        });
    };

    const addTodos = () =>
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            // newtodo
            body: JSON.stringify(newtodo),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then((response) => response.json());

    return {
        getTodos,
        deleteTodos,
        addTodos,
    };
})();


// ---------------------view----------------
const view = (() => {
    
    const domStr = {
        list: ".list-container",
        deletebtn: ".delete-btn",
        input: ".input-container",
    };

    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };
    //tmp
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
        domStr,
    }
})();

// ---------------------model----------------
const model = ((api, view) => {

    const getTodos = api.getTodos;
    const deleteTodos = api.deleteTodos;
    const addTodos = api.addTodos;

    // class Todo {
    //     constructor(title) {
    //         this.title = title;
    //     }
    // }
    class State {
        #listFetch = [];

        get todolist() {
            return this.#listFetch;
        }

        set todolist(newtodos) {
            this.#listFetch = newtodos;
            const tmp = view.createTmp(this.#listFetch);
            const list = document.querySelector(view.domStr.list);
            view.render(list, tmp);
        }
    }

    return {
        getTodos,
        deleteTodos,
        addTodos,
        State,
        
    };

})(api, view)


// ---------------------controller----------------
const controller = ((model) => {
    const state = new model.State();
    const deletebtn = document.querySelector(view.domStr.deletebtn);
    const list = document.querySelector(view.domStr.list);
    

    const init = () => {
        model.getTodos().then(data => {
            state.todolist = data;
        })
    };

    const deleteTodo = () => {
        // 这个为啥不能target到button， 因为button太多？？？
        list.addEventListener("click", (event) => {
            state.todolist = state.todolist.filter(
                (todo) => +todo.id !== +event.target.id
            );

            model.deleteTodos(event.target.id);
        });
    }

    const bootstrap = () => {
        init();
        deleteTodo();
    }

    return {
        bootstrap,
    };

})(model);

controller.bootstrap();



