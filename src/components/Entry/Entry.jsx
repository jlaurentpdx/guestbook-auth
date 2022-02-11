export default function Entry({ name, comment, date }) {
  return (
    <li>
      <h3>{name}</h3>
      <p>{comment}</p>
      <p>{date}</p>
    </li>
  );
}
