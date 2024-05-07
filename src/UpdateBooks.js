import React, { useState } from "react";
import DataTable from "react-data-table-component";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CommonScript from "./CommonScript";
export default function UpdateBooks() {
    const columns = [
        {
            name: 'Book ID',
            selector:row=>row.bookid,
            sortable:true
        },
        {
            name:'Title',
            selector:row=>row.title,
            sortable:true
        },
        {
            name:'Author',
            selector:row=>row.author,
            sortable:true
        },
        {
            name:'Availability',
            selector:row=>row.availability,
            sortable:true
        },
        {
            name:'Action',
            cell:(row)=><Button variant="contained" onClick={handleEditData}>Edit</Button>
        }
    ];

    
    const rows = [
        {
            bookid:'BOOK00001',
            title:'Atomic Habits',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00002',
            title:'Life of pie',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00003',
            title:'Little Sholuders',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00004',
            title:'Learn and Earn',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00001',
            title:'Atomic Habits',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00002',
            title:'Life of pie',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00003',
            title:'Little Sholuders',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00004',
            title:'Learn and Earn',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00001',
            title:'Atomic Habits',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00002',
            title:'Life of pie',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00003',
            title:'Little Sholuders',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00004',
            title:'Learn and Earn',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00001',
            title:'Atomic Habits',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00002',
            title:'Life of pie',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00003',
            title:'Little Sholuders',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00004',
            title:'Learn and Earn',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00001',
            title:'Atomic Habits',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00002',
            title:'Life of pie',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00003',
            title:'Little Sholuders',
            author:'Sateesh Sangaru',
            availability:21
        },
        {
            bookid:'BOOK00004',
            title:'Learn and Earn',
            author:'Sateesh Sangaru',
            availability:21
        },
    ];

    const handleEditData = (e) => {
        
    }

    const [records, setRecords] = useState(rows);
    
    const handleFilter = (e) =>{
        if(e.target.value){
            const newData = records.filter(row=>{
                return row.title.toLowerCase().includes(e.target.value.toLowerCase());
            });
            setRecords(newData);
        }else{
            setRecords(rows);
        }
    }

    return (
        <div className="mt-5">
            <CommonScript />
            <div className="container">
                <div style={{marginTop:'10px'}}>
                    <DataTable
                        columns={columns}
                        data={records}
                        fixedHeader
                        pagination
                        highlightOnHover
                        actions={
                            <Button variant="contained">Pdf</Button>
                        }
                        subHeader
                        subHeaderComponent={
                            <TextField
                                type="text"
                                placeholder="Search"
                                onChange={handleFilter}
                            />
                        }
                    >
                    </DataTable>
                </div>
            </div>
        </div>
    )
}