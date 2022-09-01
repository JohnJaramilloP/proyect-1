import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { Principal } from '../home/pages/Principal';

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login y registro */}
        <Route path='/auth/*' element={ <AuthRoutes />} />
        {/* ´Principal */}
        <Route path='/*' element={ <Principal/>} />
    </Routes>
  )
}
