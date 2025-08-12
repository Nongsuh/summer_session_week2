import React, { useState } from 'react'
import back from '../assets/img/product_detail/back.svg'
import send from '../assets/img/product_detail/send.svg'
import apple from '../assets/img/product_detail/apple.png'
import heart from '../assets/img/product_detail/heart.svg'
import downside from '../assets/img/product_detail/downside_vector.svg'
import rightside from '../assets/img/product_detail/rightside_vector.svg'
import stars from '../assets/img/product_detail/stars.png'
import minus from '../assets/img/product_detail/minus.svg'
import plus from '../assets/img/product_detail/plus.svg'
import { useNavigate } from 'react-router-dom'

const ProductDetail = () => {
    const [productCount, setProductCount] = useState(0);
    const navigate=useNavigate();

    const goBack=()=>{
        navigate('/');
    }
    const Increase = () => {
        setProductCount(productCount + 1);
    };
    const Decrease = () => {
        if (productCount > 0) {
            setProductCount(productCount - 1);
        }
    };

    return (
        <div className='Apple container'>
            <div className="product_img">
                <header>
                    <img onClick={goBack} id="back" src={back} alt="" />
                    <img id="send" src={send} alt="" />
                </header>
                <img id="apple" src={apple} alt="" />
            </div>
            <main>
                <div className="content">
                    <h1>Naturel Red Apple</h1>
                    <p>1kg, Price</p>
                    <img id="heart" src={heart} alt="" />
                    <div className="amount">
                        <button onClick={Decrease}><img id='minus' src={minus} alt="" /></button>
                        <div className="number">{productCount}</div>
                        <button onClick={Increase}><img id='plus' src={plus} alt="" /></button>
                    </div>
                    <p id='price'>$4.99</p>
                </div>
                <div className="product_detail">
                    <h1>Product Detail</h1>
                    <p>Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.</p>
                    <img src={downside} alt="" />
                </div>
                <div className="nutritions">
                    <h1>Nutritions</h1>
                    <p>100gr</p>
                    <img src={rightside} alt="" />
                </div>
                <div className="review">
                    <h1>Review</h1>
                    <img id="stars" src={stars} alt="" />
                    <img id="rightside" src={rightside} alt="" />
                </div>
                <button id='basket'>Add To Basket</button>
            </main>
        </div>
    )
}

export default ProductDetail
