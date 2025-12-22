"use client";
import Image from "next/image";
import Link from "next/link";
import EstateinLogo from "@/public/images/real-estate-logo.svg";
import { usePathname } from "next/navigation";
import CustomButton, { ButtonSize, ButtonStates, ButtonType } from "@/app/ui/shared/buttons/Button";

export default function NavBar() {
  const pathname = usePathname();

  const navLinksList: {
    title: string;
    url: string;
  }[] = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about-us" },
    { title: "Properties", url: "/properties" },
    { title: "Services", url: "/services" },
  ];

  return (
    <header className="bg-black03 fixed left-0 top-0 z-20 px-[1.6rem] md:px-[9rem] xl:px-[16.2rem] flex items-center justify-between  py-[2.55rem]  backdrop-blur-sm w-screen">
      <div>
        <Link href="/">
          <Image
            className=""
            src={EstateinLogo}
            alt="Estatein logo"
            width={0}
            height={0}
          />
        </Link>
      </div>
      <nav className="flex items-center gap-x-[1rem] md:gap-x-[2.4rem] lg:gap-x-[3rem]">
        {navLinksList.map((link) => (
          <Link
            key={link.title}
            className={`${
              pathname === link.url
                ? `bg-black02 px-[1.6rem] py-[0.8rem] md:px-[2rem] md:py-[1.4rem] lg:px-[2.4rem] lg:py-[1.6rem] rounded-[0.5rem] md:rounded-[0.8rem] lg:rounded-[1rem]`
                : ""
            } font-urbanist font-medium text-[1.2rem] md:text-[1.4rem] lg:text-[1.8rem]`}
            href={link.url}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      < CustomButton
        state={ButtonStates.unstyled}
        size={ButtonSize.md}
        type={ButtonType.link}
        url="/contact-us"
        customStyle="!w-fit !bg-black02 !px-[1.6rem] !py-[0.8rem] md:!px-[2rem] md:!py-[1.4rem] lg:!px-[2.4rem] lg:!py-[1.6rem] font-urbanist !font-medium !text-[1.2rem] md:!text-[1.4rem] lg:!text-[1.8rem] !rounded-[0.5rem] md:!rounded-[0.8rem] lg:!rounded-[1rem] hover:!bg-black01 "
        >
        Contact Us
      </CustomButton>
    </header>
  );
}
