import { Component, OnInit, } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoService } from '../services/todo.service';
import { Todo } from '../todo.model';

import * as TodoActions from 'src/app/NgRx/todo.actions';
import * as TodoSeletors from 'src/app/NgRx/todo.selector';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  inputItem = '';
  todolist: Todo[] = [];

  constructor(private todoservice: TodoService,
    private store: Store) { }

  ngOnInit(): void {
    // this.todoservice.getAllTodos().subscribe((todolist) => {
    //   this.todolist =todolist as Todo[];
    // }) 
    // this.store.dispatch(TodoActions.initTodolist());
    this.store.dispatch(TodoActions.loadTodoList());
    this.store.select(TodoSeletors.getTodoList).subscribe(todolist => {
      this.todolist = todolist;
    })
  }

  deletetodo(id: string) {
    console.log(id);
    this.todolist = this.todolist.filter((ele: any) => +ele.id !== +id);
    this.todoservice.deleteTodo(id);
  }

  addtodo() {
    const newtodo: Todo = {
      userId: 0,
      title: this.inputItem,
      completed: false,
    };
    // this.todoservice.addTodo(newtodo).subscribe((todo: Todo) => {
    //   this.todolist = [todo, ...this.todolist]; 
    // });
    // this.inputItem = '';
    this.store.dispatch(TodoActions.addTodo({todo: {...newtodo}}));
    newtodo.title = '';
  }

}
