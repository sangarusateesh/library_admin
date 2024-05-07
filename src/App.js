import React from 'react';
import './App.css';
import { Route, Routes, Navigate,Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Profile from './Profile';
import Logout from './Logout';
import NewBook from './NewBook';
import UpdateBooks from './UpdateBooks';
import AddStudent from './studentPages/AddStudent';
import BookWise from './reports/BookWise';
import DayWise from './reports/DayWise';
import ChangePassword from './userPages/ChangePassword';
import qr_code_generator from './QRCodeGenerator';
function App() {
  return (
    <div style={{overflow: 'hidden !important'}}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Logout' element={<Logout />} />
        <Route path='/new_book' element={<NewBook />} />
        <Route path='/available_books' element={<UpdateBooks />} />
        
        <Route path='/add_student' element={<AddStudent />} />
      
        <Route path='/book_wise' element={<BookWise />} />
        <Route path='/day_wise' element={<DayWise />} />
      
        <Route path='/change_password' element={<ChangePassword />} />
        
        <Route path='/qr_code_generator' element={<qr_code_generator />} />
      
      </Routes>
    </div>
  );
}

export default App;
