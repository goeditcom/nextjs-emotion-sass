import { useState } from 'react';
import styles from '../styles/second.module.css';
import Button, { FontSize } from '../ui/button';
import Surface from '../ui/surface';
import Widget from '../ui/widget';
import { css } from '@emotion/css';
import Link from 'next/link';
import Button2 from '../ui/button2/button2';

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.container}>
      <Link href="/">Go Home</Link>
      <Surface color="primary" className={styles.surface}>
        Initial Surface
      </Surface>

      <Button background="warning">Click me!</Button>
      <Button fontSize={FontSize.Big} background="primary">Click me!</Button>
      <Button2>Click me 2!</Button2>

      <button onClick={() => setShow((current) => !current)}>Load dynamic component</button>

      {show && <Widget />}

      <p
        className={css(`
          background: purple;
          font-size: 4rem;
        `)}
      >
        Emotion @ second page
      </p>
    </div>
  );
}
