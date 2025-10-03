import React from "react";
import { Field, Input } from "@chakra-ui/react";
import classNames from "classnames";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import style from "./style.module.scss";

export enum CustomInputSize {
  sm,
  md,
}

type InputProps = {
  label?: string;
  name?: string;
  placeholder?: string;
  errors?: any;
  size?: CustomInputSize;
  customStyle?: string;
  customInputStyle?: string;
  type?: string;
  pattern?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  showPassword?: boolean;
  setShowPassword?: (value: boolean) => void;
};

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      placeholder,
      errors,
      size,
      customStyle,
      customInputStyle,
      type = "text",
      value,
      onChange,
      onBlur,
      pattern,
      showPassword = false,
      setShowPassword,
      ...rest
    },
    ref
  ) => {
    const inputClass = classNames([`${style.input}`], customInputStyle, {
      [`${style.sm}`]: size === CustomInputSize.sm, 
      [`${style.md}`]: size === CustomInputSize.md,
      [`flex`]: type === "password",
      [`${style.input_error}`]: !!errors,
    });

    const labelClass = classNames(style.label);

    const numberInputOnWheelPreventChange = (e: any) => {
      const input = e.currentTarget;

  // Only prevent scroll if the input is focused
  if (document.activeElement === input && input.type === "number") {
    input.blur();           // Remove focus to stop the scroll
    e.stopPropagation();    // Prevent scroll from bubbling
    e.preventDefault();     // Prevent default scroll behavior

    setTimeout(() => {
      input.focus();        // Refocus after scroll is blocked
    }, 0);
  }
   };

    return (
      <div className={customStyle}>
        {label && (
          <Field.Label className={labelClass} htmlFor={name}>
            {label}
          </Field.Label>
        )}

        <div className="relative flex items-center">
          <Input
            ref={ref}
            id={name}
            type={showPassword ? "text" : type}
            placeholder={placeholder}
            pattern={pattern}
            className={inputClass}
            value={value ?? ""}
            onChange={onChange}
            onBlur={onBlur}
            onWheel={numberInputOnWheelPreventChange}
            {...rest}
          />
          {(type === "password" || setShowPassword) && value?.length > 0 && (
            <span className="absolute right-3 cursor-pointer">
              {showPassword ? (
                <BsEye
                  size={16}
                  onClick={() => setShowPassword?.(false)}
                />
              ) : (
                <BsEyeSlash
                  size={16}
                  onClick={() => setShowPassword?.(true)}
                />
              )}
            </span>
          )}
        </div>

        {errors && (
          <Field.ErrorText as="div">
            <span className="comm-r-10">{errors}</span>
          </Field.ErrorText>
        )}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";
export default CustomInput;

