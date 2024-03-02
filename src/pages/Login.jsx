import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from '../components/Container/Container';
import LoginWithSocial from '../Shared/LoginWithSocial';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { LoginUser, googleLogin } = useAuth()
    const handleCheckboxChange = () => {
        setIsShowPassword(!isShowPassword);
    };

    const onSubmit = (data) => {
        const email = data?.email
        const password = data?.password

        //create user hare
        LoginUser(email, password)
            .then(res => {
                if (res) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Successful!',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }

            })
            .catch(err => {
                if (err) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed',
                        text: 'Invalid email or password',
                    });
                }
            })
        reset()
    };

    return (
        <Container>
            <div className='bg-slate-100'>
                <h1 className="text-4xl text-center font-semibold pt-5 text-indigo-700">Please SignIn!</h1>
                <div className="flex flex-col lg:flex-row justify-center w-full md:w-1/2 pt-10 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto p-6 rounded-md shadow-md w-full">
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                            <input
                                {...register("email", { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                            <input
                                {...register("password", { required: 'Password is required' })}
                                type={isShowPassword ? "text" : "password"}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Enter your password"
                            />
                            <label>
                                <input
                                    type="checkbox"
                                    checked={isShowPassword}
                                    onChange={handleCheckboxChange}
                                    name="showPassword" // Added name attribute
                                    className='mr-1'
                                />
                                Show Password
                            </label>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 font-semibold w-full">
                            Login
                        </button>
                    </form>
                </div>
                <LoginWithSocial />
                <p className='text-center mt-5 pb-10 text-xl'>Don't Have an account? please <Link to='/register'><span className='text-purple-700 border-b-2 border-purple-700'>SignUp</span></Link></p>
            </div>
        </Container>
    );
};

export default Login;
