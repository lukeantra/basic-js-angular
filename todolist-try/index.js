//----------------api----------------------
const Api = (() => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const todopath = "todos";

    const getToDos = () =>
        fetch([baseUrl, todopath].join("/"))
            .then(response => response.json());

    const deleteTodos = (id) =>
        fetch([baseUrl, todopath, id].join("/"), {
            method: 'DELETE',
        });


    return {
        getToDos,
        deleteTodos,
    }

})();

// const getTodos = api.getToDos;

// getTodos().then(json => console.log(json));

//----------------view----------------------
const View = (() => {

    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    }

    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach(todo => {
            tmp += `<li>
            <span>${todo.id}-${todo.title}</span>
            <button class="delete-btn" id="${todo.id}">X</button>
          </li>`
        });
        return tmp;
    }

    return {
        render,
        createTmp
    }

})();



//----------------model----------------------
const Model = ((api, view) => {
    const getTodos = api.getToDos;
    const deleteTodos = api.deleteTodos;

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


            const deletebtn = document.querySelectorAll(".delete-btn");
            deletebtn.forEach(btn => {
                btn.addEventListener('click', event => {
                    this.settodolist = this.gettodolist.filter(ele => +ele.id !== +event.target.id);
                })
            })

        }
    }


    return {
        getTodos,
        deleteTodos,
        State
    }

})(Api, View);



//----------------controller----------------------
const Controller = ((model, view) => {
    const state = new model.State();

    const init = () => {

        model.getTodos().then(todolist => {
            state.settodolist = todolist;
            // const tmp = view.createTmp(todolist);
            // view.render(list, tmp)

            //  const deletebtn = document.querySelectorAll(".delete-btn");
            // deletebtn.forEach(btn => {

            //     btn.addEventListener('click', event => {
            //         todolist = todolist.filter(ele => +ele.id !== +event.target.id);
            //         const tmp = view.createTmp(todolist);
            //         view.render(list, tmp);
            //     })
            // })


        })
    }

    return {
        init
    }


})(Model, View);

Controller.init();


