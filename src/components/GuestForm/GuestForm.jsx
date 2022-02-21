import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useEntries } from '../../context/EntryContext';
import { v4 as uuid } from 'uuid';

export default function GuestForm() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const { user, setUser } = useUser();
  const { setEntries } = useEntries();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date().toDateString();
    const entry = { id: uuid(), name, comment, date };

    try {
      setUser(name);
      setComment('');
      setEntries((prevState) => [entry, ...prevState]);
    } catch {
      alert('something went wrong');
    }
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
