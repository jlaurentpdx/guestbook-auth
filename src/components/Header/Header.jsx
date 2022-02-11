import { useUser } from '../../context/UserContext';
import styles from './Header.css';

export default function Header() {
  const { user } = useUser();

  return (
    <header>
      <h1>Guestbook</h1>
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
