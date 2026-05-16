"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@chakra-ui/react";
import clsx from "clsx";
import LeftTiles from "@/public/images/left-tiles.svg";
import RightTiles from "@/public/images/left-tiles.svg";
import CustomButton, {
  ButtonStates,
  ButtonType,
} from "@/app/ui/shared/buttons/Button";
import EstateinLogo from "@/public/images/real-estate-logo.svg";
import EmailIcon from "@/public/images/email-icon.svg";
import SendIcon from "@/public/images/send-icon.svg";
import FacebookIcon from "@/public/images/facebook-icon.svg";
import TwitterIcon from "@/public/images/twitter-icon.svg";
import LinkedInIcon from "@/public/images/linkenIn-icon.svg";
import YoutubeIcon from "@/public/images/youtube-icon.svg";

const Footer = () => {
  const [email, setEmail] = useState("");

  const storeEmail = (value: string) => {
    setEmail(value);
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") storeEmail(email);
  };
  const footerLinks = [
    {
      title: "Home",
      links: [
        { name: "Hero Section", href: "#" },
        { name: "Features", href: "#" },
        { name: "Properties", href: "#" },
        { name: "Testimonials", href: "#" },
        { name: "FAQs", href: "#" },
      ],
    },
    {
      title: "About Us",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Our Works", href: "#" },
        { name: "How It Works", href: "#" },
        { name: "Our Team", href: "#" },
        { name: "Our Clients", href: "#" },
      ],
    },
    {
      title: "Properties",
      links: [
        { name: "Portfolio", href: "#" },
        { name: "Categories", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Valuation Mastery", href: "#" },
        { name: "Strategic Marketing", href: "#" },
        { name: "Negotiation Wizardry", href: "#" },
        { name: "Closing Success", href: "#" },
        { name: "Property Management", href: "#" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { name: "Contact Form", href: "#" },
        { name: "Our Offices", href: "#" },
      ],
    },
  ];

  const socialMediaLinks = [
    { name: "Facebook", href: "#", icon: FacebookIcon },
    { name: "Twitter", href: "#", icon: TwitterIcon },
    { name: "LinkedIn", href: "#", icon: LinkedInIcon },
    { name: "YouTube", href: "#", icon: YoutubeIcon },
  ];

  return (
    <footer className="mt-[9.6rem]">
      <div className="relative py-[5rem] lg:py-[6rem] 3xl:py-[10rem] px-[1.6rem] md:px-[9rem] 3xl:px-[16.2rem] flex flex-col md:flex-row md:justify-between md:items-center border border-grey13">
        <div className="relative z-10 md:basis-3/4">
          <h2 className="urb-s-24 md:text-[3.2rem]! 3xl:text-[4rem]! font-bold">
            Start Your Real Estate Journey Today
          </h2>
          <p className="mt-[0.6rem] md:mt-[1rem] 3xl:mt-[1.4rem] urb-m-14 lg:text-[1.6rem]! 3xl:text-[1.8rem]! text-grey14">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <CustomButton
          type={ButtonType.link}
          state={ButtonStates.royal}
          url="/properties"
          customStyle="md:w-fit! hidden! md:flex! relative z-10"
        >
          Explore Properties
        </CustomButton>
        {/* TODO: Position images properly */}
        <Image
          src={LeftTiles}
          className="absolute left-0 h-full object-cover z-0 max-lg:rounded-[1.2rem]"
          alt="left tiles"
          height={0}
          width={0}
        />
        <Image
          src={RightTiles}
          className="absolute right-0 h-full object-cover z-0"
          alt="right tiles"
          height={0}
          width={0}
        />
      </div>
      <div className="py-[5rem] lg:py-[6rem] 3xl:py-[10rem] px-[1.6rem] md:px-[9rem] 3xl:px-[16.2rem] flex flex-col md:flex-row gap-y-[5rem] gap-x-[10.1rem] 3xl:gap-x-[19.5rem]">
        {/* newsletter */}
        <div>
          {/* <h3 className="urb-s-14 text-grey14">Subscribe to our Newsletter</h3> */}
          <Link href="/">
            <Image
              className=""
              src={EstateinLogo}
              alt="Estatein logo"
              width={0}
              height={0}
            />
          </Link>
          <div>
            <div className="flex items-center bg-black02 border border-grey13 rounded-[1.2rem] px-[2.4rem] py-[2.1rem] mt-[3rem]">
              <div className="flex-1 h-full w-full bg-black02 flex items-center">
                <div>
                  <Image
                    height={0}
                    width={0}
                    className="m-[0_15px_0_13px] h-[1.5rem] w-[1.6rem] 3xl:w-[2rem] 3xl:h-[1.8rem]"
                    src={EmailIcon}
                    alt="email icon"
                  />
                </div>
                <Input
                  className="h-full w-[80%] urb-m-14 lg:text-[1.6rem]! 3xl:text-[1.8rem]! bg-inherit! !outline-none !border-none !ring-0 px-3 focus:border-transparent"
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={"Enter your email address"}
                />
              </div>
              <button
                className="h-full flex items-center"
                onClick={() => {
                  // if (searchValue.trim() !== "") {
                  //   router.push(`/search?query=${encodeURIComponent(searchValue)}`);
                  // }
                }}
              >
                <span className="mr-3"></span>
                <Image
                  className="m-[0_15px_0_13px] cursor-pointer h-[2rem] w-[2rem] 3xl:w-[2.4rem] 3xl:h-[2.4rem]"
                  src={SendIcon}
                  alt="send icon"
                  height={0}
                  width={0}
                />
              </button>
            </div>
          </div>
        </div>
        {/* links */}
        <div className="md:col-span-7 grid grid-rows-[1fr] content-start grid-cols-2 sm:grid-cols-3 lg:grid-cols-[max-content_max-content_max-content_max-content_max-content] gap-x-[8rem] 3xl:gap-x-[9rem] gap-y-10">
          {footerLinks.map((column, index) => (
            <div
              className="border-b border-grey13 pb-8 md:border-b-0 md:pb-0 h-fit"
              key={column.title}
            >
              <div
                className={clsx(
                  // Mobile: full-height column with bottom border
                  // "border-b border-grey13 pb-8 md:border-b-0 md:pb-0",

                  // Mobile: vertical divider only on the right column of each row
                  index % 2 === 1 &&
                    "border-l border-grey13 pl-8 md:border-l-0 md:pl-0",
                )}
              >
                <h4 className="text-grey14 urb-m-16 lg:text-[1.8rem]! 3xl:text-[2rem]! mb-[3rem]">
                  {column.title}
                </h4>
                <ul className="space-y-[2rem] text-[15px]">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="hover:underline urb-m-14 lg:text-[1.6rem]! 3xl:text-[1.8rem]! transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="bg-black03 mt-16 py-[2rem] lg:py-[2.2rem] 3xl:py-[4rem] px-[1.6rem] md:px-[9rem] 3xl:px-[16.2rem] flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row gap-x-[2rem] 3xl:gap-x-[3.8rem] urb-m-14 3xl:text-[1.8rem]! text-center md:text-left max-md:order-2">
          <p>
            &copy; {new Date().getFullYear()} Estatein. All Rights Reserved.
          </p>
          <p>Terms & Conditions</p>
        </div>

        <div className="flex gap-6 max-md:order-1">
          {socialMediaLinks.map((social) => (
            <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
              <Image
                height={0}
                width={0}
                className="w-[6rem] sm:w-[4rem] 3xl:w-[5.2rem] h-[6rem] sm:h-[4rem] 3xl:h-[5.2rem]"
                src={social.icon}
                alt={social.name}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
