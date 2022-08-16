// ---------------------api, and you can create another file ----------------
const api = () => {
    const baseUrl = "http://localhost:3000";
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
};

class Api {
     baseUrl = "http://localhost:3000";
     todo = "todos";

     getTodos = () =>
        fetch([baseUrl, todo].join("/")).then((response) => response.json());

     deleteTodos = (id) => {
        console.log(id);
        fetch([baseUrl, todo, id].join("/"), {
            method: "DELETE",
        });
    };

     addTodos = () =>
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            // newtodo
            body: JSON.stringify(newtodo),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then((response) => response.json());
}

// ---------------------view----------------
const view = () => {
    // domStr ???

    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };
    //tmp
    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((todo) => {
            tmp += `<li>
          <span>${todo.id}-${todo.title}</span>
          <button class="delete-btn" id="${todo.id}"></button>
        </li>`;
        });

        return tmp;
    };

    return {
        render,
        createTmp,
    }
};

// ---------------------model----------------
const model = (api, view) => {

    const getTodos = api.getTodos;
    const deleteTodos = api.deleteTodos;
    const addTodos = api.addTodos;

    class Todo {
        constructor(title) {
            this.title = title;
        }
    }
    class State {

    }

    return {
        getTodos,
        deleteTodos,
        addTodos,
        State,
        Todo,
    };

}


// ---------------------controller----------------
const controller = (model.view) => {
    const state = model.State();
    const init = () => {

    }

    return {
        init,
    }
}

