// ~~~~~~~~~~~~~~~~~~~~~~~~~API~~~~~~~~~~~~~~~~~~~~~~~~~
export const TodoAPI = (() => {
    const baseUrl = 'http://localhost:3000';
    // const baseUrl = 'https://jsonplaceholder.typicode.com';
    const todo = 'todos'

    const getAllTodos = () =>
        fetch([baseUrl, todo].join('/'))
            .then((response) => response.json());

    const deleteTodo = (id) => {
        console.log(id);
        fetch([baseUrl, todo, id].join("/"), {
            method: "DELETE",
        });
    }

    const addTodo = (newtodo) =>
        fetch([baseUrl, todo].join("/"), {
            method: "POST",
            body: JSON.stringify(newtodo),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then((response) => response.json());

    const updateTodo = (id, updatedtodo) =>
        fetch([baseUrl, todo, id].join("/"), {
            method: "PUT",
            body: JSON.stringify(updatedtodo),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then((response) => response.json());

    return {
        getAllTodos,
        deleteTodo,
        addTodo,
        updateTodo
    }
})();