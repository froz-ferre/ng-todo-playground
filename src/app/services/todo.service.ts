import { Todo } from './../classes/todo';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class TodoService {

  todoList: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) { }

   addTodo(task: string) {
       this.todoList.push({
         task: task,
         isChecked: false
       });
   }

   getTodos() {
    this.todoList = this.firebasedb.list('tasks');
    return this.todoList;
  }

   checkTask($key: string, flag: boolean) {
     this.todoList.update($key, {isChecked: flag});
   }

   removeTodo($key: string): void {
    this.todoList.remove($key);
   }

}
