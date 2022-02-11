import Layout from './views/Layout/Layout';
import Home from './views/Home/Home';
import useTheme from './hooks/hooks';
import { UserProvider } from './context/UserContext';
import styles from './App.css';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={styles.App + ' ' + styles[theme]}>
      <button onClick={toggleTheme}>set theme</button>
      <UserProvider>
        <Layout>
          <Home />
        </Layout>
      </UserProvider>
    </div>
  );
}
