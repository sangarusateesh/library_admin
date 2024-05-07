import React, { useState } from "react";
import DataTable from "react-data-table-component";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CommonScript from "./../CommonScript";
import { Typography } from "@mui/material";
export default function AddStudent() {
    const columns = [
        {
            name: 'Student ID',
            selector:row=>row.studentid,
            sortable:true
        },
        {
            name:'Name',
            selector:row=>row.name,
            sortable:true
        },
        {
            name:'Class',
            selector:row=>row.class,
            sortable:true
        },
        {
            name:'Attendence',
            selector:row=>row.attendence,
            sortable:true
        },
        {
            name:'Action',
            cell:(row)=><Button variant="contained" onClick={handleEditData}>Show Details</Button>
        }
    ];

    
    const rows = [
        {studentid:'STU00001',name:'Sateesh Sangaru',class:'8',attendence:'78%'},
        {studentid:'STU00002',name:'Rachana',class:'6',attendence:'73.2%'},
        {studentid:'STU00003',name:'Gopi Prasanth',class:'9',attendence:'96.4%'},
        {studentid:'STU00004',name:'Sai Karthik',class:'4',attendence:'69.56%'},
        {studentid:'STU00005',name:'Ravi Kumar Korapana',class:'7',attendence:'59.78%'},
        {studentid:'STU00006',name:'Rama Rao Sangaru',class:'10',attendence:'98.45%'},
        {studentid:'STU00007',name:'Kishore',class:'5',attendence:'74.32%'},
        {studentid:'STU00008',name:'Sharath Chandra',class:'1',attendence:'73.21%'},
        {studentid:'STU00009',name:'Ashwini',class:'7',attendence:'91.78%'},
        {studentid:'STU00010',name:'Ram',class:'3',attendence:'99.21%'},
        {studentid:'STU00011',name:'Babu Salem',class:'10',attendence:'67.9%'},
        {studentid:'STU00012',name:'Santhosh',class:'8',attendence:'82%'},
        
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
                <Typography variant="h4" color={'primary'}>Student Data</Typography>
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