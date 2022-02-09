import Entry from '../Entry/Entry';
import { useUser } from '../../context/UserContext';
import { useEntries } from '../../context/EntryContext';

export default function EntryList() {
  const { user } = useUser();
  const { entries, setEntries } = useEntries();

  const clearLocalStorage = () => {
    if (confirm('Are you sure you want to clear all comments?')) {
      setEntries([]);
      localStorage.clear('entries');
    }
  };

  return (
    <>
      <button onClick={clearLocalStorage}>Clear Guestbook Entries</button>
      <div>
        {entries.length > 0 && user
          ? entries.map((entry) => <Entry key={entry.id} {...entry} />)
          : null}
      </div>
    </>
  );
}
