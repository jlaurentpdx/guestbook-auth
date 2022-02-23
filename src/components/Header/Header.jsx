import { useUser } from '../../context/UserContext';
import { useEntries } from '../../context/EntryContext';
import { useTheme } from '../../context/ThemeContext';
import styles from './Header.css';

export default function Header() {
  const { user } = useUser();
  const { entries } = useEntries();
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <h1 className={styles.title}>Guestbook</h1>
      <p className={styles.toggle} onClick={toggleTheme}>
        Viewing in {theme} mode.
      </p>
      {user ? (
        entries.length > 0 ? (
          <h2>
            Thank you for signing,{' '}
            <span className={styles.currentUser}>{user}</span>.
          </h2>
        ) : (
          <h2>
            Welcome. Care to sign,{' '}
            <span className={styles.currentUser}>{user}</span>?
          </h2>
        )
      ) : null}
    </header>
  );
}
