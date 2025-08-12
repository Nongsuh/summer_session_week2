import React,{useState} from 'react'
import close from '../assets/img/filters/close.svg'
import check from '../assets/img/filters/check.png'
import { useNavigate } from 'react-router-dom'
const Filters = () => {
   const navigate=useNavigate();
   const Close=()=>{
    navigate('/beverages');
   }
    return (
        <div className='filter container'>
            <header>
                <img onClick={Close} src={close} alt="" />
                <h1>Filters</h1>
            </header>
            <main>
                <div className="content">
                    <h1>Categories</h1>
                    <label><input type="checkbox" name="category" value="eggs" /><span id='box'></span>Eggs</label>
                    <label><input type="checkbox" name="category" value="Noodles & Pasta" /><span id='box'></span>Noodles & Pasta</label>
                    <label><input type="checkbox" name="category" value="Chips & Crisps" /><span id='box'></span>Chips & Crisps</label>
                    <label><input type="checkbox" name="category" value="Fast Food" /><span id='box'></span>Fast Food</label>
                </div>
                <div className="content">
                    <h1>Categories</h1>
                    <label><input type="checkbox" name="brand" value="Individual Callection" /><span id='box'></span>Individual Callection</label>
                    <label><input type="checkbox" name="brand" value="Cocola" /><span id='box'></span>Cocola</label>
                    <label><input type="checkbox" name="brand" value="Ifad" /><span id='box'></span>Ifad</label>
                    <label><input type="checkbox" name="brand" value="Kazi Farmas" /><span id='box'></span>Kazi Farmas</label>
                </div>
            </main>
            <button onClick={Close}>Apply Filter</button>
        </div>
    )
}

export default Filters
