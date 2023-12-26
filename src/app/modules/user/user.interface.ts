/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type TUser = {
  username: string;
  email: string;
  password: string;
  role?: 'user' | 'admin';
};

export type TLoginUser = {
  username: string;
  password: string;
};

export interface UserModel extends Model<TUser> {
  isUserExistsByUserName(username: string): Promise<TUser>;
  isPasswordMatched(plaintextPassword:string,hashedPassword:string):Promise<boolean>
}
