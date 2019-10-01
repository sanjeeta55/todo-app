import { Injectable } from '@angular/core';
import { Todo } from "../todo/todo.model"

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todoList: Todo[] = [
   
  ];

  addTodo(newItem) {
    const newTodo: Todo = {
      id: 0,
      todo: newItem,
      completed: false
    }
    this.todoList.push(newTodo)
  }

  todoCompleted(index) {
    console.log(this.todoList);
    this.todoList[index].completed = !this.todoList[index].completed
  }

  deleteItem(index) {
    // this.todoList = this.todoList.filter( item => item.id !== index)
    this.todoList.splice(index);
  }

}
