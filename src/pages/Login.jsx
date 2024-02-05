import React from 'react';
import { useForm } from 'react-hook-form';
import Container from '../components/Container/Container';
import image from "../assets/images/login-image.png"
import LoginWithSocial from '../Shared/LoginWithSocial';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Handle your form submission here
        console.log(data);
    };

    return (

        <Container>

            <div className="flex flex-col lg:flex-row justify-between  mt-6 lg:mt-20">
                <div className='w-full md:w-1/2'>
                    <img src={image} className='w-full' alt="" />
                </div>
                <div className='w-full md:w-1/2'>
                    <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto p-6 bg-white rounded-md shadow-md  w-full">
                        <div className="mb-6" >
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                            <input
                                {...register("email", { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                            <input
                                {...register("password", { required: 'Password is required' })}
                                type="password"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 font-semibold">
                            Login
                        </button>
                    </form>
                    <LoginWithSocial></LoginWithSocial>
                </div>
            </div>

        </Container>

    );
};

export default Login;
