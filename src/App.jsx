import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState('Bob Loblaw');
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([
    { id: 'Jojo-0', name: 'Jojo', comment: 'hey it is me' },
  ]);

  const handleChangeUser = (e) => {
    e.preventDefault();
    setCurrentUser('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries([...entries, { entry }]);
    setCurrentUser(user);
  };

  return (
    <div>
      <header>
        <h1>Guestbook</h1>
        <h2>Howdy, {user}</h2>
      </header>
      <main>
        <form>
          {currentUser ? (
            <>
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
      </main>
    </div>
  );
}
