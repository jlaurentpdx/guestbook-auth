import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Login() {
  const location = useLocation();
  const history = useHistory();
  const { login } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (e) => {
    e.preventDefault();
    const loginSuccessful = login(email, password);

    if (!loginSuccessful) setError('login failed');
    else history.push(from.pathname);
  };

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Submit</button>
      {error && <p>{error}</p>}
    </form>
  );
}
