import React from 'react'
import { useNavigate } from 'react-router-dom'
import banner from '../assets/img/home_screen/banner.png'
import food1 from '../assets/img/home_screen/food1.png'
import food2 from '../assets/img/home_screen/food2.png'
import food3 from '../assets/img/home_screen/food3.png'
import food4 from '../assets/img/home_screen/food4.png'
import plus from '../assets/img/home_screen/plus.png'
import pulse from '../assets/img/home_screen/pulse.png'
import rice from '../assets/img/home_screen/rice.png'
import food6 from '../assets/img/home_screen/chicken.png'
import food5 from '../assets/img/home_screen/beef.png'
import logo from '../assets/img/home_screen/logo.svg'
import search from '../assets/img/home_screen/search.svg'
import location from '../assets/img/home_screen/location.svg'

const Home = () => {
  const navigate = useNavigate();
  const goInfo = () => {
    navigate('/apple_info');
  }
  return (
    <div className='Home container'>
      <header>
        <img id="logo" src={logo} alt="" />
        <div className="location">
          <img src={location} alt="" />
          <p>Dhaka, Banassre</p>
        </div>
        <div className="search">
          <img src={search} alt="" />
          <input type="text" placeholder='Search Store' />
        </div>
        <img id="banner" src={banner} alt="" />
      </header>
      <div className="box">
        <div className="text">
          <h1>Exclusive Offer</h1>
          <h2>See all</h2>
        </div>
        <div className="item_boxes">
          <div className="item">
            <img id="food1" src={food1} alt="" />
            <h1>Organic Bananas</h1>
            <p id="detail">7pcs, Priceg</p>
            <p id="price">$4.99</p>
            <button><img src={plus} alt="" /></button>
          </div>
          <div className="item" onClick={goInfo}>
            <img id="food2" src={food2} alt="" />
            <h1>Red Apple</h1>
            <p id="detail">1kg, Priceg</p>
            <p id="price">$4.99</p>
            <button><img src={plus} alt="" /></button>
          </div>
          <div className="item">
            <img id="food2" src={food2} alt="" />
            <h1>Red Apple</h1>
            <p id="detail">1kg, Priceg</p>
            <p id="price">$4.99</p>
            <button><img src={plus} alt="" /></button>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="text">
          <h1>Best Selling</h1>
          <h2>See all</h2>
        </div>
        <div className="item_boxes">
          <div className="item">
            <img id="food3" src={food3} alt="" />
            <h1>Bell Pepper Red</h1>
            <p id="detail">1kg, Priceg</p>
            <p id="price">$4.99</p>
            <button><img src={plus} alt="" /></button>
          </div>
          <div className="item">
            <img id="food4" src={food4} alt="" />
            <h1>Ginger</h1>
            <p id="detail">250gm, Priceg</p>
            <p id="price">$4.99</p>
            <button><img src={plus} alt="" /></button>
          </div>
          <div className="item">
            <img id="food4" src={food4} alt="" />
            <h1>Ginger</h1>
            <p id="detail">250gm, Priceg</p>
            <p id="price">$4.99</p>
            <button><img src={plus} alt="" /></button>
          </div>
        </div>
      </div>
      <div className="categorybox">
        <div className="text">
          <h1>Groceries</h1>
          <h2>See all</h2>
        </div>
        <div className="img_bars">
          <div className="img_bar" id='pulse'><img id='pulse_img' src={pulse} alt="" /><p>Pulses</p></div>
          <div className="img_bar" id='rice'><img id="rice_img" src={rice} alt="" /><p>Rice</p></div>
        </div>
      </div>
      <div className="box" id='last_box'>
        <div className="item_boxes">
          <div className="item">
            <img id="food5" src={food5} alt="" />
            <h1>Beef Bone</h1>
            <p id="detail">1kg, Priceg</p>
            <p id="price">$4.99</p>
            <button><img src={plus} alt="" /></button>
          </div>
          <div className="item">
            <img id="food6" src={food6} alt="" />
            <h1>Broiler Chicken</h1>
            <p id="detail">1kg, Priceg</p>
            <p id="price">$4.99</p>
            <button><img src={plus} alt="" /></button>
          </div>
          <div className="item">
            <img id="food6" src={food6} alt="" />
            <h1>Broiler Chicken</h1>
            <p id="detail">1kg, Priceg</p>
            <p id="price">$4.99</p>
            <button><img src={plus} alt="" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
