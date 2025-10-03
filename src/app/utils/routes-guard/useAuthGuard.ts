"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { loginKey, userKey } from "../constants";
import Cookies from "js-cookie";
import { decrypt_key, decrypt_user0bj } from "@/app/utils/auth-utils";
import { protectedRoutes, adminRoutes } from "../routes";
import { pathToRegexp } from "path-to-regexp";

const useAuthGuard = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const session = decrypt_key(Cookies.get(loginKey));
  const user = decrypt_user0bj(Cookies.get(userKey));

  const pathName = usePathname();

  const isProtectedRoute = protectedRoutes.some((route) => {
    const regex = pathToRegexp(route);
    return regex.regexp.test(pathName);
  });

   const isAdminRoute = adminRoutes.some((route) => {
    const regex = pathToRegexp(route);
    return regex.regexp.test(pathName);
  });

  const router = useRouter();

  // useEffect(() => {
  //   if (isLoggedIn === null && !hasShownToast) {
  //     router.push("/");
  //     setHasShownToast(true);
  //   }
  //   if (isLoggedIn && window.location.pathname === "/") {
  //     router.push("/dashboard");
  //   }
  // }, [isLoggedIn, router, hasShownToast]);

  // return <>{children}</>;

  useEffect(() => {
    if (!isMounted) return;
    if (!session && (isProtectedRoute || isAdminRoute)) {
      router.replace("/");
    }
    if (user?.role !== "admin" && isAdminRoute) {
      router.replace("/dashboard");
    }
  }, [session, router, isMounted, isProtectedRoute, isAdminRoute, user?.role]);

  return { session, isMounted };
};

export default useAuthGuard;
