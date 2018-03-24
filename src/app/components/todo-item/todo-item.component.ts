import { TodoService } from './../../services/todo.service';
import { Todo } from './../../classes/todo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  private todoListArray :any[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().snapshotChanges()
    .subscribe()
  }

  
}
