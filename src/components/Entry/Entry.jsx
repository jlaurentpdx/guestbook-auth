export default function Entry({ user, comment, date }) {
  return (
    <li>
      <h3>{user}</h3>
      <p>{comment}</p>
      <p>{date}</p>
    </li>
  );
}
