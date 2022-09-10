import React from 'react'

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/pages/Home'
import SingleProduct from './components/pages/SingleProduct'
import Tenu from './components/pages/Tenu'
import SingleProductTenu from './components/pages/SingleProductTenu'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import BackTotop from './BackTotop'

const App = () => {
  return (
    <BrowserRouter>
    <BackTotop/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tenu' element={<Tenu />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/productTenu/:id' element={<SingleProductTenu />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App