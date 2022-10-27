import classNames from 'classnames';

import styles from './Surface.module.css';

interface SurfaceProps {
  readonly children: React.ReactNode;
  readonly color?: 'primary' | 'secondary';
  readonly className?: string;
}

function Surface(props: SurfaceProps) {
  const { children, color = 'initial', className } = props;

  return <div className={classNames(styles.surface, styles[color], className)}>{children}</div>;
}

export default Surface;
