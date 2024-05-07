// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
import React, { useState,useEffect } from 'react';
import  { Link,useNavigate } from 'react-router-dom';
import  { Container,Card,CardContent,Box,Typography,TextField } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import CommonScript from "./CommonScript";

const columns = [
  { field: 'id', headerName: 'Book Id', width: 400,fontSize:'45px',fontWeight:700 },
  { field: 'firstName', headerName: 'Book Title', width: 400 },
  { field: 'lastName', headerName: 'Author', width: 400 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
//   },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [open, setOpen] = useState(false);
    const usenavigate = useNavigate();
    useEffect(()=>{
        let username = sessionStorage.getItem('username');
        if(username === '' || username === null){
            usenavigate('/');
        }
    },[]);
    const handleUpdateClick = (rowData) => {
        setSelectedRow(rowData);
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Validate email format
    };
    return (
        <div /*style={{ height: 400, width: '100%' }}*/ >
            <CommonScript />
        <DataGrid
            rows={rows}
            // columns={columns}
            columns={columns.concat({
                field: 'update',
                headerName: 'Update',
                sortable: false,
                width: 120,
                renderCell: (params) => (
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleUpdateClick(params.row)}
                    >
                    Update
                    </Button>
                ),
            })}
            components={{
                Toolbar: GridToolbar,
            }}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 5 },
            },
            }}
            pageSizeOptions={[5, 10]}
            // checkboxSelection
            style={{fontSize:'25px'}}
        />
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Update Book Data</DialogTitle>
            <DialogContent>
            {/* Render the selected row data here */}
            {selectedRow && (
                <div>
                {/* Example: Displaying selected row data */}
                {/* <p>ID: {selectedRow.id}</p>
                <p>Name: {selectedRow.name}</p> */}

                {/* Add more fields as needed */}
                </div>
            )}
                <Container component="main" maxWidth="xs" sx={{my:20}} >
                    <Card>
                        <CardContent>
                            <Box>
                                <Typography component="h1" variant="h5">Adding New Book </Typography>
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
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            {/* Add update logic here if needed */}
            </DialogActions>
        </Dialog>
    </div>
  );
}