import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle, } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const LoginWithSocial = () => {
    return (
        <div className='mt-4'>
            <h1 className="text-2xl text-center font-semibold">Login With</h1>
            <div className='flex flex-col md:flex-row justify-around w-2/3 mx-auto font-semibold text-white text-xl'>
                <button className="border-2 flex items-center mt-4 px-4 gap-2 btn btn-outline">
                    Google<FcGoogle />
                </button>
                <button className="border-2 flex items-center mt-4 px-4 gap-2 btn btn-outline">
                    Facebook <FaFacebook />
                </button>

            </div>

        </div>
    );
};

export default LoginWithSocial;