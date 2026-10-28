import React from 'react';
import { ToDosType } from '../../types/TodosType';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: ToDosType[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  const todosMas = [...todos];

  return (
    <section className="TodoList">
      {todosMas.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
