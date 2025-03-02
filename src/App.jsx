import React from 'react'
import Layout from './pages/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Students from './pages/Students/Students'
import Programs from './pages/Programs/Programs'
import Universities from './pages/Universities/Universities'
import Turkey from './pages/Turkey/Turkey'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/students" element={<Students />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/turkey" element={<Turkey /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App