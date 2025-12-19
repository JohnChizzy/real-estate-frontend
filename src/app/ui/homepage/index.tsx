import Image from "next/image";
import WavyLines from "@/app/assets/images/wavy-lines.svg";
import Skyscrapper from "@/app/assets/images/skyscrapper.png";
import CustomButton, {
  ButtonStates,
  ButtonType,
} from "@/app/ui/shared/buttons/Button";
import ListItem from "@/app/ui/shared/list-items/LisItem";

const Homepage = () => {
  const metrics = [
    {
      title: "300+",
      description: "Happy Clients",
    },
    {
      title: "15k+",
      description: "Properties Listed",
    },
    {
      title: "16+",
      description: "Years of Experience",
    },
  ];

  return (
    <div className="mt-[calc(110px)]">
      {/* Hero section */}
      <section className="bg-black03">
        <div className="flex">
          <div className="flex-1 pl-[1.6rem] md:pl-[9rem] xl:pl-[16.2rem] py-[14.4rem] md:pr-[6rem] xl:pr-[8rem] bg-black02">
            <h1 className="urb-s-28 md:text-[4.6rem]! xl:text-[6rem]! font-bold mb-[2.4rem]">
              Discover Your Dream <br /> Property with Estatein
            </h1>
            <p className="lex-m-14 md:text-[1.6rem]! xl:text-[1.8rem]! text-[#999999]">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
            <div className="mt-[6rem] flex md:gap-x-[1.6rem] xl:gap-x-[2rem]">
              <CustomButton
                customStyle="!w-fit"
                type={ButtonType.link}
                state={ButtonStates.primaryOutline}
                url="/about-us"
              >
                Learn More
              </CustomButton>
              <CustomButton
                customStyle="!w-fit"
                type={ButtonType.link}
                state={ButtonStates.royal}
                url="/properties"
              >
                Browse Properties
              </CustomButton>
            </div>
            <div className="mt-[6rem] flex md:gap-x-[1.6rem] xl:gap-x-[2rem]">
              {metrics.map((metric) => (
                <ListItem
                  key={metric.title}
                  mainTitle={metric?.title}
                  mainTitleStyle="urb-b-24 md:text-[3rem]! xl:text-[4rem]!"
                  subTitle={metric?.description}
                  subTitleStyle="lex-m-14 md:text-[1.6rem]! xl:text-[1.8rem]! text-grey14"
                  appendParentClass="items-center rounded-[1.2rem] bg-black03 px-[1.6rem] md:px-[2rem] xl:px-[2.4rem] py-[1.2rem] md:py-[1.4rem] xl:py-[1.6rem]"
                />
              ))}
            </div>
          </div>
          {/* image */}
          <div className="flex-1 relative">
            <Image
              src={Skyscrapper}
              className="relative z-10 w-full h-full object-cover"
              alt="building"
              // width={0}
              // height={0}
            />
            <Image
              src={WavyLines}
              className="absolute inset-0 w-full h-full object-cover z-0"
              alt="waves"
              // width={0}
              // height={0}
            />
          </div>
        </div>
        {/* cards */}
        <div></div>
      </section>
    </div>
  );
};

export default Homepage;
