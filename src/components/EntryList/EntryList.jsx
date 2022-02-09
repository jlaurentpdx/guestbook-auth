import Entry from '../Entry/Entry';

const clearLocalStorage = () => {
  if (confirm('Are you sure you want to clear all comments?'))
    localStorage.clear('entries');
};

export default function EntryList({ entries }) {
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
