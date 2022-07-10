import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { AdvisersView } from '../advisers/AdvisersView';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { EstudentsView } from '../estudents/EstudentsView';
import { HomeRoutes } from '../home/routes/HomeRoutes';

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login y registro */}
        <Route path='/auth/*' element={ <AuthRoutes />} />
        {/* ´Principal */}
        <Route path='/*' element={ <HomeRoutes/>} />
        {/* Asesores */}
        <Route path='/asesores' element={ <AdvisersView/>} />
        {/* Estudiantes */}
        <Route path='/estudiantes' element={ <EstudentsView/>} />
    </Routes>
  )
}
