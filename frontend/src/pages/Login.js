import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        setMessage("Invalid email");
        return;
      }

      const credentials = {email: email, password: password};
      
      fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })
      .then(response => 
        response.json()
      )
      .then(data => {
        if (data.user) {
          localStorage.setItem('user', data.user);
          navigate('/users');
        } else {
          setMessage(data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    };
  
    return (
      <div className="login-page">
        <h1>Login</h1>
        <p className='message'>{message}</p>
        <form onSubmit={handleSubmit}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type='email'
            required
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      </div>
    );
}
