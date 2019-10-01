import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor(private todo: TodoService) { }

  ngOnInit() {
  }

  addTodo(item) {
    if(item === '') {
      return
    }
    this.todo.addTodo(item)
  }

}
