import styles from './LoginForm.css';

export default function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  error,
  handleLogin,
}) {
  const { form, control, label } = styles;
  return (
    <form className={form}>
      <div className={control}>
        <label htmlFor="email" className={label}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={control}>
        <label htmlFor="password" className={label}>
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Submit</button>
      {error && <p>{error}</p>}
    </form>
  );
}
