import Entry from '../Entry/Entry';

export default function EntryList({ entries }) {
  return (
    <div>
      {entries.length > 0
        ? entries.map((entry) => <Entry key={entry.id} {...entry} />)
        : null}
    </div>
  );
}
