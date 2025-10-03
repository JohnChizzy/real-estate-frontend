"use client";
import Image from "next/image";
import Link from "next/link";
import KanuLogo from "@/app/assets/images/kanu-logo-green.svg";
import { usePathname } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import Chart from "@/app/assets/images/chart.svg";
import Developer from "@/app/assets/images/developer-icon.svg";
import ProjectIcon from "@/app/assets/images/project-icon.svg";
import ProfileIcon from "@/app/assets/images/profile-icon.svg";
import UserIcon from "@/app/assets/images/user-icon.svg";
import LogoutIcon from "@/app/assets/images/logout.svg";
import ListItem from "@/app/ui/shared/list-items/LisItem";
import Cookies from "js-cookie";
import { userKey, loginKey } from "@/app/utils/constants";
import { decrypt_user0bj } from "@/app/utils/auth-utils";
import { ucFirst } from "@/app/utils/ui-helpers";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();


  const ddpTabs = [
    {
      title: "Dashboard",
      icon: Chart,
      route: "/dashboard",
    },
    {
      title: "Developer",
      icon: Developer,
      route: "/developers",
    },
    {
      title: "Project",
      icon: ProjectIcon,
      route: "/projects",
    },
    {
      title: "Users",
      icon: UserIcon,
      route: "/users",
    },
    {
      title: "Uploads",
      icon: ProjectIcon,
      route: "/uploads",
    },
  ];

  // Logout
  const logout = () => {
    Cookies.remove(loginKey);
    Cookies.remove(userKey);
    window.location.href = "/login";
  };

  return (
    <nav className="flex flex-col bg-[#F2F2F2] pt-[5.6rem] pb-[5.58rem] pl-[3rem]">

      
    </nav>
  );
}
