import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useEntries } from '../../context/EntryContext';
import { createEntry } from '../../services/entries';

export default function GuestForm() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date().toDateString();
    const entry = { name, comment, date };

    try {
      const newEntry = await createEntry(entry);
      setEntries([...entries, newEntry]);
    } catch {
      alert('something went wrong');
    }
    setUser(name);
    setComment('');
  };

  const handleChangeUser = () => {
    setUser('');
    setName('');
  };

  return (
    <>
      <form id="guest-form">
        {!user && (
          <input
            value={name}
            placeholder="Your Name"
            aria-label="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          value={comment}
          placeholder="Your Comment"
          aria-label="Your Comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleSubmit}>Sign</button>
        {user && (
          <p style={{ cursor: 'pointer' }} onClick={handleChangeUser}>
            Not {user}? Click here.
          </p>
        )}
      </form>
    </>
  );
}
