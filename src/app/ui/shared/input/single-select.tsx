import React from "react";
import Select, {
  ActionMeta,
  StylesConfig,
  SingleValue,
  GroupBase,
} from "react-select";

export interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  placeholder?: string;
  options: Option[];
  width?: number | string;
  customClass?: string;
  parentClass?: string;
  label?: string;
  field?: any;
   value?: Option | Option[] | null;
  onChange?: (selected: Option | null, actionMeta: ActionMeta<Option>) => void;
}

const customStyles: StylesConfig<Option, false, GroupBase<Option>> = {
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused ? "1px solid #28a745" : "1px solid #28a745",
    minHeight: "2.5rem",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#218838",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    padding: "10px 15px",
    backgroundColor: state.isSelected ? "#FFF8CE" : "white",
    color: state.isSelected ? "black" : "inherit",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#E4E4E4",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "black",
    fontSize: "1.5rem",
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "1.4rem",
    color: "#A0AEC0",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#4A5568",
  }),
  menu: (provided) => ({
    ...provided,
    fontSize: "1.4rem",
    border: "1px solid #000",
    borderRadius: "8px",
    padding: "5px",
    backgroundColor: "white",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  }),
  menuPortal: (base) => ({
    ...base,
    zIndex: 1600,
  }),
};

const SingleSelect: React.FC<CustomSelectProps> = ({
  placeholder,
  options,
  customClass,
  label,
  field,
  value,
  onChange,
  parentClass,
}) => {
  return (
    <div className={parentClass}>
      {label && (
        <label className="block mb-2 text-[1.4rem] lg:text-[1.6rem] font-medium text-gray-700">
          {label}
        </label>
      )}

      <Select
        placeholder={placeholder}
        isMulti={false}
        options={options}
        onChange={onChange}
        value={value}
        {...field}
        isSearchable
        isClearable
        styles={customStyles}
        menuPortalTarget={typeof window !== "undefined" ? document.body : null}
        menuShouldScrollIntoView={false}
        menuPosition="fixed"
        className={`basic-single-select capitalize ${customClass}`}
        classNamePrefix="select"
      />
    </div>
  );
};

export default SingleSelect;
