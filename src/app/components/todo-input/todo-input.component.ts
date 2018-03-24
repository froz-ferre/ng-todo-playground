import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent implements OnInit {

  todoListArray: any[];
  constructor(private todoService: TodoService) {
    
  }

  ngOnInit() {

    // add item to todo list and sort it by checked
    this.todoService.getTodos().snapshotChanges()
    .subscribe(item => {
      this.todoListArray = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x['$key'] = element.key;
        this.todoListArray.push(x);
      });

      // sort array by isChecked like false -> true
      this.todoListArray.sort((a,b) => a.isChecked - b.isChecked)
    });
  }

  onAdd(task) {
    this.todoListArray.addTodo(task);
    task.value = null;
  }
}
