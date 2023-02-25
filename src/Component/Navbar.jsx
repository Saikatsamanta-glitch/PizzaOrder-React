import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const active = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "42px",
    width: "42px",
    borderRadius: "50%",
    background: '#FFA500'
}


const NavBar = () => {
    
    return (
        <div className='navBar'>
            <div className="icongroup">

                <NavLink to='/' style={({ isActive }) => isActive ? active : undefined
                } className="icon" data-toggle="tooltip" data-bs-placement="right" title="Home " >
                    <i className="fi fi-rs-home"></i>
                </NavLink>

                <NavLink to='/message' style={({ isActive }) => isActive ? active : undefined
                } className="icon" data-toggle="tooltip" data-placement="right" title="Messege us">
                    <i className="fi fi-rr-paper-plane"></i>
                </NavLink>

                <NavLink to='/wallet' style={({ isActive }) => isActive ? active : undefined
                } className="icon" data-toggle="tooltip" data-placement="right" title="Wallet" >
                    <i className="fi fi-rr-credit-card"></i>
                </NavLink>

                <NavLink to='/fav' style={({ isActive }) =>isActive ? active : undefined
                } className="icon" data-toggle="tooltip" data-placement="right" title="Favorite" >
                    <i className="fi fi-rr-heart"></i>
                </NavLink>

                <NavLink to='/history' style={({ isActive }) =>isActive ? active : undefined
                } className="icon" data-toggle="tooltip" data-placement="right" title="History" >
                    <i className="fi fi-rr-comment-alt"></i>
                </NavLink>

                <NavLink to='/setings' style={({ isActive }) =>isActive ? active : undefined
                } className="icon" data-toggle="tooltip" data-placement="right" title="Account settings" >
                    <i className="fi fi-rr-settings"></i>
                </NavLink>

            </div>

            <div className="icon" data-toggle="tooltip" data-placement="right" title="Logout">
                <i className="fi fi-rr-exit"></i>
            </div>

        </div>
    );
}

export default NavBar;
