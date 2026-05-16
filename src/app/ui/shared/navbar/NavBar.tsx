"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import EstateinLogo from "@/public/images/real-estate-logo.svg";
import HamburgerIcon from "@/public/images/hamburger-icon.svg";
import { usePathname } from "next/navigation";
import CustomButton, {
  ButtonSize,
  ButtonStates,
  ButtonType,
} from "@/app/ui/shared/buttons/Button";
import clsx from "clsx";

export default function NavBar() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinksList = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about-us" },
    { title: "Properties", url: "/properties" },
    { title: "Services", url: "/services" },
  ];

  return (
    <header className="bg-black03 fixed left-0 top-0 z-20 px-[1.6rem] md:px-[9rem] 3xl:px-[16.2rem] py-[2.55rem] backdrop-blur-sm w-screen">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src={EstateinLogo} alt="Estatein logo" width={0} height={0} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-x-[1rem] md:gap-x-[2.4rem] lg:gap-x-[3rem]">
          {navLinksList.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              className={clsx(
                "font-urbanist font-medium text-[1.2rem] md:text-[1.4rem] lg:text-[1.8rem]",
                pathname === link.url &&
                  "bg-black02 px-[1.6rem] py-[0.8rem] md:px-[2rem] md:py-[1.4rem] lg:px-[2.4rem] lg:py-[1.6rem] rounded-[0.5rem] md:rounded-[0.8rem] lg:rounded-[1rem]",
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <CustomButton
            state={ButtonStates.unstyled}
            size={ButtonSize.md}
            type={ButtonType.link}
            url="/contact-us"
            customStyle="!w-fit !bg-black02 !px-[1.6rem] !py-[0.8rem] md:!px-[2rem] md:!py-[1.4rem] lg:!px-[2.4rem] lg:!py-[1.6rem] font-urbanist !font-medium !text-[1.2rem] md:!text-[1.4rem] lg:!text-[1.8rem] !rounded-[0.5rem] md:!rounded-[0.8rem] lg:!rounded-[1rem] hover:!bg-black01"
          >
            Contact Us
          </CustomButton>
        </div>

        {/* Hamburger Button - Mobile Only */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes className="w-[2.8rem] h-[2.8rem]" />
          ) : (
            <Image
              className="w-[2.8rem] h-[2.8rem]"
              src={HamburgerIcon}
              alt="Menu"
              width={0}
              height={0}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed bg-black03 z-50 pt-24 pb-[1.8rem] px-8 overflow-auto right-0 rounded-[0.4rem] w-[50%]"
        >
          <div className="flex flex-col gap-8 text-[1.8rem] font-medium">
            {navLinksList.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                onClick={closeMenu}
                className={clsx(
                  "py-3 border-b border-grey13 text-[1.2rem]",
                  pathname === link.url && "text-white font-semibold",
                )}
              >
                {link.title}
              </Link>
            ))}

            {/* Contact Button in Mobile Menu */}
            <div className="pt-6">
              <CustomButton
                state={ButtonStates.unstyled}
                size={ButtonSize.md}
                type={ButtonType.link}
                url="/contact-us"
                customStyle="!w-full !bg-black02 !py-6 !text-[1.2rem] font-medium rounded-[0.5rem] hover:!bg-black01"
              >
                Contact Us
              </CustomButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
