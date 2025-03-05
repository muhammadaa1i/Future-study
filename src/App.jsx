import React from 'react'
import Layout from './pages/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Programs from './pages/Programs/Programs'
import Universities from './pages/Universities/Universities'
import Turkey from './pages/Turkey/Turkey'
import Home from './pages/Home/Home'
import Services from './pages/Turkey/Turkey'
import Kent from './pages/Universities/Kent'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="programs" element={<Programs />} />
          <Route path="universities" element={<Universities />}/>
          <Route path="services" element={<Services />} />
          <Route path="turkey" element={<Turkey />} />
          <Route path="kent" element={<Kent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App