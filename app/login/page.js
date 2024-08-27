'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Box, 
  Button, 
  Stack, 
  TextField, 
  Typography, 
 } from '@mui/material';

import { loginUser, registerUser } from '../auth'; // Update path as needed



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await loginUser(email, password);

      router.push('/chatbot'); // Ensure the path is correct
    } catch (error) {
      console.error('Login error:', error);
      setError(" email or password. Please try again.");
    }
  };
  

  const handleSignUp = async () => {
    try {
      await registerUser(email, password);
      router.push('/chatbot'); // Redirect to the chatbot page after sign-up
    } catch (error) {
      setError("Sign-up failed. Please try again.");
    }
  };

  return (
    <Box 
      backgroundColor="#e8d1b6"
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh"
    >
      <Typography variant="h4" component="h1" mb={4}>
        Welcome to our Rate My Professor Support Assistant! 
      </Typography>
      <Typography variant="h6" component="p" mb={6}>
        Please log in to get started. 
      </Typography>

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
        {error && <Typography color="error">{error}</Typography>}
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={handleLogin}>
            Log In
          </Button>
          <Button variant="outlined" onClick={handleSignUp}>
            Sign Up
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
