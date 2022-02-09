import { useState } from 'react';
import GuestForm from '../../components/GuestForm/GuestForm';

export default function Home() {
  const [entries, setEntries] = useState([]);
  return (
    <>
      <GuestForm {...{ entries, setEntries }} />
      {entries.length > 0
        ? entries.map((entry) => (
            <div key={entry.id}>
              <h3>{entry.name}</h3>
              <p>{entry.comment}</p>
            </div>
          ))
        : null}
    </>
  );
}
