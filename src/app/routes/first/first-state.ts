import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

export class TodoState {
  private static _todos: Array<Todo> = [
    { id: 1, title: 'First Todo', done: false },
    { id: 2, title: 'Second Todo', done: true },
    { id: 3, title: 'Third Todo', done: false },
  ];

  private static _loading = new BehaviorSubject(false);
  private setLoading(loading: boolean) {
    TodoState._loading.next(loading);
  }

  private static _observableTodos = new BehaviorSubject<Array<Todo>>(
    TodoState._todos
  );

  constructor() {}

  init() {
    this.setLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('fake request');
        resolve(null);
      }, 1000);
    }).then(() => {
      TodoState._todos.push({
        id: 4,
        title: 'Fourth Todo',
        done: false,
      });
      TodoState._observableTodos.next(TodoState._todos);
      this.setLoading(false);
    });
  }

  get todos() {
    return TodoState._observableTodos.pipe();
  }
  get loading() {
    return TodoState._loading;
  }
  addTodo(todo: Todo) {
    this.setLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('fake request');
        resolve(null);
      }, 1000);
    }).then(() => {
      TodoState._todos.push(todo);
      TodoState._observableTodos.next(TodoState._todos);
      this.setLoading(false);
    });
  }
}
