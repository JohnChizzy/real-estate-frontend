import Image from "next/image";
import BedroomIcon from "@/public/images/bedroom.svg";
import BathroomIcon from "@/public/images/bathroom.svg";
import TypeIcon from "@/public/images/type-icon.svg";
import CustomButton, {
  ButtonStates,
  ButtonType,
} from "@/app/ui/shared/buttons/Button";
import { Property } from "@/app/models/property";

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <div className="bg-black02 rounded-[1.2rem] border border-grey13 p-[2.4rem] md:p-[3rem] 3xl:p-[4rem] flex flex-col h-full">
      <Image
        src={property.imageUrl}
        alt={property.title}
        height={0}
        width={0}
        className="w-full h-[21rem] lg:h-[25.5rem] 3xl:h-[31.8rem] rounded-[1rem] object-cover"
        unoptimized
      />
      <div className="mt-[1.6rem] md:mt-[2rem] 3xl:mt-[3rem] flex flex-col flex-grow">
        <h3 className="urb-s-18 md:text-[2rem]! 3xl:text-[2.4rem]! font-bold mb-[0.2rem] md:mb-[0.4rem] 3xl:mb-[0.6rem]">
          {property.title}
        </h3>
        <p className="urb-m-14 md:text-[1.6rem]! 3xl:text-[1.8rem]! text-grey14 mb-[2rem] md:mb-[2.4rem] 3xl:mb-[3rem] line-clamp-2">
          {property.description}
        </p>
        <div className="w-fit grid grid-cols-2 lg:max-ml:grid-cols-[max-content_max-content] ml:grid-cols-[max-content_max-content_max-content] items-center gap-[0.4rem] md:gap-[0.8rem] 3xl:gap-[1.2rem] mb-[2rem] md:mb-[2.4rem] 3xl:mb-[3rem]">
          <div className="w-fit px-[1.4rem] py-[0.6rem] 3xl:py-[0.8rem] flex items-center gap-x-[0.4rem] rounded-[2.8rem] bg-black03 border border-grey13">
            <Image
              src={BedroomIcon}
              alt="bedroom"
              height={0}
              width={0}
              className="w-[2rem] h-[2rem] 3xl:w-[2.4rem] 3xl:h-[2.4rem]"
            />
            <p className="urb-m-14 3xl:text-[1.8rem]!">
              {property.noOfBedrooms}
            </p>
          </div>
          <div className="w-fit px-[1.4rem] py-[0.6rem] 3xl:py-[0.8rem] flex items-center gap-x-[0.4rem] rounded-[2.8rem] bg-black03 border border-grey13 lg:max-ml:order-3">
            <Image
              src={BathroomIcon}
              alt="bathroom"
              height={0}
              width={0}
              className="w-[2rem] h-[2rem] 3xl:w-[2.4rem] 3xl:h-[2.4rem]"
            />
            <p className="urb-m-14 3xl:text-[1.8rem]!">
              {property.noOfBathrooms}
            </p>
          </div>
          <div className="w-fit px-[1.4rem] py-[0.6rem] 3xl:py-[0.8rem] flex items-center gap-x-[0.4rem] rounded-[2.8rem] bg-black03 border border-grey13 lg:max-ml:order-2">
            <Image
              src={TypeIcon}
              alt="type"
              height={0}
              width={0}
              className="w-[2rem] h-[2rem] 3xl:w-[2.4rem] 3xl:h-[2.4rem]"
            />
            <p className="urb-m-14 3xl:text-[1.8rem]!">
              {property.type}
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:max-ml:flex-col lg:max-ml:items-start sm:flex-row sm:items-center justify-between gap-y-[1.6rem] sm:gap-x-[1.6rem]">
          <div>
            <p className="urb-m-14 3xl:text-[1.8rem]! text-grey14">
              Price
            </p>
            <p className="urb-s-18 md:text-[2rem]! 3xl:text-[2.4rem]!">
              ${typeof property.price === 'string' ? property.price : property.price.toLocaleString()}
            </p>
          </div>
          <CustomButton
            type={ButtonType.link}
            state={ButtonStates.royal}
            url={`/properties/${property?.id}`}
            customStyle="w-full sm:w-fit!"
          >
            View Property Details
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
