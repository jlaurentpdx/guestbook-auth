import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();

  return (
    <header>
      <h1>Guestbook</h1>
      {user && <h2>Thank you for signing, {user}.</h2>}
    </header>
  );
}
