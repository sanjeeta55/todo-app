import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from "../todo.model"


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoList: TodoService) { }

  ngOnInit() {
    this.todoListItems = this.todoList.todoList
  }

  todoListItems: Todo[] = []

  onTaskCheck(index) {
    this.todoList.todoCompleted(index);
  }

  onDelete(index) {
    this.todoList.deleteItem(index);
  }
}
