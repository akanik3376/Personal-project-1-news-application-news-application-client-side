import React from 'react';
import { IoMdNotifications } from "react-icons/io";
import { RiMenuAddLine } from "react-icons/ri";

const DashboardHeader = () => {
    return (
        <div className="navbar bg-base-100 border-b-2">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl font-semibold">News 24/7</a>
            </div>
            <div className="flex-none gap-2">
                <div>
                    <li className='text-black text-2xl hidden md:block mr-6'> <a><IoMdNotifications /></a></li>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li className='text-black text-2xl block md:hidden'> <a><IoMdNotifications /></a></li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;
