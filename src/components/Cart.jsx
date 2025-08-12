import React, { useState } from 'react'
import banana from '../assets/img/home_screen/food1.png'
import pepper from '../assets/img/home_screen/food3.png'
import ginger from '../assets/img/home_screen/food4.png'
import egg from '../assets/img/cart/egg.png'
import remove from '../assets/img/filters/close.svg'
import minus from '../assets/img/product_detail/minus.svg'
import plus from '../assets/img/product_detail/plus.svg'

const Cart = () => {
  const [productCount, setProductCount] = useState(0);

  const Increase = () => {
    setProductCount(productCount + 1);
  };
  const Decrease = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1);
    }
  };
  const[show,setShow]=useState(true);
  const Delete=()=>{
    setShow(false);
  }

  return (
    <div className='cart container'>
      <h1>My Cart</h1>
      <div className="content">
        {show&&(
        <div className="box">
          <img id="pepper" src={pepper} alt="" />
          <div className="box_mid">
            <h1>Bell Pepper Red</h1>
            <p id="detail">1kg, Priceg</p>
            <div className="amount">
              <button onClick={Decrease}><img id='minus' src={minus} alt="" /></button>
              <div className="number">{productCount}</div>
              <button onClick={Increase}><img id='plus' src={plus} alt="" /></button>
            </div>
          </div>
          <div className="box_last">
            <img onClick={Delete} id="remove" src={remove} alt="" />
            <p id="price">$4.99</p>
          </div>
        </div>
        )}
        
        <div className="box">
          <img id="egg" src={egg} alt="" />
          <div className="box_mid">
            <h1>Egg Chicken Red</h1>
            <p id="detail">4pcs, Price</p>
            <div className="amount">
              <button onClick={Decrease}><img id='minus' src={minus} alt="" /></button>
              <div className="number">{productCount}</div>
              <button onClick={Increase}><img id='plus' src={plus} alt="" /></button>
            </div>
          </div>
          <div className="box_last">
            <img onClick={Delete} id="remove" src={remove} alt="" />
            <p id="price">$1.99</p>
          </div>
        </div>
        
       
        <div className="box">
          <img id="banana" src={banana} alt="" />
          <div className="box_mid">
            <h1>Organic Bananas</h1>
            <p id="detail">12kg, Price</p>
            <div className="amount">
              <button onClick={Decrease}><img id='minus' src={minus} alt="" /></button>
              <div className="number">{productCount}</div>
              <button onClick={Increase}><img id='plus' src={plus} alt="" /></button>
            </div>
          </div>
          <div className="box_last">
            <img onClick={Delete} id="remove" src={remove} alt="" />
            <p id="price">$3.00</p>
          </div>
        </div>
        
        
        <div className="box">
          <img id="ginger" src={ginger} alt="" />
          <div className="box_mid">
            <h1>Ginger</h1>
            <p id="detail">250gm, Price</p>
            <div className="amount">
              <button onClick={Decrease}><img id='minus' src={minus} alt="" /></button>
              <div className="number">{productCount}</div>
              <button onClick={Increase}><img id='plus' src={plus} alt="" /></button>
            </div>
          </div>
          <div className="box_last">
            <img onClick={Delete} id="remove" src={remove} alt="" />
            <p id="price">$2.99</p>
          </div>
        </div>
        <button id="final_btn">Go to Checkout <p>$12.96</p></button>
      </div>
    </div>
  )
}

export default Cart

