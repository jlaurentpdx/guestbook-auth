import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useEntries } from '../../context/EntryContext';
import { v4 as uuid } from 'uuid';

export default function GuestForm() {
  const [comment, setComment] = useState('');
  const { user, logout } = useUser();
  const { setEntries } = useEntries();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date().toDateString();
    const entry = { id: uuid(), user, comment, date };

    try {
      setComment('');
      setEntries((prevState) => [entry, ...prevState]);
    } catch {
      alert('Something went wrong. Your message was not entered.');
    }
  };

  return (
    <>
      <form id="guest-form">
        <input
          value={comment}
          placeholder="Your Comment"
          aria-label="Your Comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleSubmit}>Sign</button>
        {user && (
          <p style={{ cursor: 'pointer' }} onClick={logout}>
            Not {user}? Click here.
          </p>
        )}
      </form>
    </>
  );
}
