import React from 'react'
import { NavLink } from 'react-router-dom'
import "./LeftSidebar.css";
import globe from '../../assets/globe.png'


const LeftSidebar = () => {
    return (
        <div className='left-sidebar-container'>
            <nav className='side-nav'>
                <NavLink to='/' className='side-nav-link' activeClassName='active'>
                    <div><p>Home</p></div>
                </NavLink>
                <div style={{marginLeft:"10px"}}><p>PUBLIC</p></div>
                <div className='side-nav-div'>

                    <NavLink to='/Questions' className='side-nav-link' activeClassName='active'>
                        <img src={globe} width="15px" alt='Questions' />
                        <div><p>Questions</p></div>
                    </NavLink>
                    <NavLink to='/Tags' className='side-nav-link' activeClassName='active'>
                        <div><p>Tags</p></div>
                    </NavLink>
                    <NavLink to='/Users' className='side-nav-link' activeClassName='active'>
                        <div><p>Users</p></div>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default LeftSidebar
