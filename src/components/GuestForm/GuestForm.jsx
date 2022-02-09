import { useState } from 'react';
import { useUser } from '../../context/UserContext';

export default function GuestForm({ entries, setEntries }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const { user, setUser } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: new Date().toString(),
      name,
      comment,
    };

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
        {user && <p onClick={handleChangeUser}>Not {user}?</p>}
      </form>
    </>
  );
}
