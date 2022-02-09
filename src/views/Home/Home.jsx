import useLocalStorage from '../../hooks/useLocalStorage';

import GuestForm from '../../components/GuestForm/GuestForm';
import EntryList from '../../components/EntryList/EntryList';

export default function Home() {
  const [entries, setEntries] = useLocalStorage('entries', []);
  return (
    <>
      <GuestForm {...{ entries, setEntries }} />
      <EntryList {...{ entries }} />
    </>
  );
}
