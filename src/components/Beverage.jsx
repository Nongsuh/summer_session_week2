import React from 'react'
import back from '../assets/img/product_detail/back.svg'
import drink1 from '../assets/img/beverage/drink1.png'
import drink2 from '../assets/img/beverage/drink2.png'
import drink3 from '../assets/img/beverage/drink3.png'
import drink4 from '../assets/img/beverage/drink4.png'
import drink5 from '../assets/img/beverage/drink5.png'
import drink6 from '../assets/img/beverage/drink6.png'
import filter from '../assets/img/beverage/filter.svg'
import plus from '../assets/img/home_screen/plus.png'
import { useNavigate } from 'react-router-dom'

const Beverage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/explore');
    }
    const goFilter=()=>{
        navigate('/filters')
    }

    return (
        <div className='beverage container'>
            <header>
                <img onClick={goBack} id="back" src={back} alt="" />
                <h1>Beverages</h1>
                <img onClick={goFilter} id="filter" src={filter} alt="" />
            </header>
            <main>
                <div className="item_boxes">
                    <div className="item">
                        <img id="drink1" src={drink1} alt="" />
                        <h1>Diet Coke</h1>
                        <p id="detail">355ml, Price</p>
                        <p id="price">$1.99</p>
                        <button><img src={plus} alt="" /></button>
                    </div>
                    <div className="item">
                        <img id="drink2" src={drink2} alt="" />
                        <h1>Sprite Can</h1>
                        <p id="detail">355ml, Price</p>
                        <p id="price">$1.50</p>
                        <button><img src={plus} alt="" /></button>
                    </div>
                </div>
                <div className="item_boxes">
                    <div className="item">
                        <img id="drink3" src={drink3} alt="" />
                        <h1>Apple & Grape<br />Juice</h1>
                        <p id="detail">2L, Price</p>
                        <p id="price">$15.99</p>
                        <button><img src={plus} alt="" /></button>
                    </div>
                    <div className="item">
                        <img id="drink4" src={drink4} alt="" />
                        <h1>Orenge Juice</h1>
                        <p id="detail">2L, Price</p>
                        <p id="price">$15.99</p>
                        <button><img src={plus} alt="" /></button>
                    </div>
                </div>
                <div className="item_boxes">
                    <div className="item">
                        <img id="drink5" src={drink5} alt="" />
                        <h1>Coca Cola Can</h1>
                        <p id="detail">325ml, Price</p>
                        <p id="price">$4.99</p>
                        <button><img src={plus} alt="" /></button>
                    </div>
                    <div className="item">
                        <img id="drink6" src={drink6} alt="" />
                        <h1>Pepsi Can </h1>
                        <p id="detail">330ml, Price</p>
                        <p id="price">$4.99</p>
                        <button><img src={plus} alt="" /></button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Beverage
