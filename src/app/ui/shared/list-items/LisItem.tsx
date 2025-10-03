export default function ListItem({
  leading,
  trailing,
  trailingStyle,
  mainTitle,
  subTitle,
  mainTitleStyle,
  subTitleStyle,
  centered = false,
  appendClass,
  appendParentClass,
  onClick,
}: Readonly<ListItemProps>) {
  return (
    <div role="button"
      className={`flex justify-between w-full cursor-default ${appendParentClass ?? ''}`}
      onClick={onClick}
    >
      <div className={`flex items-center w-full ${appendClass ?? ''}`}>
        {leading && <div>{leading}</div>}
        <div
          className={`flex flex-col w-full ${centered ? 'items-center' : ''}`}
        >
          <span className={`text-start ${mainTitleStyle}`}>{mainTitle}</span>
          <span className={`text-start ${subTitleStyle}`}>{subTitle}</span>
        </div>
      </div>
      {trailing && (
        <div className={`flex ${trailingStyle ?? ''}`}>{trailing}</div>
      )}
    </div>
  );
}

type ListItemProps = {
  leading?: React.ReactNode;
  mainTitle?: string | number | React.ReactNode;
  mainTitleStyle?: string;
  subTitleStyle?: string;
  subTitle?: string | number | React.ReactNode;
  trailing?: React.ReactNode;
  trailingStyle?: string;
  centered?: boolean;
  appendClass?: string;
  appendParentClass?: string;
  onClick?: () => void;
};
