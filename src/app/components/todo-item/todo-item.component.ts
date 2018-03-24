import { TodoService } from './../../services/todo.service';
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

  switchCheck($key, isChecked) {
    this.todoListArray.checkTask($key, !isChecked);
  }

  removeTask($key) {
    this.todoListArray.removeTodo($key);
  }
}


