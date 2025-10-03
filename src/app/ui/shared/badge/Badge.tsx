import style from './style.module.scss';
import classNames from 'classnames';

export enum BadgeState {
  primary,
  warning,
  danger,
  active,
  success,
  prepaid,
  closed,
  maxtrf,
  void,
  issued,
  refunded,
  peach,
  campaign,
}

export enum BadgeStyle {
  pill,
  box,
  curvedBox,
}

export enum BadgeSize {
  pillSM,
}

export default function Badge({
  isClickable = false,
  handleClick,
  badgeStyle = BadgeStyle.box,
  state,
  children,
  size,
}: BadgeProps) {
  const btnClass = classNames({
    [`${style.pill}`]: badgeStyle === BadgeStyle.pill,
    [`${style.pill_sm}`]: size === BadgeSize.pillSM,
    [`${style.box}`]: badgeStyle === BadgeStyle.box,
    [`${style.primary}`]: state === BadgeState.primary,
    [`${style.warning}`]: state === BadgeState.warning,
    [`${style.danger}`]: state === BadgeState.danger,
    [`${style.success}`]: state === BadgeState.success,
    [`${style.prepaid}`]: state === BadgeState.prepaid,
    [`${style.active}`]: state === BadgeState.active,
    [`${style.closed}`]: state === BadgeState.closed,
    [`${style.maxtrf}`]: state === BadgeState.maxtrf,
    [`${style.refunded}`]: state === BadgeState.refunded,
    [`${style.void}`]: state === BadgeState.void,
    [`${style.issued}`]: state === BadgeState.issued,
    [`${style.curvedBox}`]: badgeStyle === BadgeStyle.curvedBox,
    [`${style.peach}`]: state === BadgeState.peach,
    [`${style.campaign}`]: state === BadgeState.campaign,
  });
  return (
    <button
      onClick={handleClick}
      role={isClickable ? 'button' : ''}
      className={`font-medium ${btnClass}`}
    >
      {children}
    </button>
  );
}

type BadgeProps = Readonly<{
  badgeStyle?: BadgeStyle;
  state: BadgeState;
  children: string | number | React.ReactNode | undefined;
  isClickable?: boolean;
  handleClick?: () => void;
  size?: BadgeSize;
}>;
