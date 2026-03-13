import Image from "next/image";
import ArrowIcon from "@/public/images/arrow.svg";

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-between mt-4 w-full">
      <p className="urb-m-14 lg:text-[1.6rem]! xl:text-[2rem]!">
        <span className="">{currentPage}</span>
        <span className="text-grey14"> of {totalPages}</span>
      </p>

      <div className="flex gap-4">
        <button
          className={`border border-grey13 flex items-center justify-center w-[4.4rem] h-[4.4rem] xl:w-[5.8rem] xl:h-[5.8rem] bg-black03 rounded-[50%] cursor-pointer ${currentPage === 1 ? "cursor-not-allowed! bg-transparent!" : ""}`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <Image
            src={ArrowIcon}
            alt="left arrow"
            height={0}
            width={0}
            className={`rotate-180 w-[1.44rem] h-[1.68rem] xl:w-[1.8rem] xl:h-[2.1rem] ${currentPage === 1 ? "opacity-[0.2]" : ""}`}
          />
        </button>

        <button
          className={`border border-grey13 flex items-center justify-center w-[4.4rem] h-[4.4rem] xl:w-[5.8rem] xl:h-[5.8rem] bg-black03 rounded-[50%] cursor-pointer ${currentPage === totalPages ? "cursor-not-allowed! bg-transparent! text-grey02!" : ""}`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <Image
            src={ArrowIcon}
            alt="right arrow"
            height={0}
            width={0}
            className={`w-[1.44rem] h-[1.68rem] xl:w-[1.8rem] xl:h-[2.1rem] ${currentPage === totalPages ? "opacity-[0.2]" : ""}`}
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
