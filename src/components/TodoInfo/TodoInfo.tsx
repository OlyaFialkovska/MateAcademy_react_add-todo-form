import { ToDosType } from '../../types/TodosType';
import { UserInfo } from '../UserInfo';
import cn from 'classnames';
import usersFromServer from '../../api/users';
import { UsersType } from '../../types/UsersType';

type Props = {
  todo: ToDosType;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const foundUser: UsersType | undefined = usersFromServer.find(
    user => user.id === todo.userId,
  );

  return (
    <article
      data-id={`${todo.id}`}
      className={cn('TodoInfo', {
        'TodoInfo--completed': todo.completed,
      })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {foundUser && <UserInfo user={foundUser} />}
    </article>
  );
};
