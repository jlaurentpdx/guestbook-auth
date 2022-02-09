import Layout from './views/Layout/Layout';
import Home from './views/Home/Home';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <div className="App">
      <UserProvider>
        <Layout>
          <Home />
        </Layout>
      </UserProvider>
    </div>
  );
}
