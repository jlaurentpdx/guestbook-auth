import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
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
    <LoginForm
      {...{ email, setEmail, password, setPassword, error, handleLogin }}
    />
  );
}
