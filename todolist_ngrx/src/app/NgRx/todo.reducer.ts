import { createReducer, on, State } from "@ngrx/store";
import { TodoState } from "../todo.model";
import * as TodoActions from './todo.actions';


const state: TodoState = {
    todolist: [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
    ]
}

export const todoreducer = createReducer(
    state,
    on(TodoActions.initTodolist, (state) => {
        return { ...state };
    }),
    //load todos
    on(TodoActions.loadTodoListSuccess, (state, action): TodoState => {
        return {
            ...state,
            todolist: action.todolist,
            err: '',
        };
    }),
    on(TodoActions.loadTodoListFailure, (state, action): TodoState => {
        return {
            ...state,
            todolist: [],
            err: action.err,
        };
    }),
    //add todos
    on(TodoActions.addTodoListSuccess, (state, action): TodoState => {
        return {
            ...state,
            todolist: [action.todo, ...state.todolist],
            err: '',
        };
    }),
    on(TodoActions.addTodoListFailure, (state, action): TodoState => {
        return {
            ...state,
            todolist: [],
            err: action.err,
        };
    }),
    //delete todos
    on(TodoActions.deleteTodoListSuccess, (state, { id }): TodoState => {
        const newtodolist = state.todolist.filter(todo => {
            return todo.id ? +todo.id !== +id : true
        });
        return {
            ...state,
            todolist: [...newtodolist],
            err: '',
        };
    }),
    on(TodoActions.deleteTodoListFailure, (state, {err}): TodoState => {
        return {
            ...state,
            todolist: [],
            err,
        };
    }),
)