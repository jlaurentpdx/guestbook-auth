import Layout from './views/Layout/Layout';
import Home from './views/Home/Home';
import { useTheme } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import styles from './App.css';

export default function App() {
  const { theme } = useTheme();
  return (
    <div className={styles.App + ' ' + styles[theme]}>
      <UserProvider>
        <Layout>
          <Home />
        </Layout>
      </UserProvider>
    </div>
  );
}
