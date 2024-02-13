import React from 'react';

import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className="flex justify-center w-screen h-screen font-medium text-gray-600 bg-gray-100">
      <div className="max-w-full my-20 p-8 bg-white rounded-lg shadow-lg w-96">
        <TodoAdd />
        <div className="mt-4">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
