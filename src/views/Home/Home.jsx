import { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import GuestForm from '../../components/GuestForm/GuestForm';

export default function Home() {
  const [entries, setEntries] = useLocalStorage('entries', []);
  return (
    <>
      <GuestForm {...{ entries, setEntries }} />
      {entries.length > 0
        ? entries.map((entry) => (
            <div key={entry.id}>
              <h3>{entry.name}</h3>
              <p>{entry.comment}</p>
              <p>{entry.id}</p>
            </div>
          ))
        : null}
    </>
  );
}
