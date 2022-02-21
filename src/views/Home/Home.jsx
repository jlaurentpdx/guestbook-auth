import { EntriesContext, EntriesProvider } from '../../context/EntryContext';
import GuestForm from '../../components/GuestForm/GuestForm';
import EntryList from '../../components/EntryList/EntryList';

export default function Home() {
  return (
    <>
      <EntriesProvider>
        <GuestForm />
        <EntryList />
      </EntriesProvider>
    </>
  );
}
