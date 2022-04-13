import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register'

export const AuthRouter = () => {
  return (
    <div className='auth_main'>
      <div className='auth_box-container'>
        <Routes>
          <Route
            path='Login'
            element={<Login />}
          />
          <Route
            path='Register'
            element={<Register />}
          />
        </Routes>
      </div>
    </div>
  )
}