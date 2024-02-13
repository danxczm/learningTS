import { create } from 'zustand';

import { IItem } from '../types/todo';

export type State = {
  todos: IItem[];
};

export type Actions = {
  addTodo: (todo: IItem) => void;
  deleteTodo: (id: string) => void;
};

export const useTodoStore = create<State & Actions>()(set => ({
  todos: [],
  addTodo: (todo: IItem) =>
    set(state => ({
      todos: [...state.todos, { id: crypto.randomUUID(), text: todo.text }],
    })),
  deleteTodo: (id: string) =>
    set(state => ({
      todos: state.todos.filter(item => item.id !== id),
    })),
}));
