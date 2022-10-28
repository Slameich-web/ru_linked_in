import { useParams } from 'react-router-dom';

export const ProfilePage = () => {
  const { id } = useParams();
  return id ? <div>ProfilePage user {id}</div> : <div>ProfilePage</div>;
};
