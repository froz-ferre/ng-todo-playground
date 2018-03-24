import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent implements OnInit {

  taskText: string;
  constructor(private todoService: TodoService) {
    
  }

  ngOnInit() { }

  onAdd() {
    this.todoService.addTodo(this.taskText);
    this.taskText = null;
  }
}
