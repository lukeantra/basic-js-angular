import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  todoPath = 'todos';
  todolist?: Observable<Todo>;

  constructor(private http: HttpClient, 
    @Inject('baseUrl') private baseUrl: string) {}

  getAllTodos: () => Observable<Todo[]> = () =>
    this.http.get([this.baseUrl, this.todoPath].join('/')) as Observable<Todo[]>;

  deleteTodo = (id: string): Observable<Object> => {
    return this.http.delete([this.baseUrl, this.todoPath, id].join('/'));
  };

  addTodo = (newtodo: Todo): Observable<Todo> => {
    return this.http.post(
      [this.baseUrl, this.todoPath].join('/'),
      newtodo
    ) as Observable<Todo>;
  };
}

