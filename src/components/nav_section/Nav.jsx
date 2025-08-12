import React from 'react'
import {Link} from 'react-router-dom'
import account from '../../assets/img/nav/account.png'
import cart from '../../assets/img/nav/cart.svg'
import explore from '../../assets/img/nav/explore.svg'
import favorite from '../../assets/img/nav/favorite.png'
import shop from '../../assets/img/nav/shop.svg'
import favorite2 from '../../assets/img/nav/favorite2.png'
const Nav = () => {
  return (
    <div className='nav_wrap'>
      <Link className="nav_icon" to='/'><img src={shop} alt="" /><p>Shop</p></Link>
      <Link className="nav_icon" to='/explore'><img src={explore} alt="" /><p>Explore</p></Link>
      <Link className="nav_icon" to='/cart'><img src={cart} alt="" /><p>Cart</p></Link>
      <Link className="nav_icon" to='/favorite'><img src={favorite} alt="" /><p>Favorurite</p></Link>
      <Link className="nav_icon" to='/'><img src={account} alt="" /><p>Account</p></Link>
    </div>
  )
}

export default Nav
