import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardDel } from '../Slice/cartdata';
import { shows } from '../Slice/cartShow';
const Cart = () => {
    const stateval = useSelector(state=>state.cartRed);
    const cart_data = useSelector(state=>state.cartData)
    
    const dispatch= useDispatch();
    const [show, setShow] = useState(stateval);
    useEffect(()=>{
        setShow(stateval)
    },[stateval])
    const close =()=>{
        setShow(!show);
        dispatch(shows())
    }
    useEffect(()=>{
       const allprocart = document.getElementsByClassName('allprocart')[0];
    allprocart.scrollTop=allprocart.scrollHeight; 
    })
    const deleteCard=(i)=>{
        dispatch(cardDel(i))
    }
    return (
        <div className="cart" style={{ width: show ? '500px' : '0px' }}>
            <div className="innercart" style={{ display: show ? 'block' : 'none' }}>
            <div className="close_cart">
                <button className="btn btn-dark " onClick={close}> X </button>
            </div>
            <div className="allprocart">
            {
                cart_data.map((val,i)=>{
                    return(
                        <div key={val.id} className="procart">
                    <img src={val.image} alt="" height='80%' />
                    <h5 className='text-dark'>{val.name}</h5>
                    <p className='text-black h6'>₹ {val.price}</p>
                    <div className='remove' onClick={()=>{ deleteCard(i) }}> <i className="fi fi-rr-trash"></i> </div>
                </div>
                    )
                })
            }
                
            </div>
                
            </div>
        </div>
    );
}

export default Cart;
