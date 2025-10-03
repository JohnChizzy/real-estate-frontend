import style from './style.module.scss';
import classNames from 'classnames';

export default function ToggleSwitch({
  isToggled = false,
  title,
  toggleSwitch,
  customSwitchStyle,
  customBallStyle,
  customTitleStyle
}: Readonly<toggleSwitchProps>) {
  const switchClass = classNames([`${style.switch}`], customSwitchStyle, {
    [`${style.toggled_switch}`]: isToggled,
  });

  const ballClass = classNames([`${style.ball}`], customBallStyle, {
    [`${style.toggled_ball}`]: isToggled,
  });

  const textClass = classNames([`${style.text}`], customTitleStyle, {
    [`${style.toggled_text}`]: isToggled,
  });

  return (
    <div className={switchClass}>
      <button type='button' onClick={toggleSwitch} className={ballClass}></button>
      {title && <span className={textClass}>{title}</span>}
    </div>
  );
}

type toggleSwitchProps = {
  isToggled: boolean;
  title?: string | React.ReactNode;
  toggleSwitch: () => void;
  customSwitchStyle?: string;
  customBallStyle?: string;
  customTitleStyle?: string;
};
