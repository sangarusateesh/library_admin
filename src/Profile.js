import React, { useState,useEffect } from 'react';
import  { Link,useNavigate } from 'react-router-dom';
import {Box,Button,Container,Grid,Typography,TextField} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';
import CommonScript from "./CommonScript";
export default function Profile() {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

    const usenavigate = useNavigate();
    useEffect(()=>{
        let username = sessionStorage.getItem('username');
        if(username === '' || username === null){
            usenavigate('/');
        }else{
            let dataToSend = {
                action:'get_user_data',
                email:username
            };
            axios.post('http://localhost/Tasks/AjaxController.php', dataToSend)
                .then(response => {
                    if(response.data.response === true){
                        sessionStorage.setItem('username',email);
                        usenavigate("/Profile");
                    }
                })
                .catch(error => {
                //   setError(error);
            });
            setEmail(username);
        }
    },[]);
    
    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Validate email format
        const isValidEmail = validateEmail(email);
        setIsValid(isValidEmail);
        if (isValidEmail) {
          // Handle form submission
          const dataToSend = {
            email:email,
            password:'hhhhh',
            action: 'login_user' // Replace with your data
          };
      
          axios.post('http://localhost/Tasks/AjaxController.php', dataToSend)
            .then(response => {
                if(response.data.response === true){
                    sessionStorage.setItem('username',email);
                    usenavigate("/dashboard");
                }
            })
            .catch(error => {
            //   setError(error);
            });
        }
    };

    const validateEmail = (email) => {
        // Regular expression for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    return(
        <div>
            <CommonScript />
            <>
                <Container component="main" maxWidth="xs" sx={{my:20}} >
                    <Card>
                        <CardContent>
                            <Box>
                                <Typography component="h1" variant="h5">Profile </Typography>
                                <Box component="form">
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="userName"
                                        type="text"
                                        label="Name"
                                        name="name"
                                        autoFocus
                                    />
                                    
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="userEmail"
                                        type="email"
                                        label="Email Address"
                                        name="email"
                                        onChange={handleChange}
                                        error={!isValid}
                                        helperText={!isValid && 'Please enter a valid email address'}
                                        value={email} 
                                        autoFocus
                                    />

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="phone"
                                        label="Contact No."
                                        type="tel"
                                        id="phone"
                                    />
                                    <Button onClick={handleSubmit}
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        >Update
                                    </Button>
                                <Grid>
                            </Grid>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </>
    </div>
)
}