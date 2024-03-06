import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo/logo.png";
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
    const { user, logoutUser } = useAuth()

    const HandelLogOut = () => {
        logoutUser()
    }

    const NavbarLinks = (
        <>
            <NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active underline text-blue-400" : ""
            }>
                <li><a>Home</a></li>
            </NavLink>
            <NavLink to='/news' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active underline text-blue-400" : ""
            }>
                <li><a>News</a></li>
            </NavLink>
            <NavLink to='/blog' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active underline text-blue-400" : ""
            }>
                <li><a>Blog</a></li>
            </NavLink>
            <NavLink to='/dashboard' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active underline text-blue-400" : ""
            }>
                <li><a>Dashboard</a></li>
            </NavLink>
            {
                user ? <button onClick={HandelLogOut}>Logout</button> : <NavLink to='/login' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active underline text-blue-400" : ""
                }>
                    <li><a>Login</a></li>
                </NavLink>
            }
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavbarLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img src={logo} className='w-20 rounded-md' alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavbarLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;
