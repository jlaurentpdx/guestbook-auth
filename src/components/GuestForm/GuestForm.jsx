import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useEntries } from '../../context/EntryContext';

export default function GuestForm() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = new Date().toString();

    const newEntry = { id, name, comment };

    setEntries([...entries, newEntry]);
    setUser(name);
    setComment('');
  };

  const handleChangeUser = () => {
    setUser('');
    setName('');
  };

  return (
    <>
      <form>
        {!user && (
          <input
            value={name}
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          value={comment}
          placeholder="Your Comment"
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
