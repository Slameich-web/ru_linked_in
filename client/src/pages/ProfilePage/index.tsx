import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const ProfilePage: FC = () => {
  const { id } = useParams();
  return id ? <div>ProfilePage user {id}</div> : <div>ProfilePage</div>;
};
