import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';

import { StoreModule } from '@ngrx/store';
import { todoreducer } from './NgRx/todo.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffect } from './NgRx/todo.effect';

@NgModule({
  declarations: [

    AppComponent,
    TodolistComponent,
    TodoitemComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ todos: todoreducer }),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      name: "todo demo",
      // logOnly: environment.production, // Restrict extension to log-only mode
      // autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),

    EffectsModule.forRoot([TodoEffect]),
    
  ],
providers: [
  TodoService,
  { provide: 'jsonplaceholder', useValue: true },
  {
    provide: 'baseUrl', useFactory: (val: boolean) => {
      return val
        ? 'https://jsonplaceholder.typicode.com'
        : 'https://localhost:3000'
    },
    deps: ['jsonplaceholder'],
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
