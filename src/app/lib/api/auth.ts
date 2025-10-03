import config from "../../config/index";
import { client } from "../client";
import {
  AuthResponse,
  LoginInterface,
  CreateAccountInterface,
  ForgotInterface,
  ResetPasswordInterface,
  EditAccountInterface,
  ChangePasswordInterface,
  VerifyTokenInterface,
  VerifyTokenInterfaceResponse
} from "../../models/auth";

//login
async function login(payload: LoginInterface) {
  try {
    const response = await client<AuthResponse>(
      `${config.BASE_URL}/auth/login`,
      {
        body: payload,
      }
    );
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function signup(payload: CreateAccountInterface) {
  try {
    const response = await client<AuthResponse>(
      `${config.BASE_URL}/auth`,
      {
        body: payload,
      }
    );
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function forgotPassword(payload: ForgotInterface) {
  try {
    const response = await client<any>(
      `${config.BASE_URL}/auth/forgot-password`,
      {
        body: payload,
      }
    );
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function resetPassword(payload: ResetPasswordInterface) {
  try {
    const response = await client<any>(
      `${config.BASE_URL}/auth/reset-password
`,
      {
        body: payload,
      }
    );
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function editAccount (payload: EditAccountInterface, userId: string) {
  try {
    const response = await client<AuthResponse>(
      `${config.BASE_URL}/users/${userId}`,
      {
        method: 'PUT',
        body: payload,
      }
    );
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function changePassword (payload: ChangePasswordInterface, userId: string) {
  try {
    const response = await client<any>(
      `${config.BASE_URL}/users/change-password/${userId}`,
      {
        method: 'PUT',
        body: payload,
      }
    );
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function verifyToken(payload: VerifyTokenInterface) {
  try {
    const response = await client<VerifyTokenInterfaceResponse>(
      `${config.BASE_URL}/auth/verify-email
`,
      {
        body: payload,
      },
      true // sendCompleteResponse
    );
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export { login, signup, forgotPassword, resetPassword, editAccount, changePassword, verifyToken };
