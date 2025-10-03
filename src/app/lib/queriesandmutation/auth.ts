import { useMutation } from "@tanstack/react-query";
import {
  login,
  signup,
  forgotPassword,
  resetPassword,
  editAccount,
  changePassword,
  verifyToken
} from "../api/auth";
import {
  LoginInterface,
  CreateAccountInterface,
  ForgotInterface,
  ResetPasswordInterface,
  EditAccountInterface,
  ChangePasswordInterface,
  VerifyTokenInterface
} from "@/app/models/auth";

export const useUserLogin = () => {
  return useMutation({
    mutationFn: (user: LoginInterface) => login(user),
  });
};
export const useUserSignup = () => {
  return useMutation({
    mutationFn: (user: CreateAccountInterface) => signup(user),
  });
};

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (user: ForgotInterface) => forgotPassword(user),
  });
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: (user: ResetPasswordInterface) => resetPassword(user),
  });
};

export const useEditAccount = (userId: string) => {
  return useMutation({
    mutationFn: (payload: EditAccountInterface) =>
      editAccount(payload, userId),
  });
};

export const useChangePassword = (userId: string) => {
  return useMutation({
    mutationFn: (payload: ChangePasswordInterface) =>
      changePassword(payload, userId),
  });
};

export const useVerifyToken = () => {
  return useMutation({
    mutationFn: (payload: VerifyTokenInterface) => verifyToken(payload),
  });
};





// export const useGetDevelopers = (page: number, limit: number) => {
//   return useQuery<DeveloperResponse[]>({git p
//     queryKey: [
//       QUERY_KEYS.GET_DEVELOPERS,
//       {
//         page,
//         limit,
//       },
//     ],
//     queryFn: () =>
//       fetchAgentsRoles({
//         queryKey: [
//           QUERY_KEYS.GET_DEVELOPERS,
//           {
//             page: page,
//             limit: limit,
//           },
//         ],
//       }),
//   });
// };
