import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartFun } from '../Slice/cartdata';

const PizzaCard = (props) => {
    
    const [emo, setEmo] = useState(['😍', '🔥', '⭐', '😋', '💖', '😊']);
    const [hide, setHide] = useState(true)
    const dispatch= useDispatch();
    // useEffect
    useEffect(() => {
        setEmo([...emo,props.mood])
    }, []);
    // set emoji function
    const emofun = (v, i) => {
        const arr = [...emo];
        arr.splice(i, 1);
        arr.push(v);
        setEmo(arr);
    }
    document.addEventListener('click', (e) => {
        if (e.target.classList[0] !== 'emo') {
            setHide(true)
        }
    })
    const shows = () => {
        setHide(false)
    }
    const addcart=(data)=>{
        console.log('called')
        dispatch(cartFun(data))
    }
   
    return (
        <div className='pizzaCard'>
            <div className="emoji">

                <div className='allemo' id='allemo' style={{ display: hide ? 'none' : 'flex' }}>
                    {
                        emo.map((v, i) => {
                            if (emo.length - 1 > i) return <span className='emo' key={i} onClick={() => { emofun(v, i) }} > {v}</span>
                        })
                    }
                </div>

                <div className='curremo' id="curremo">
                    <span className='emo curr' onClick={shows} > {emo[emo.length - 1]}</span>
                </div>
            </div>

            <img src={props.image} alt="" />

            <h3 className='title'>{props.name}</h3>
            <div className='d-flex justify-content-between w-100 cont'>
                <h5> ₹ {props.price}</h5>
                <button className="btn " onClick={()=>addcart(props)}  >
                    Add to cart
                </button>
            </div>

            <div className="design"></div>
        </div>
    );
}

export default PizzaCard;
