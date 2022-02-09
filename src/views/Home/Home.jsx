import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  const handleChangeUser = (e) => {
    e.preventDefault();
    setCurrentUser('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date();
    setCurrentUser(user);

    const newEntry = { id: id, name: user, comment: entry };

    setEntries([...entries, newEntry]);
  };

  return (
    <>
      <form>
        {currentUser ? (
          <>
            <h2>Howdy, {currentUser}</h2>
            <span>Not {currentUser}? </span>
            <button onClick={handleChangeUser}>Change user</button>
          </>
        ) : (
          <>
            <div className="name">
              <span>Guest Name:</span>
              <input value={user} onChange={(e) => setUser(e.target.value)} />
            </div>
          </>
        )}
        <div className="entry">
          <span>Guest Entry:</span>
          <input value={entry} onChange={(e) => setEntry(e.target.value)} />
        </div>
        <button onClick={handleSubmit}>Sign</button>
      </form>
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
