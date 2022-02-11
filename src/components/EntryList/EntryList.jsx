import Entry from '../Entry/Entry';
import { useEntries } from '../../context/EntryContext';

export default function EntryList() {
  const { entries } = useEntries();

  return (
    <>
      <ul>
        {entries.length > 0
          ? entries.map((entry) => <Entry key={entry.id} {...entry} />)
          : null}
      </ul>
    </>
  );
}
