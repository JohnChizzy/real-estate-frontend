import React from "react";
import { Field, Textarea } from "@chakra-ui/react";
import classNames from "classnames";
import style from "./style.module.scss";

export enum CustomTextAreaSize {
  sm,
  md,
}

type TextAreaProps = {
  label?: string;
  name?: string;
  placeholder?: string;
  errors?: any;
  size?: CustomTextAreaSize;
  customStyle?: string;
  customTextAreaStyle?: string;
  ref?: any;
  value?: any;
  onChange?: any;
  onBlur?: any;
};

const CustomTextArea = React.forwardRef(
  (
    {
      label,
      name,
      placeholder,
      errors,
      size,
      customStyle,
      customTextAreaStyle,
      value,
      ...props
    }: TextAreaProps,
    ref
  ) => {
    const textAreaClass = classNames([`${style.input}`], customTextAreaStyle, {
      [`${style.sm}`]: size === CustomTextAreaSize.sm,
      [`${style.md}`]: size === CustomTextAreaSize.md,
    });

    const labelClass = classNames([`${style.label}`]);

    return (
      <div className={customStyle}>
        {label && (
          <Field.Label className={labelClass} htmlFor={name}>
            {label}
          </Field.Label>
        )}

        {value !== undefined ? (
          <Textarea
            ref={ref}
            id={name}
            className={textAreaClass}
            value={value}
            placeholder={placeholder}
            style={{ height: "129px" }}
            {...props}
          />
        ) : (
          <Textarea
            ref={ref}
            id={name}
            className={textAreaClass}
            placeholder={placeholder}
            style={{ height: "129px" }}
            {...props}
          />
        )}

        <Field.ErrorText as="div">
          <span className="comm-r-10">{errors}</span>
        </Field.ErrorText>
      </div>
    );
  }
);

CustomTextArea.displayName = "CustomTextArea";

export default CustomTextArea;