import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <label htmlFor='login-username'>username:</label>
      <input
        type='text'
        id='login-username'
        required
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br></br>
      <label htmlFor='login-password'>password:</label>
      <input
        type='password'
        id='login-password'
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br></br>
      <button>Login</button>
    </form>
  );
}
