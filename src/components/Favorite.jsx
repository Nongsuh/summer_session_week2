import React from 'react'
import rightside from '../assets/img/product_detail/rightside_vector.svg'
import drink1 from '../assets/img/beverage/drink1.png'
import drink2 from '../assets/img/beverage/drink2.png'
import drink3 from '../assets/img/beverage/drink3.png'
import drink5 from '../assets/img/beverage/drink5.png'
import drink6 from '../assets/img/beverage/drink6.png'
const Favorite = () => {
    return (
        <div className='favorite container'>
            <h1>Favorurite</h1>
            <div className="content">
                <div className="box">
                    <img id="drink2" src={drink2} alt="" />
                    <div className="box_mid">
                        <h1>Sprite Can</h1>
                        <p id="detail">325ml, Price</p>
                    </div>
                    <p id="price">$1.50</p>
                    <img id="vector" src={rightside} alt="" />
                </div>
                <div className="box">
                    <img id="drink1" src={drink1} alt="" />
                    <div className="box_mid">
                        <h1>Diet Coke</h1>
                        <p id="detail">355ml, Price</p>
                    </div>
                    <p id="price">$1.99</p>
                    <img id="vector" src={rightside} alt="" />
                </div>
                <div className="box">
                    <img id="drink3" src={drink3} alt="" />
                    <div className="box_mid">
                        <h1>Apple & Grape Juice</h1>
                        <p id="detail">250gm, Price</p>
                    </div>
                    <p id="price">$15.50</p>
                    <img id="vector" src={rightside} alt="" />
                </div>
                <div className="box">
                    <img id="drink5" src={drink5} alt="" />
                    <div className="box_mid">
                        <h1>Coca Cola Can</h1>
                        <p id="detail">325ml, Price</p>
                    </div>
                    <p id="price">$4.99</p>
                    <img id="vector" src={rightside} alt="" />
                </div>
                <div className="box">
                    <img id="drink6" src={drink6} alt="" />
                    <div className="box_mid">
                        <h1>Pepsi Can </h1>
                        <p id="detail">330ml, Price</p>
                    </div>
                    <p id="price">$4.99</p>
                    <img id="vector" src={rightside} alt="" />
                </div>   
                <button id='final_btn'>Add All To Cart</button>
            </div>
         
        </div>
    )
}

export default Favorite
