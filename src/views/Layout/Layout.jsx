import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { EntriesProvider } from '../../context/EntryContext';

export default function Layout({ children }) {
  return (
    <>
      <EntriesProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </EntriesProvider>
    </>
  );
}
