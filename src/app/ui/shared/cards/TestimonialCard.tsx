import Image from "next/image";
import StarIcon from "@/public/images/star-icon.svg";
import ProfilePic from "@/public/images/profile.jpg";
import { TestimonialInterface } from "@/app/models/homepage";

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialInterface }) => {
  return (
    <div className="bg-black02 rounded-[1.2rem] border border-grey13 p-[2.4rem] md:p-[3rem] 3xl:p-[4rem] flex flex-col h-full">
      {/* stars image */}
      <div className="flex items-center gap-x-[0.6rem] lg:gap-x-[0.8rem] 3xl:gap-x-[1rem] mb-[1.6rem] md:mb-[2rem] 3xl:mb-[3rem]">
        {Array.from({ length: testimonial.stars }).map((_, index) => (
          <Image
            key={index}
            src={StarIcon}
            alt="star"
            height={0}
            width={0}
            className="w-[1.8rem] h-[1.8rem] md:w-[2rem] md:h-[2rem] 3xl:w-[2.4rem] 3xl:h-[2.4rem]"
          />
        ))}
      </div>
      <div className="mt-[1.6rem] md:mt-[2rem] 3xl:mt-[3rem] flex flex-col flex-grow">
        <h3 className="urb-s-18 md:text-[2rem]! 3xl:text-[2.4rem]! font-bold mb-[0.2rem] md:mb-[0.4rem] 3xl:mb-[0.6rem]">
          {testimonial.title}
        </h3>
        <p className="urb-m-14 md:text-[1.6rem]! 3xl:text-[1.8rem]! text-grey14 mb-[2rem] md:mb-[2.4rem] 3xl:mb-[3rem]">
          {testimonial.content}
        </p>
        <div className="flex flex-col lg:max-ml:flex-col lg:max-ml:items-start sm:flex-row sm:items-center gap-y-[1.6rem] sm:gap-x-[1.6rem]">
          <Image
            src={ProfilePic}
            alt="notes"
            height={0}
            width={0}
            className="w-[5rem] h-[5rem] 3xl:w-[6rem] 3xl:h-[6rem] rounded-full"
          />
          <div>
            <p className="urb-s-18 md:text-[2rem]! 3xl:text-[2.4rem]!">
              {testimonial.name}
            </p>
            <p className="urb-m-14 3xl:text-[1.8rem]! text-grey14">
              {testimonial.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
