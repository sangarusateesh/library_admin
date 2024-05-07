// QRCodeGenerator.js
import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import QrCode from 'react-qr-code';

const QRCodeGenerator = () => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Text for QR Code"
                    variant="outlined"
                    value={text}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    onClick={() => setText('')}
                >
                    Clear
                </Button>
            </Grid>
            <Grid item xs={12}>
                <QrCode value={text} />
            </Grid>
        </Grid>
    );
};

export default QRCodeGenerator;
