import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutNoNav from './components/nav_section/LayoutNoNav'
import LayoutwithNav from './components/nav_section/LayoutwithNav'
import Home from './components/Home'
import ProductDetail from './components/ProductDetail'
import Explore from './components/Explore'
import Beverage from './components/Beverage'
import Filters from './components/Filters'
import Cart from './components/Cart'
import Favorite from './components/Favorite'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutwithNav/>}>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorite' element={<Favorite/>}/>
        </Route>

        <Route element={<LayoutNoNav/>}>
          <Route path='/apple_info' element={<ProductDetail />} />
          <Route path='/beverages' element={<Beverage/>}/>
          <Route path='/filters' element={<Filters/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
