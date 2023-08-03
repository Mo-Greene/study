정규식

import { removeHyphen } from './text';
export const deleteSpace = (text: string) => text.replace(/\s/g, '');
export const regexEmail = (email: string) => {
  const regExp =
    /^([\w-+']+(?:\.[\w-+']+)*)@[a-z]{1,12}\.([a-z]{2,6}(?:\.[a-z]{2,3})?)$/;
  return regExp.test(email);
};
export const regexPassword = (password: string) => {
  const regExp =
    /^(?=.*[a-z])(?=.*\d)(?=.*[~!@#$%^&*()_+|?])[a-z\d~!@#$%^&*()_+|?]{8,20}$/i;
  return regExp.test(password);
};
export const regexPhone = (phone: string) => {
  const regExp = /^\d{3}\d{4}\d{4}$/;
  return regExp.test(removeHyphen(phone));
};
export const regexNickname = (nickname: string) => {
  const regExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
  return regExp.test(nickname);
};
export const regexCode = (code: string) => {
  const regExp = /^[0-9]{6}$/;
  return regExp.test(code);
};
export const removeZero = (value: string) => value.replace(/(^0+)/, '');


//이메일 정규식(마지막 혹은 앞에 '_-' 비허용)
let reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

//(전부 허용)
const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;