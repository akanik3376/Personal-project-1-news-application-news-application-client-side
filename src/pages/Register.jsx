import React from 'react';
import { useForm } from 'react-hook-form';
import LoginWithSocial from '../Shared/LoginWithSocial';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        // Handle your form submission here
        console.log(data);
        reset()
    };

    return (


        <div className="bg-slate-100 ">
            <h1 className="text-4xl text-center font-semibold pt-5  text-indigo-700">Please SingUp!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-1/2 mx-auto  p-6  rounded-md shadow-md">
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
                    <input
                        {...register("firstName", { required: 'First Name is required' })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
                    <input
                        {...register("lastName", { required: 'Last Name is required' })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
                    <select
                        {...register("gender", { required: 'Gender is required' })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
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
                    />
                    {errors.birthdate && <p className="text-red-500 text-sm mt-1">{errors.birthdate.message}</p>}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                    <input
                        type="email"
                        {...register("email", { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                    <input
                        type="password"
                        {...register("password", { required: 'Password is required' })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 w-full">
                    SingUp
                </button>
            </form>

            <LoginWithSocial />
            <p className='text-center mt-5 pb-10 text-xl'>Already Have an account? please <Link to='/login'><span className='text-purple-700  border-b-2 border-purple-700'>Login</span></Link></p>
        </div>


    );
};

export default Register;
