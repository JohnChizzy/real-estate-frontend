import aes from 'crypto-js/aes';
import enc from 'crypto-js/enc-utf8';
import { ENCRYPTION_KEY, loginKey } from './constants';
import Cookies from 'js-cookie';

export const encrypt_key = (token: any) => {
  const encryptedToken = aes.encrypt(token, ENCRYPTION_KEY).toString();
  return encryptedToken;
};

export const decrypt_key = (token: any): any => {
  if (token) {
    const decryptedToken = aes.decrypt(token, ENCRYPTION_KEY);
    return decryptedToken.toString(enc);
  }
};

export const encrypt_userobj = (user: any) => {
  const encryptedUser = aes
    .encrypt(JSON.stringify(user), ENCRYPTION_KEY)
    .toString();

  return encryptedUser;
};

export const decrypt_user0bj = (user: any): any => {
  if (user) {
    const decryptedUser = aes.decrypt(user, ENCRYPTION_KEY);
    return JSON.parse(decryptedUser.toString(enc));
  }
};

export const getAccessToken = () => {
  const token = decrypt_key(Cookies.get(loginKey));
  if (token) {
    return token;
  }
  return null;
};
