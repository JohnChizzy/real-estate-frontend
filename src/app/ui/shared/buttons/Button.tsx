import Link from 'next/link';
import style from './style.module.scss';
import classNames from 'classnames';

export enum ButtonStates {
  primary = 'PRIMARY',
  secondary = 'SECONDARY',
  warning = 'WARNING',
  danger = 'DANGER',
  unstyled = 'UNSTYLED',
  unstyledWarning = 'UNSTYLED_WARNING',
  unstyledDanger = 'UNSTYLED_DANGER',
  pass = 'PASS',
  passOutline = 'PASS_OUTLINE',
  dangerOutline = 'DANGER_OUTLINE',
  primaryOutline = 'PRIMARY_OUTLINE',
  royal = 'ROYAL'
}

export enum ButtonType {
  link,
  button,
}

export enum ButtonSize {
  sm,
  md,
}

export default function CustomButton({
  disabled = false,
  inverted = false,
  state,
  type = ButtonType.button,
  url = '',
  customStyle,
  children,
  handleClick,
  size,
  buttonType = 'button',
}: CustomButtonProps) {
  const btnClass = classNames([`${style.button_style}`], customStyle, {
    [`${style.button_sm}`]: size === ButtonSize.sm,
    [`${style.button_md}`]: size === ButtonSize.md,
    [`${style.primary_inverted}`]: inverted && state === ButtonStates.primary,
    [`${style.primary}`]: !inverted && state === ButtonStates.primary,
    [`${style.warning_inverted}`]: inverted && state === ButtonStates.warning,
    [`${style.warning}`]: !inverted && state === ButtonStates.warning,
    [`${style.danger}`]: !inverted && state === ButtonStates.danger,
    [`${style.unstyled}`]: !inverted && state === ButtonStates.unstyled,
    [`${style.unstyledDanger}`]:
      !inverted && state === ButtonStates.unstyledDanger,
    [`${style.unstyled_warning}`]:
      !inverted && state === ButtonStates.unstyledWarning,
    [`${style.pass}`]: !inverted && state === ButtonStates.pass,
    [`${style.passOutline}`]: !inverted && state === ButtonStates.passOutline,
    [`${style.dangerOutline}`]: !inverted && state === ButtonStates.dangerOutline,
    [`${style.primaryOutline}`]: !inverted && state === ButtonStates.primaryOutline,
    [`${style.royal}`]: !inverted && state === ButtonStates.royal
  });

  if (type === ButtonType.button)
    return (
      <button
        disabled={disabled}
        onClick={handleClick}
        className={`${btnClass}`}
        type={buttonType}
      >
        {children}
      </button>
    );
  return (
    <Link aria-disabled={disabled} className={btnClass} href={url}>
      {children}
    </Link>
  );
}

type CustomButtonProps = Readonly<{
  children: React.ReactNode | string | React.ReactNode;
  inverted?: boolean;
  state?: ButtonStates;
  type?: ButtonType;
  url?: string;
  customStyle?: string;
  handleClick?: (e?: any) => void;
  size?: ButtonSize;
  disabled?: boolean;
  buttonType?: 'button' | 'submit' | 'reset';
}>;
