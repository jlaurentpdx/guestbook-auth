import { useUser } from '../../context/UserContext';

export default function Header() {
  const { currentUser } = useUser();
  return (
    <header>
      <h1>Guestbook</h1>
      {currentUser && (
        <>
          <h2>Thank you for signing, {currentUser}.</h2>
          <p onClick={handleChangeUser}>Not {currentUser}?</p>
        </>
      )}
    </header>
  );
}
