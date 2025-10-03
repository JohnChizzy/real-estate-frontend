import CustomButton, { ButtonSize, ButtonStates } from '../buttons/Button';

export default function CardTitle({
  title,
  handleClick,
  btnState = ButtonStates.unstyledWarning,
  btnSize = ButtonSize.md,
  btnText,
  hasBadge,
  titleStyle,
}: Readonly<CardTitleProps>) {
  return (
    <div className="flex items-center justify-between w-full px-7 py-6 border-b border-grey01">
      <span
        className={` whitespace-nowrap ${
          titleStyle ?? 'text-black-50 comm-m-14'
        }`}
      >
        {title}
      </span>
      <div>
        {btnText && (
          <CustomButton
            handleClick={handleClick}
            state={btnState}
            size={btnSize}
          >
            {btnText}
          </CustomButton>
        )}
        {hasBadge && <>{hasBadge}</>}
      </div>
    </div>
  );
}

type CardTitleProps = {
  title: string;
  handleClick?: () => void;
  btnState?: ButtonStates;
  btnSize?: ButtonSize;
  btnText?: string | React.ReactNode;
  hasBadge?: React.ReactNode | string;
  titleStyle?: string;
};
