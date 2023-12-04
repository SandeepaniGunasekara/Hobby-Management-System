import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
    };
  
    return (
      <div className="login-page">
        <h1>Login</h1>
        <p id='message'>{message}</p>
        <form onSubmit={handleSubmit}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      </div>
    );
}
