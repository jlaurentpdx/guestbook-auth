export default function Entry({ id, name, comment }) {
  return (
    <div key={id}>
      <h3>{name}</h3>
      <p>{comment}</p>
      <p>{id}</p>
    </div>
  );
}
