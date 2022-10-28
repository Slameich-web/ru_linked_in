import { useParams } from 'react-router-dom';
import './Profile.scss';
export const ProfilePage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="profile_wrapper">
      <div>
        <div className="profile_wrapper_photo">
          <img
            src="https://avatars.mds.yandex.net/i?id=3e9d902caf2729486cf5949bd36eaa49-4569757-images-thumbs&n=13"
            alt="Photo"
          />
        </div>
        <div className="profile_wrapper_under_photo">
          <div>Локация:</div> <div>Moscow</div>
          <div>Телефон:</div> <div>89031147335</div>
          <div>Telegram:</div> <div>@Slameich</div>
        </div>
      </div>
      <div className="profile_wrapper_about">
        <div>Prokhorov Aleksandr</div>
        <div>Мои навыки: React Typescript Zustand</div>
        <div>Про слов про меня: Я разработчик</div>
        <div>Место работы: MTS BANK</div>
      </div>
    </div>
  );
};
