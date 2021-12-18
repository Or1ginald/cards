import { PATH } from 'enum';

export const appNavigation: appNavigationType = [
  { id: 1, title: 'registration', link: PATH.REGISTRATION },
  { id: 2, title: 'login', link: PATH.LOGIN },
  { id: 3, title: 'profile', link: PATH.PROFILE },
  { id: 4, title: 'confirmPassword', link: PATH.CONFIRM_PASSWORD },
  { id: 5, title: 'popup', link: PATH.POPUP },
  { id: 6, title: 'createNewPassword', link: PATH.CREATE_NEW_PASSWORD },
];

type appNavigationType = { id: number; title: string; link: string }[];
