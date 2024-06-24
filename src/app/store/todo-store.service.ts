import { computed, Injectable, signal } from '@angular/core';

export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class TodoSignalsStateService {
  constructor() {}

  todos = signal<Array<Todo>>([
    { id: 1, title: 'First Todo', done: false },
    { id: 2, title: 'Second Todo', done: true },
    { id: 3, title: 'Third Todo', done: false },
  ]);

  loading = signal(false);

  todosLength = computed(() => this.todos().length);

  init() {
    this.loading.set(true);
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('fake request');
        resolve(null);
      }, 1000);
    }).then(() => {
      this.todos.update((current) => [
        ...current,
        {
          id: 4,
          title: 'Fourth Todo',
          done: false,
        },
      ]);
      this.loading.set(false);
    });
  }

  addTodo(todo: Todo) {
    this.loading.set(true);
    new Promise((resolve) => {
      setTimeout(() => {
        console.log('fake request');
        resolve(null);
      }, 1000);
    }).then(() => {
      this.todos.update((current) => [...current, todo]);

      this.loading.set(false);
    });
  }
}
