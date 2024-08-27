// app/signup/page.js

'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, TextField, Stack } from '@mui/material';
import { registerUser } from '../auth'; 


export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      await registerUser(email, password);
      router.push('/chatbot'); // Redirect to the login page after sign-up
    } catch (error) {
      setError('Sign-up failed. Please try again.');
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Stack spacing={2} width="300px">
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button variant="contained" onClick={handleSignUp}>
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
}
