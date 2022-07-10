import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import { Principal } from '../pages/Principal'

export const HomeRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Principal />} />
            <Route path='/*' element={ <Navigate to="/" />} />
        </Routes>
    </div>
  )
}
