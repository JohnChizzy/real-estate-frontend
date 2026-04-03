import { FaqInterface } from "@/app/models/homepage";
import CustomButton, {
  ButtonStates,
  ButtonType,
} from "@/app/ui/shared/buttons/Button";

const FaqCard = ({ question }: { question: FaqInterface }) => {
  return (
    <div className="bg-black02 rounded-[1.2rem] border border-grey13 p-[2.4rem] md:p-[3rem] 3xl:p-[4rem] flex flex-col h-full">
      <div className="mt-[1.6rem] md:mt-[2rem] 3xl:mt-[3rem] flex flex-col flex-grow">
        <h3 className="urb-s-18 md:text-[2rem]! 3xl:text-[2.4rem]! font-bold mb-[2rem] md:mb-[2.4rem] 3xl:mb-[3rem]">
          {question.question}
        </h3>
        <p className="urb-m-14 text-grey14 md:text-[1.6rem]! 3xl:text-[1.8rem]! mb-[2rem] md:mb-[2.4rem] 3xl:mb-[3rem]">
          {question.content}
        </p>
        <div>
          <CustomButton
            type={ButtonType.link}
            state={ButtonStates.primaryOutline}
            url="/faqs"
            customStyle="md:w-fit!"
          >
            Read More
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
