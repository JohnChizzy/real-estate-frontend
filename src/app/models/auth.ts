export interface LoginInterface extends Record<string, unknown> {
  email: string;
  password: string;
}

export interface AuthResponse {
  first_name: string;
  last_name: string;
  gender: string;
  country: string;
  date_of_birth: string;
  email: string;
  company: string;
  role: string;
  id: string;
  created_at: string;
  updated_at: string;
  token: string;
}

export interface CreateAccountInterface extends Record<string, unknown> {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  date_of_birth: string;
  gender: string | { value: string; label: string };
  country: string | { value: string; label: string };
  company: string;
}

export interface ForgotInterface extends Record<string, unknown> {
  email: string;
}

export interface EmailVerificationInterface extends Record<string, unknown> {
  email: string;
}

export interface ResetPasswordInterface extends Record<string, unknown> {
  password: string;
  confirm_password: string;
  token: string;
}

export interface VerifyEmailInterface extends Record<string, unknown> {
  otp: string;
  email: string;
}

export interface EditAccountInterface extends Record<string, unknown> {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
}

export interface ChangePasswordInterface extends Record<string, unknown> {
  old_password: string;
  new_password: string;
  confirm_password: string;
}

export interface VerifyTokenInterface extends Record<string, unknown> {
  token: string;
}

export interface VerifyTokenInterfaceResponse {
  success: boolean;
  message: string;
  statusCode: number;
  data: AuthResponse;
}
