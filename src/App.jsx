import Layout from './views/Layout/Layout';
import Home from './views/Home/Home';

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}
