'use client'

import Image from "next/image";
import styles from "./page.module.css";
import {
  Box, 
  Button, 
  Stack, 
  TextField, 
  AppBar, 
  Toolbar, 
  Typography, 
  Avatar,
  Divider, } from '@mui/material';
import { useState } from "react";
import {ThemeProvider} from '@mui/material/styles';
import theme from './theme';

export default function Home() {
  //State for managing messages and user input
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hi! I'm the Rate My Professor Support Assistant. How can I help you today?`,
    },
  ])
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return;
    setIsLoading(true)
    
    setMessage('')
    setMessages((messages) => [
      ...messages,
      {role: 'user', content: message},
      {role: 'assistant', content: ''},
    ])
  }

  //Allows the user to use the enter button to sned a message
  const handleKeyPress = (event) => {
    if (event.key == 'Enter' && !event.shiftKey) {
      event.preventDefault()
      sendMessage()
    }
  }


/* Implement when the API setup is complete
  const response = fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([...messages, {role: 'user', content: message}]),
  }).then(async (res) => {
    const reader = res.body.getReader()
    const decoder = new TextDecoder()
    let result = ''

    return reader.read().then(function processText({done, value}) {
      if (done) {
        return result
      }
      const text = decoder.decode(value || new Uint8Array(), {stream: true})
      setMessages((messages) => {
        let lastMessage = messages[messages.length - 1]
        let otherMessages = messages.slice(0, messages.length - 1)
        return [
          ...otherMessages,
          {...lastMessage, content: lastMessage.content + text},
        ]
      })
      setIsLoading(false)
      return reader.read().then(processText)
    })*/

  
  return (
   <ThemeProvider theme={theme}>
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        backgroundColor="#e8d1b6"
      >
        {/*Possible Nav Bar but Considering Removing this
        <AppBar position="fixed">
          <Toolbar display="flex">
            <Box
              sx={{
                //margin: 0,
                padding: 0.5,
                backgroundColor: 'black',
                //clipPath: 'polygon(0 0, 0 100%, 85% 100%, 100% 0%)',
              }}
            >
              <Typography 
              variant="h5"
              textTransform="uppercase" 
              fontWeight="bold"
              >Rate My</Typography>
            </Box>
            <Box
              sx={{
                //margin: 0,
                backgroundColor: 'white',
                //clipPath: 'polygon(85 0, 0 0, 0 0%, 0% 0%)',
                color: 'black',
                padding: 0.5,
              }}
            >
              <Typography 
              variant="h5" 
              textTransform="uppercase" 
              fontWeight="bold"
              >Professor</Typography>
            </Box>
            <Typography  variant="h6">Support Assistant</Typography>
          </Toolbar>
        </AppBar>*/}

        <Box 
        backgroundColor=""
          sx={{
            textAlign: 'center',
            //backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzr5YNc70hYpwXPQQP-fVAC9A-YV0TkuHMmQ&s)',
            //backgroundSize: 'cover',
            mb: 4,
            mt: 8,
          }}
        >
          <Typography variant="h3" gutterBottom color="black"> 
            <span>Welcome to </span> 
            <span style={{padding: 0.5, backgroundColor: 'black', color: 'white'}}><strong>Rate My</strong> </span>
            <span style={{padding: 0.5, backgroundColor: 'white',}}><strong>Professor</strong></span>
            's Support Assistant!</Typography>
          <Typography 
          varaiant="h4" 
          gutterBottom 
          color="black"
          sx={{
            fontSize: '1.2rem',
            textShadow: `
              2px 2px 0px #fff, 
              -2px -2px 0px #fff, 
              2px -2px 0px #fff, 
              -2px 2px 0px #fff, 
              2px 2px 5px #fff
          `,
          }}
        >Recieve <strong>ACCURATE</strong> and <em>INSIGHTFUL</em> answers to your most complex qustions about professors and courses!</Typography>
        </Box>

        <Stack
          direction={'column'}
          width="500px"
          height="600px"
          border="1px solid black"
          borderRadius="16px"
          p={2}
          spacing={2}
          bgcolor={"white"}
          sx={{
            boxShadow: 15,
            //backgroundSize: 'cover',
            //backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzr5YNc70hYpwXPQQP-fVAC9A-YV0TkuHMmQ&s)',
          }}
          >
          <Box 
          display="flex" 
          justifyContent="center"
          alignItems="center"
          //border="1px solid black"
          >
            <Avatar
            sx={{ bgcolor: 'primary.main',}}>A</Avatar>
          </Box>

          <Box 
          display="flex" 
          justifyContent="center"
          alignItems="center"
          >
            <Typography color="black">Assistant</Typography>  
          </Box>  
          
          <Divider aria-hidden="true" sx={{ borderBottomWidth: 3, }}/>

          <Stack
            direction={'column'}
            spacing={2}
            flexGrow={1}
            overflow="auto"
            maxHeight="100%"
            sx={{
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Apply shadow to the stack
              padding: 2,
              borderRadius: 2,
            }}
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent={
                  message.role === 'assistant' ? 'flex-start' : 'flex-end'
                }
              >
                <Box
                  bgcolor={
                    message.role === 'assistant'
                      ? 'primary.main'
                      : 'secondary.main'
                  }
                  color="white"
                  borderRadius={16}
                  p={3}
                >
                  {message.content}
                </Box>
              </Box>
            ))}
          </Stack>
          <Stack direction={'row'} spacing={2}>
            <TextField
              label="Message"
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <Button 
              variant="contained" 
              onClick={sendMessage}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
