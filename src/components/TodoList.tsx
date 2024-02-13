import React from 'react';
import { useTodoStore } from '../store/store';

const TodoList: React.FC = () => {
  const todos = useTodoStore(state => state.todos);
  const onRemoveTodo = useTodoStore(state => state.deleteTodo);

  let content: JSX.Element[];

  if (todos.length === 0) {
    return <span>There are no tasks for today yet!</span>;
  }

  content = todos.map(task => (
    <li className="grid grid-cols-[1fr_24px] items-center gap-6" key={task.id}>
      <label className="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md px-2 hover:bg-slate-100">
        <input
          type="checkbox"
          className="peer size-3.5 appearance-none rounded-sm border border-slate-300 accent-pink-500 dark:accent-pink-600 checked:appearance-auto"
        />
        <span className="select-none text-slate-700 peer-checked:text-slate-400 peer-checked:line-through">
          {task.text}
        </span>
      </label>
      <button
        onClick={() => {
          onRemoveTodo(task.id);
        }}
      >
        <div className="size-[22px] rounded-md p-1 hover:bg-red-50 hover:text-red-500 peer-has-[:checked]:hidden">
          <svg fill="none" viewBox="0 0 25 25" strokeWidth="3" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
      </button>
    </li>
  ));

  return <ul>{content}</ul>;
};

export default TodoList;
