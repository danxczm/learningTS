import React, { useState } from 'react';

import { IItem } from './types/todo';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]);

  const todoAddHandler = (todo: IItem) => {
    setTodos(prev => [...prev, { id: crypto.randomUUID(), text: todo.text }]);
  };

  const todoRemoveHandler = (id: string): void => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="flex justify-center w-screen h-screen font-medium text-gray-600 bg-gray-100">
      <div className="max-w-full my-20 p-8 bg-white rounded-lg shadow-lg w-96">
        <TodoAdd onAddTodo={todoAddHandler} />
        <div className="mt-4">
          <TodoList onRemoveTodo={todoRemoveHandler} todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default App;
