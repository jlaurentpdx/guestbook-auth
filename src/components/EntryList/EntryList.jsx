import Entry from '../Entry/Entry';
import { useEntries } from '../../context/EntryContext';

export default function EntryList() {
  const { entries, setEntries } = useEntries();

  const clearLocalStorage = () => {
    if (confirm('Are you sure you want to clear all comments?')) {
      setEntries([]);
      localStorage.clear('entries');
    }
  };

  return (
    <>
      <button onClick={clearLocalStorage}>Clear</button>
      <div>
        {entries.length > 0
          ? entries.map((entry) => <Entry key={entry.id} {...entry} />)
          : null}
      </div>
    </>
  );
}
