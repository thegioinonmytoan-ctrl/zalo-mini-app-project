import { atom } from 'recoil';

export const userState = atom({
  key: 'user',
  default: {
    id: '123456',
    name: 'Zalo User',
    avatar: 'https://h5.zdn.vn/static/images/avatar.png'
  }
});