import React, { useState,useEffect } from 'react';
import  { Link,useNavigate } from 'react-router-dom';
import {Box,Button,Container,Grid,Typography,TextField} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';
import CommonScript from "./../CommonScript";
export default function DayWise() {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

    const usenavigate = useNavigate();
    useEffect(()=>{
        let username = sessionStorage.getItem('username');
        if(username === '' || username === null){
            usenavigate('/');
        }
    },[]);
    
    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Validate email format
    };
    return(
        <div>
            <CommonScript />
            <>
                <Container component="main" maxWidth="xs" sx={{my:20}} >
                    <Card>
                        <CardContent>
                            <Box>
                                <Typography component="h1" variant="h5">Date Wise Report </Typography>
                                <Box component="form">
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="bookTitle"
                                        type="text"
                                        label="Book Title"
                                        name="book_title"
                                        autoFocus
                                    />
                                    
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="bookAuthor"
                                        type="text"
                                        label="Book Author"
                                        name="author"
                                        autoFocus
                                    />

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="total_stock"
                                        label="Total Stock"
                                        type="tel"
                                        id="total_stock"
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