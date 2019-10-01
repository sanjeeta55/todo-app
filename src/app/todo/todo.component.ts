import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todo: TodoService) { }
  

  ngOnInit() {
    this.todoList = this.todo.todoList
  }

  todoList: Todo[] = []

}
import {MatToolbarModule} from '@angular/material/toolbar';