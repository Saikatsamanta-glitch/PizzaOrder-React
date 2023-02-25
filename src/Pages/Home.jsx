import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import PizzaCard from '../Component/pizzaCard';
import { shows } from '../Slice/cartShow';
import pizzadata from '../data';

export default function Home() {
  const arremoji = ['😍', '🔥', '⭐', '😋', '💖','😊',];
  const randno = parseInt(Math.random() * (6));
  const emoji = arremoji[randno];
  const cart_Data = useSelector(state=>state.cartData)
    console.log(cart_Data)
  const dispatch=useDispatch();
  const show =()=>{
    dispatch(shows())
  }

  return (
    <div className='home'>
        <div className="topsec">
          <h2 className='heading'>Today's Pizza Mood<span> {emoji} </span> </h2>

          <div className='right_side'>
          <button className="btn btn-dark w-25" onClick={show}  ><i class="fi fi-rr-shopping-cart"> {cart_Data.length} </i></button>
             
            <div className="search">
            <input type="text" placeholder='Search your Pizza 🍕' />
            <i className="fi fi-rr-search"></i>
          </div>
          </div>
    

          
        </div>

        <div className="hero"> 
          <div className="info">
            <h1 > Welcome Offer 50% discount </h1>
          </div>
        </div>

      <div className="pizzas ">
        <h2> Our Pizza's 🍕 </h2>
        <div className="pizzacontainer">
          {
            pizzadata.map((val)=>{
              return <PizzaCard key={val.id} name={val.pizzaname} price={val.price} image={val.image} mood={val.mood} />
            })
          }
        </div>
      </div>
    </div>
  )
}
