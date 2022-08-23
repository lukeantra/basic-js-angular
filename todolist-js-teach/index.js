// ---------------------api ----------------
const api = (() => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    // const baseUrl = "http://localhost:3000";
    const todo = "todos";

    const getTodos = () =>
        fetch([baseUrl, todo].join("/")).then((response) => response.json());

    const deleteTodos = (id) => {
        console.log(id);
        fetch([baseUrl, todo, id].join("/"), {
            method: "DELETE",
        });
    };

    const addTodos = (newtodo) =>
        fetch([baseUrl, todo].join("/"), {
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
    // dom object
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

    class Todo {
        constructor(title) {
            this.title = title;
        }
    }
    class State {
        #listFetch = [];

        get getList() {
            return this.#listFetch;
        }

        set setList(newtodos) {
            this.#listFetch = newtodos;
            const tmp = view.createTmp(this.#listFetch);
            const list = document.querySelector(view.domStr.list);
            view.render(list, tmp);
            // recursion 
            // const deletebtns = document.querySelectorAll(view.domStr.deletebtn);
            // deletebtns.forEach(btn => {
            //     btn.addEventListener('click', event => {
            //         this.setList = this.getList.filter(
            //             (todo) => +todo.id !== +event.target.id
            //         );
            //         model.deleteTodos(event.target.id);
            //     })
            // })
        }
    }
    return {
                getTodos,
                deleteTodos,
                addTodos,
                State,
                Todo
            };

        })(api, view)


    // ---------------------controller----------------
    const controller = ((view, model) => {

        const state = new model.State();
        const list = document.querySelector(view.domStr.list);
        

        const init = () => {
            model.getTodos().then(data => {
                state.setList = data;
                // fetch data 之后 才开始有数据 才开始有, 但只能delete一次， 因为不能reuse旧的deletebtns
                // const deletebtns = document.querySelectorAll(view.domStr.deletebtn);
                // deletebtns.forEach(btn => {
                //     btn.addEventListener('click', event => {
                //         state.setList = state.getList.filter(
                //             (todo) => +todo.id !== +event.target.id
                //         );
                //         model.deleteTodos(event.target.id);

                // const deletebtns = document.querySelectorAll(view.domStr.deletebtn);
                // deletebtns.forEach(btn => {
                //     btn.addEventListener('click', event => {
                //         state.setList = state.getList.filter(
                //             (todo) => +todo.id !== +event.target.id
                //         );
                //         model.deleteTodos(event.target.id);
                // })
                // })
            })
        };

        const deleteTodo = () => {
            list.addEventListener("click", (event) => {
                //filter will help to rerender the page
                state.setList = state.getList.filter(
                    (todo) => +todo.id !== +event.target.id
                );

                model.deleteTodos(event.target.id);
            });
        }

        const addTodo = () => {
            // the input wont change, it is always this one input, so not recursion.
            const input = document.querySelector(view.domStr.input);
            input.addEventListener('keyup', event => {
                if (event.key === "Enter" && event.target.value !== "") {
                    // console.log(event.target.value);
                    const todo = new model.Todo(event.target.value);
                    // 传给后端 
                    model.addTodos(todo).then(data => {
                        console.log(data);
                        
                        //[]也会有new reference, rerender the page
                        //for fakebackend, the id will be the same.
                        state.setList = [data, ...state.getList];
                        // concat also return a new array
                        // state.setList = state.getList.concat(data);
                    })
                    event.target.value = "";
                }
            }
            )
        }

        const bootstrap = () => {
            init();
            deleteTodo();
            addTodo();
        }

        return {
            bootstrap,
        };

    })(view, model);

    controller.bootstrap();



