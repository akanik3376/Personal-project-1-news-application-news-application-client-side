import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import LoginWithSocial from '../Shared/LoginWithSocial';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';

const Register = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser } = useAuth()
    const handleCheckboxChange = () => {
        setIsShowPassword(!isShowPassword);
    };

    const onSubmit = (data) => {
        const email = data?.email
        const password = data?.password

        //create user hare
        createUser(email, password)
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

        reset();
    };

    return (
        <div className="bg-slate-100">
            <h1 className="text-4xl text-center font-semibold pt-5 text-indigo-700">Please SignUp!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-1/2 mx-auto p-6 rounded-md shadow-md">
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
                    <input
                        {...register("firstName", { required: 'First Name is required' })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter your first name"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
                    <input
                        {...register("lastName", { required: 'Last Name is required' })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter your last name"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
                    <select
                        {...register("gender", { required: 'Gender is required' })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Select Gender"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Image:</label>
                    <input
                        type="file"
                        {...register("image")}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Birthdate:</label>
                    <input
                        type="date"
                        {...register("birthdate", { required: 'Birthdate is required' })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Select your birthdate"
                    />
                    {errors.birthdate && <p className="text-red-500 text-sm mt-1">{errors.birthdate.message}</p>}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                    <input
                        type="email"
                        {...register("email", { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                    <input
                        type={isShowPassword ? "text" : "password"}
                        {...register("password", { required: 'Password is required' })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter your password"
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isShowPassword}
                            onChange={handleCheckboxChange}
                            className='mr-1'
                        />
                        Show Password
                    </label>
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 w-full">
                    SignUp
                </button>
            </form>

            <LoginWithSocial />
            <p className='text-center mt-5 pb-10 text-xl'>Already Have an account? please <Link to='/login'><span className='text-purple-700 border-b-2 border-purple-700'>Login</span></Link></p>
        </div>
    );
};

export default Register;
