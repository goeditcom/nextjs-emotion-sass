import classNames from 'classnames';
import styles from './button2.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background?: 'primary' | 'secondary';
}

console.log(styles);

function Button2(props: ButtonProps) {
  const { children, background = 'primary', ...rest } = props;

  return (
    <button {...rest} className={classNames(styles[`bg-${background}`])}>
      {children}
    </button>
  );
}

export default Button2;
