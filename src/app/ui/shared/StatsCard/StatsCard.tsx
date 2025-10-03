import React from "react";
import Image from "next/image";
import { StatsCardProps } from "@/app/models/developer";


const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  className = "",
  isLoading = false,
  icon,
  iconComponent
  }) => (
  <div className={`bg-white rounded-lg p-14 shadow-sm border ${className}`}>
    {icon && (
          <Image
            className="mb-[1rem]"
            src={icon}
            alt="Icon"
            width={0}
            height={0}
          />
        )}
        {iconComponent && (
          <div className="mb-[1rem]">{iconComponent}</div>
        )}
    <h5 className="lex-r-12 text-[#3B3B3B] mb-1">{title}</h5>
    <div className="lex-s-32 font-bold mt-2 text-[#09090B]">
      {isLoading ? (
        <div className="animate-pulse bg-gray-200 h-8 w-20 rounded"></div>
      ) : (
        value
      )}
    </div>
  </div>
);

export default StatsCard;