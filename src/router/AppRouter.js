import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { Principal } from '../home/pages/Principal';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        {/* Login y registro */}

        <Route path='/auth/*' element={
          <PublicRoute>
            <AuthRoutes />
          </PublicRoute>
        }
        />

        {/* ´Principal */}

        <Route path='/*' element={
          <PrivateRoute>
            <Principal/>
          </PrivateRoute>
        } />
    </Routes>
    </div>
  )
}
