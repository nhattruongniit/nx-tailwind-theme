import styles from './themes-piano.module.css';

/* eslint-disable-next-line */
export interface ThemesPianoProps {}

export function ThemesPiano(props: ThemesPianoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ThemesPiano!</h1>
    </div>
  );
}

export default ThemesPiano;
