import Image from "next/image";
import WavyLines from "@/public/images/wavy-lines.svg";
import Skyscrapper from "@/public/images/skyscrapper.png";
import DiscoverBanner from "@/public/images/discover.png";
import CustomButton, {
  ButtonStates,
  ButtonType,
} from "@/app/ui/shared/buttons/Button";
import ListItem from "@/app/ui/shared/list-items/LisItem";
import DreamHomeIcon from "@/public/images/dream-home-icon.svg";
import PropertyValueIcon from "@/public/images/property-value-icon.svg";
import PropertyManagementIcon from "@/public/images/property-management-icon.svg";
import SmartInvestmentIcon from "@/public/images/smart-investment-icon.svg";
import FeatureArrowIcon from "@/public/images/feature-arrow.svg";

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

  const featuresHighlights = [
    {
      title: "Find Your Dream Home",
      icon: DreamHomeIcon,
    },
    {
      title: "Unlock Property Value",
      icon: PropertyValueIcon,
    },
    {
      title: "Effortless Property Management",
      icon: PropertyManagementIcon,
    },
    {
      title: "Smart Investments, Informed Decisions",
      icon: SmartInvestmentIcon,
    },
  ];

  return (
    <div className="mt-[calc(11rem)]">
      {/* Hero section */}
      <section className="bg-black03 max-lg:bg-black02">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative max-lg:order-1 pl-[1.6rem] md:pl-[9rem] xl:pl-[16.2rem] py-[14.4rem] pr-[1.6rem] md:pr-[6rem] xl:pr-[8rem] bg-black02">
            <h1 className="urb-s-28 md:text-[4.6rem]! xl:text-[6rem]! font-bold mb-[2.4rem]">
              Discover Your Dream <br /> Property with Estatein
            </h1>
            <p className="urb-m-14 md:text-[1.6rem]! xl:text-[1.8rem]! text-[#999999]">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
            <Image
            src={DiscoverBanner}
            className="absolute z-12 right-0 top-[14.4rem] translate-x-1/2 w-[11.7rem] h-[11.7rem] lg:w-[12.9rem] lg:h-[12.9rem] xl:w-[17.5rem] xl:h-[17.5rem] max-lg:left-[1.6rem] max-lg:translate-x-0 max-lg:top-0 max-lg:-translate-y-1/2"
            alt="building"
            height={0}
            width={0}
          />
            <div className="mt-[6rem] flex flex-col md:flex-row md:gap-x-[1.6rem] xl:gap-x-[2rem] max-md:gap-y-[1.6rem]">
              <CustomButton
                customStyle="md:w-fit!"
                type={ButtonType.link}
                state={ButtonStates.primaryOutline}
                url="/about-us"
              >
                Learn More
              </CustomButton>
              <CustomButton
                customStyle="md:w-fit!"
                type={ButtonType.link}
                state={ButtonStates.royal}
                url="/properties"
              >
                Browse Properties
              </CustomButton>
            </div>
            <div className="mt-[6rem] grid grid-cols-2 md:grid-cols-3 gap-x-[1.2rem] lg:gap-x-[1.6rem] xl:gap-x-[2rem] gap-y-[1.2rem]  lg:gap-y-[1.6rem] xl:gap-y-[2rem]">
              {metrics.map((metric) => (
                <ListItem
                  key={metric.title}
                  mainTitle={metric?.title}
                  mainTitleStyle="urb-b-24 md:text-[3rem]! xl:text-[4rem]! max-lg:text-center"
                  subTitle={metric?.description}
                  subTitleStyle="urb-m-12 md:text-[1.4rem]! xl:text-[1.6rem]! text-grey14 max-lg:text-center"
                  appendParentClass="max-lg:last:col-span-2 rounded-[1.2rem] bg-black03 px-[1.6rem] md:px-[2rem] xl:px-[2.4rem] py-[1.2rem] md:py-[1.4rem] xl:py-[1.6rem]"
                />
              ))}
            </div>
          </div>          
          <div className="max-lg:px-[1.6rem] max-lg:pt-[4rem]">
            <div className="relative max-lg:rounded-[1.2rem] h-full">
            <Image
              src={Skyscrapper}
              className="relative z-10 w-full h-full object-cover max-lg:rounded-[1.2rem]"
              alt="building"
              height={0}
              width={0}
            />
            <Image
              src={WavyLines}
              className="absolute inset-0 w-full h-full object-cover z-0 max-lg:rounded-[1.2rem]"
              alt="waves"
              height={0}
              width={0}
            />
          </div>
          </div>
        </div>
        {/* cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 bg-black02 px-[1rem] gap-x-[1rem] xl:gap-x-[2rem] gap-y-[1rem] xl:gap-y-[2rem] py-[1rem] xl:py-[2rem] xl:px-[2rem] mt-[1rem]">
          {featuresHighlights.map((feature) => (
            <div
              key={feature.title}
              className="relative flex flex-col items-center gap-y-[1.4rem] md:gap-y-[1.6rem] xl:gap-y-[2rem] bg-black03 px-[1.4rem] md:px-[1.6rem] xl:px-[2rem] py-[2rem] md:py-[3rem] xl:py-[4rem] rounded-[1rem] xl:rounded-[1.2rem]"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                height={0}
                width={0}
                className="w-[4.8rem] h-[4.8rem] lg:w-[6rem] lg:h-[6rem] xl:w-[8.2rem] xl:h-[8.2rem]"
              />
              <div className="flex items-center gap-x-[0.4rem] xl:gap-x-[0.8rem]">
                <p className="urb-s-14 text-center lg:text-left md:text-[1.6rem]! xl:text-[2rem]!">
                  {feature.title}
                </p>
                <Image
                  src={FeatureArrowIcon}
                  alt="arrow"
                  height={0}
                  width={0}
                  className="absolute top-[2rem] right-[2rem] w-[2.6rem] h-[2.6rem] xl:w-[3.4rem] xl:h-[3.4rem]"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
