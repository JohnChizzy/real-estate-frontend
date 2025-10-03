import Select, {
  ClearIndicatorProps,
  components,
  DropdownIndicatorProps,
} from 'react-select';
import classNames from 'classnames';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Field } from '@chakra-ui/react';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

export enum DropDownSize {
  md,
  sm,
}

export interface FormatOptionLabelProps {
  value: string;
  label: string;
}

const formatOptionLabel = ({ label }: FormatOptionLabelProps) => (
  <div className="flex items-center">
    <div className="flex flex-col">{label}</div>
  </div>
);

export default function DropDownSelect({
  size,
  label,
  placeholder = 'Select',
  options,
  disabled = false,
  loading = false,
  field,
  errors,
  onChange,
  isClearable = false,
  defaultValue,
  value,
}: Readonly<dropDownSelectProps>) {
  const selectClass = classNames(['react-select-container'], {
    'react-select-container-lg': size === DropDownSize.md,
    'react-select-container-error': !!errors,
  });
  const handleSelectChange = (selectedOption: any) => {
    if (onChange) {
      onChange(selectedOption?.value);
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label
          className={`block text-[#3b3b3bd4] mb-1 ${
            size === DropDownSize.md
              ? '!text-[1.2rem] md:!text[1.4rem] lg:!text-[1.6rem]'
              : ''
          }`}
        >
          {label}
        </label>
      )}
    
      {(() => {
        if (!onChange) {
          return (
            <Select
              isClearable={isClearable}
              isLoading={loading}
              isDisabled={disabled}
              {...field}
              options={options}
              classNamePrefix="react-select"
              placeholder={placeholder}
              components={{ DropdownIndicator, ClearIndicator }}
              unstyled
              className={selectClass}
              formatOptionLabel={formatOptionLabel}
              menuPosition="fixed"
            />
          );
        } else if (defaultValue) {
          return (
            <Select
              isClearable={isClearable}
              isLoading={loading}
              isDisabled={disabled}
              {...field}
              options={options}
              classNamePrefix="react-select"
              placeholder={placeholder}
              components={{ DropdownIndicator }}
              unstyled
              defaultValue={defaultValue}
              className={selectClass}
              formatOptionLabel={formatOptionLabel}
              onChange={handleSelectChange} // Pass the handler to the onChange prop
              menuPosition="fixed"
            />
          );
        } else {
          return (
            <Select
              isClearable={isClearable}
              isLoading={loading}
              isDisabled={disabled}
              {...field}
              options={options}
              classNamePrefix="react-select"
              placeholder={placeholder}
              components={{ DropdownIndicator }}
              unstyled
              className={selectClass}
              formatOptionLabel={formatOptionLabel}
              value={value}
              onChange={handleSelectChange} // Pass the handler to the onChange prop
              menuPosition="fixed"
            />
          );
        }
      })()}

      {errors && (
        <Field.ErrorText>
          <span className="comm-r-12">{errors}</span>
        </Field.ErrorText>
      )}
    </div>
  );
}

type dropDownSelectProps = {
  isClearable?: boolean;
  field?: any;
  label?: string;
  size?: DropDownSize;
  placeholder: string;
  disabled?: boolean;
  loading?: boolean;
  errors?: string;
  onChange?: (selectedOption: any) => void;
  defaultValue?: { value: string; label: string };
  value?: { value: string; label: string };
  options:
    | {
        label: string | number;
        value: string | number;
      }[]
    | undefined;
};

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <div className="text-yellow mr-3">
        <KeyboardArrowDownRoundedIcon />
      </div>
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (props: ClearIndicatorProps) => {
  return (
    <components.ClearIndicator {...props}>
      <div className="text-red mr-3">
        <HighlightOffRoundedIcon />
      </div>
    </components.ClearIndicator>
  );
};
