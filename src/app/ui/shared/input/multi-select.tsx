import React from "react";
import Select, {
  components,
  ActionMeta,
  StylesConfig,
  MultiValue,
  GroupBase,
} from "react-select";
import { Checkbox } from "@chakra-ui/react";

export interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  placeholder?: string;
  options: Option[];
  width: number | string;
  customClass?: string;
  parentClass?: string;
  label?: string;
  field?: any;
  isMulti?: true;
  value?: any;
  onChange?: (
    selectedValues: MultiValue<Option>,
    actionMeta: ActionMeta<Option>
  ) => void;
  isOpen?: boolean;
  onClose?: () => void;
  selectedValue?: Option[] | string; // adapt as needed
  onSelect?: (value: any) => void;
}

const ValueContainer: React.FC<any> = ({ children, getValue, ...props }) => {
  const maxToShow = 2;
  const length = getValue().length;
  const displayChips = React.Children.toArray(children).slice(0, maxToShow);
  const shouldBadgeShow = length > maxToShow;
  const displayLength = length - maxToShow;

  return (
    <components.ValueContainer {...props}>
      {!props.selectProps.inputValue && displayChips}
      <div className="pl-2 font-medium border-none">
        {shouldBadgeShow && `  + ${displayLength}`}
      </div>
    </components.ValueContainer>
  );
};

const Option: React.FC<any> = (props) => {
  return (
    <div>
      <components.Option {...props} className="!py-2 !px-3">
        <div className="flex items-center gap-x-2">
          <Checkbox.Root checked={props.isSelected} colorScheme="gray">
            <Checkbox.Control
            // {...register("assetDrivenBefore", {
            //   required: false,
            //   onChange: () => {setCheckVehicles((prev) => !prev)}
            // })}
            // value={item?.value}
            />
          </Checkbox.Root>
          <label className="text-[1.4rem] text-gray-800">{props.label}</label>
        </div>
      </components.Option>
    </div>
  );
};

const MultiSelect: React.FC<CustomSelectProps> = ({
  placeholder,
  options,
  width,
  customClass,
  label,
  field,
  isMulti,
  value,
  onChange,
  parentClass,
}) => {
  // Custom styles to set the fixed width and change the colors
  const customStyles: StylesConfig<Option, true, GroupBase<Option>> = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "1px solid #28a745" : "1px solid #28a745", // or a class if using Tailwind
      minHeight: "2.5rem",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#218838",
      },
    }),

    option: (provided, state) => ({
      ...provided,
      padding: "10px 15px", // Adjust padding for each dropdown option
      backgroundColor: state.isSelected ? "#FFF8CE" : "white",
      color: state.isSelected ? "black" : "inherit",
      borderRadius: "5px", // Slightly rounded corners for options
      "&:hover": {
        backgroundColor: "#E4E4E4", // Change background color on hover
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "black", // Changing the text color to black for the input
      fontSize: "1.5rem",
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "1.4rem", // ~14px
      color: "#A0AEC0",
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#4A5568", // Tailwind: gray-700
    }),

    menu: (provided) => ({
      ...provided,
      fontSize: "1.4rem", // Adjusting the font size for the dropdown menu
      border: "1px solid #000", // Custom border
      borderRadius: "8px", // Rounded corners
      padding: "5px", // Adjust padding inside dropdown
      backgroundColor: "white",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional: adds shadow effect
    }),
    multiValue: (provided) => ({
      ...provided,
      fontSize: "1.4rem", // Adjust the font size for the multiValue container
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      fontSize: "1.5rem", // Adjust the font size for the multiValue label
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      fontSize: "1.6rem", // Adjust the font size for the multiValue remove icon
      cursor: "pointer", // Add cursor pointer for better UX
    }),
    menuList: (provided) => ({
      ...provided,
      padding: "12px",
      paddingBottom: "20px",
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 1600, // Ensure it's higher than the modal
    }),
  };

  return (
    <div className={parentClass}>
      {label && (
        <label className="block mb-2 lex-r-14 lg:text-[1.6rem] font-medium text-gray-700">
          {label}
        </label>
      )}

      {!onChange ? (
        <Select
          placeholder={placeholder}
          hideSelectedOptions={false}
          isOptionSelected={true}
          isMulti
          options={options}
          {...field}
          components={{ ValueContainer, Option }}
          isSearchable={true}
          styles={customStyles}
          closeMenuOnSelect={false}
          menuPosition="fixed"
          className={`basic-multi-select capitalize ${customClass}`}
          classNamePrefix="select"
        />
      ) : (
        <Select
          placeholder={placeholder}
          hideSelectedOptions={isMulti}
          isMulti={isMulti}
          options={options}
          onChange={onChange}
          value={value}
          // components={{ ValueContainer, Option }}
          isSearchable
          isClearable
          styles={customStyles}
          closeMenuOnSelect={!isMulti}
          menuPortalTarget={document.body}
          menuShouldScrollIntoView={false}
          menuPosition="fixed"
          className={`basic-multi-select capitalize ${customClass}`}
          classNamePrefix="select"
        />
      )}
    </div>
  );
};

export default MultiSelect;
