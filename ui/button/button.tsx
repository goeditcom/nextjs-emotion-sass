import { css } from '@emotion/css';
import useAppTheme from '../../pages/hooks/useAppTheme';

import type { BackgroundVariants } from '../../styles/theme';

export enum FontSize {
  Small = 12,
  Regular = 16,
  Big = 18,
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fontSize?: 12 | 16 | 18;
  background?: BackgroundVariants;
}

const base = css`
  background: pink;
`;

const baseObj = css({
  background: 'green',
});

// const Button2 = styled.button`
//   font-size: ${(props: ButtonProps) => props.fontSize || FontSize.Regular}px;
//   color: blue;
// `;

function Button(props: ButtonProps) {
  const { children, fontSize = FontSize.Regular, background = 'primary', ...rest } = props;
  const theme = useAppTheme();

  return (
    <button
      {...rest}
      className={css({
        background: theme.colors[background],
        fontSize,
      })}
    >
      {children}
    </button>
  );
}

export default Button;
