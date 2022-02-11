import { useUser } from '../../context/UserContext';
import { useTheme } from '../../context/ThemeContext';
import styles from './Header.css';

export default function Header() {
  const { user } = useUser();
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <h1 className={styles.title}>Guestbook</h1>
      {theme === 'light' && <p>Viewing in light mode. </p>}
      {theme === 'dark' && <p>Viewing in dark mode.</p>}
      <h3 onClick={toggleTheme}>Click to switch.</h3>
      {user ? (
        <h2>
          Thank you for signing,{' '}
          <span className={styles.currentUser}>{user}</span>.
        </h2>
      ) : (
        <h2 className={styles.hidden}>
          Thank you for signing,{' '}
          <span className={styles.currentUser}>{user}</span>.
        </h2>
      )}
    </header>
  );
}
