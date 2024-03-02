import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo/logo.png";
import Container from '../Container/Container';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            <NavLink to='/login' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active underline text-blue-400" : ""
            }>
                <li><a>Login</a></li>
            </NavLink>
        </>
    );

    return (
        <div>
            <div className={`fixed w-full z-20 ${isScrolled ? 'bg-white bg-opacity-5 backdrop-blur-md' : 'bg-blue-100'}`}>
                <Container>
                    <div className="navbar">
                        <div className="navbar-start">
                            <div onClick={() => setOpen(!open)} className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                {open && <ul tabIndex={0} className="menu menu-sm dropdown-content hover:border-b-2 hover:border-red-400 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {NavbarLinks}
                                </ul>}
                            </div>
                            <Link to='/'><img className='w-16 md:w-24 h-8 md:h-12 rounded-md' src={logo} alt="" /></Link>
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
                </Container>
            </div>
            {/* Empty div to maintain space for the fixed navbar */}
            <div className={`h-${isScrolled ? '16' : '0'} transition-all`}></div>
        </div>
    );
};

export default Navbar;
