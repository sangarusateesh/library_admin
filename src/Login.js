import React, { useState,useEffect } from 'react';
import  { Link,useNavigate } from 'react-router-dom';
import {Box,Button,Container,Grid,Typography,TextField} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';

function Login() {
    const usenavigate = useNavigate();
    useEffect(()=>{
        sessionStorage.clear();
    },[]);
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

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
      
        //   axios.post('http://localhost/Tasks/AjaxController.php', dataToSend)
        //     .then(response => {
        //         if(response.data.response === true){
                    sessionStorage.setItem('username',email);
        //             usenavigate("/dashboard");
        //         }
        //     })
        //     .catch(error => {
        //     //   setError(error);
        //     });
        usenavigate("/dashboard");
        }
    };

    const validateEmail = (email) => {
        // Regular expression for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <>
            <Container component="main" maxWidth="xs" sx={{my:20}} >
                <Card>
                    <CardContent>
                        <Box>
                            <Typography component="h1" variant="h5">Sign In </Typography>
                            <Box component="form">
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
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                />
                                <Button onClick={handleSubmit}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    >Sign In
                                </Button>
                            <Grid>
                            <Link href="">Forgot password?</Link>
                            </Grid>    
                            <Grid className="footer">
                            <Typography component="h5">
                            Don't have an account? <Link href="">Sign Up</Link>
                            </Typography>
                            </Grid>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}
   
   export default Login;