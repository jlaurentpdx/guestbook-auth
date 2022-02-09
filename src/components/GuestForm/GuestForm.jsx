import { useState } from 'react';

export default function GuestForm({ entries, setEntries }) {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [entry, setEntry] = useState('');

  const handleChangeUser = () => {
    setCurrentUser('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { id: new Date(), name: user, comment: entry };

    setEntries([...entries, newEntry]);
    setCurrentUser(user);
    setEntry('');
  };

  return (
    <>
      <form>
        {currentUser ? (
          <>
            <h2>Thank you for signing, {currentUser}.</h2>
            <p onClick={handleChangeUser}>Not {currentUser}?</p>
          </>
        ) : (
          <input
            value={user}
            placeholder="Your Name"
            onChange={(e) => setUser(e.target.value)}
          />
        )}
        <input
          value={entry}
          placeholder="Your Entry"
          onChange={(e) => setEntry(e.target.value)}
        />
        <button onClick={handleSubmit}>Sign</button>
      </form>
    </>
  );
}
