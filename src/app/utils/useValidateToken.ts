"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { userKey, loginKey } from "@/app/utils/constants";
import { encrypt_userobj, encrypt_key } from "@/app/utils/auth-utils";
import { VerifyTokenInterfaceResponse } from "@/app/models/auth";
import { useVerifyToken } from "@/app/lib/queriesandmutation/auth";

const useValidateToken = () => {

  const [authStatus, setAuthStatus] = useState<boolean>(false);

  const {
    mutateAsync: validateUser,
    isPending: isValidatingUser,
    isSuccess: isValidateSucessful,
  } = useVerifyToken();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      // Call the validateUser function with the token
      validateUser({ token })
        .then((response: VerifyTokenInterfaceResponse) => {
          // Handle successful validation
          if (response.message === "Email Verified Successfully") {
            Cookies.set(loginKey, encrypt_key(response.data.token), {
              secure: true,
            });
            Cookies.set(userKey, encrypt_userobj(response.data), {
              secure: true,
            });
            setAuthStatus(true);
            console.log("Very res:", response);
          } else {
            // Handle invalid token (e.g., clear cookies, redirect)
            Cookies.remove(loginKey);
            Cookies.remove(userKey);
            setAuthStatus(false);
          }
        })
        .catch((error: any) => {
          // Handle validation error
          console.error("Token validation failed:", error);
            Cookies.remove(loginKey);
            Cookies.remove(userKey);
            setAuthStatus(false);
        });
    } else {
      console.error("No token found in URL");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isValid: authStatus, isPending: isValidatingUser, success: isValidateSucessful};
};

export default useValidateToken;