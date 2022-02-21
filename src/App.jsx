import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './views/Layout/Layout';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import { useTheme } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import styles from './App.css';

export default function App() {
  const { theme } = useTheme();
  return (
    <div className={styles.App + ' ' + styles[theme]}>
      <UserProvider>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </UserProvider>
    </div>
  );
}
