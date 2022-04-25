import { createAction, props } from "@ngrx/store";
import { Todo } from "../todo.model";

export const initTodolist = createAction('[TodoList] Initialize TodoList');

export const loadTodoList = createAction('[TodoList] Load TodoList');

export const loadTodoListSuccess = createAction(
    '[TodoList] Load TodoList success',
    // feedback
    props<{ todolist: Todo[] }>()
);

export const loadTodoListFailure = createAction(
    '[TodoList] Load TodoList failure',
    props<{ err: string }>()
);

// addtodo
export const addTodo = createAction(
    '[TodoList] Add Todo',
 props<{ todo: Todo }>());

export const addTodoListSuccess = createAction(
    '[TodoList] add TodoList success',
    props<{ todo: Todo }>()
);

export const addTodoListFailure = createAction(
    '[TodoList] add Todo failure',
    props<{ err: string }>()
);

// deletetodo
export const deleteTodo = createAction(
    '[TodoList] delete Todo',
    props<{ id: string }>());

export const deleteTodoListSuccess = createAction(
    '[TodoList] delete TodoList success',
    props<{ id: string }>()
);

export const deleteTodoListFailure = createAction(
    '[TodoList] delete Todo failure',
    props<{ err: string }>()
);
