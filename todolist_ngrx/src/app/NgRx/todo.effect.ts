import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, createAction } from "@ngrx/store";
import { catchError, map, mergeMap, of } from "rxjs";
import * as TodoActions from 'src/app/NgRx/todo.actions';
import { Todo } from "../todo.model";

@Injectable()

export class TodoEffect {
    private path = 'todos';
    //load todo
    loadTodos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TodoActions.loadTodoList),
            mergeMap(actions => {
                return this.http.get<Todo[]>([this.baseUrl, this.path].join('/')).pipe(
                    map((todos: Todo[]) => {
                        return TodoActions.loadTodoListSuccess({ todolist: todos })
                    }),
                    catchError(err => {
                        return of(TodoActions.loadTodoListFailure({ err }))
                    })
                )
            })
        )
    });

    //add todo
    addTodo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TodoActions.addTodo),
            mergeMap(actions => {
                return this.http.post<Todo[]>
                    ([this.baseUrl, this.path].join('/'), actions.todo).pipe(
                        map((todo: any) =>
                            TodoActions.addTodoListSuccess({ todo })
                        ),
                        catchError(err =>
                            of(TodoActions.addTodoListFailure({ err }))
                        )
                    )
            })
        )
    });

    //delete todo
    deleteTodo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TodoActions.deleteTodo),
            mergeMap(({ id }) =>
                this.http.delete<Todo[]>
                    ([this.baseUrl, this.path, id].join('/')).pipe(
                        map((_) =>
                            TodoActions.deleteTodoListSuccess({id})
                        ),
                        catchError(err =>
                            of(TodoActions.deleteTodoListFailure({ err }))
                        )
                    )
            )
        )
    });


    constructor(private http: HttpClient,
        private actions$: Actions,
        @Inject('baseUrl') private baseUrl: string) {
    }
}