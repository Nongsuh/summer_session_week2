import React from 'react'
import {useNavigate} from 'react-router-dom'
import search from '../assets/img/home_screen/search.svg'
import cate1 from '../assets/img/explore/cate1.png'
import cate2 from '../assets/img/explore/cate2.png'
import cate3 from '../assets/img/explore/cate3.png'
import cate4 from '../assets/img/explore/cate4.png'
import cate5 from '../assets/img/explore/cate5.png'
import cate6 from '../assets/img/explore/cate6.png'

const Explore = () => {
    const navigate=useNavigate();
    const goBeverage=()=>{
        navigate('/beverages')
    }
    return (
        <div className='explore container'>
            <h1>Find Products</h1>
            <div className="search">
                <img src={search} alt="" />
                <input type="text" placeholder='Search Store' />
            </div>
            <div className="products_category">
                <div className="set" id='set1'>
                    <div className="block" id='block1'>
                        <img src={cate1} alt="" />
                        <p>Frash Fruits<br/>& Vegetable</p>
                    </div>
                    <div className="block" id='block2'>
                        <img src={cate2} alt="" />
                        <p>Cooking Oil<br />& Ghee</p>
                    </div>
                </div>
                <div className="set">
                    <div className="block" id='block3'>
                        <img src={cate3} alt="" />
                        <p>Meat & Fish</p>
                    </div>
                    <div className="block" id='block4'>
                        <img src={cate4} alt="" />
                        <p>Bakery & Snacks</p>
                    </div>
                </div>
                <div className="set">
                    <div className="block" id='block5'>
                        <img src={cate5} alt="" />
                        <p>Dairy & Eggs</p>
                    </div>
                    <div className="block" id='block6' onClick={goBeverage}>
                        <img src={cate6} alt="" />
                        <p>Beverages</p>
                    </div>
                </div>
                <div className="set">
                    <div className="block" id='block3'>
                        <img src={cate5} alt="" />
                        <p>Dairy & Eggs</p>
                    </div>
                    <div className="block" id='block4'>
                        <img src={cate6} alt="" />
                        <p>Beverages</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore
