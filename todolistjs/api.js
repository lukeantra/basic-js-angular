// ~~~~~~~~~~~~~~~~~~~~~~~~~API~~~~~~~~~~~~~~~~~~~~~~~~~
export const TodoAPI = (() => {
    const basurl = 'http://localhost:3000';
    const basurl = 'https://jsonplaceholder.typicode.com';
    const todoPath = 'todos'

    const getAllTodos = () =>
        fetch([basurl, todoPath].join('/'))
            .then((response) => response.json());

    return {
        getAllTodos,
    }
})();