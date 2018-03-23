import { Todo } from './../classes/todo';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  private todos: Todo[];
  private nextId: number;

  constructor() {
    this.todos = [
      new Todo(0, 'First task'),
      new Todo(1, 'second task'),
      new Todo(2, 'Third task')
    ];

    this.nextId = 3;
   }

   public addTodo(text: string): void {
     if (text && text !== ' ') {
       const todo = new Todo(this.nextId, text);
       this.todos.push(todo);
       this.nextId++;
    }
    return;
   }

   public getTodos(): Todo[] {
     return this.todos;
   }

   public removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
   }

}
