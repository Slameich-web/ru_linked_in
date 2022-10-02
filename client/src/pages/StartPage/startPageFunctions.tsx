import { Dispatch, SetStateAction } from 'react';
import { $api } from '../../http';

export async function getCountRegisterUsers(
  setNumber: Dispatch<SetStateAction<number>>,
  setIsError: Dispatch<SetStateAction<boolean>>
) {
  try {
    const { data } = await $api.get('/users/usersCount');
    setNumber(data);
    setIsError(false);
  } catch {
    setIsError(true);
  }
}
