import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useAuth } from '../context/AuthProvider'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function Signup() {

    const [authUser,setAuthUser] = useAuth()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    // Watch the password field
    const password = watch("Password", "")

    const validatePasswordMatch = (value) => {
        return value === password || "Passwords do not match"
    }

    const onSubmit = async (data) => {
        const userInfo ={
            fullname :data.Fullname,
            email : data.Email,
            password : data.Password,
            confirmPassword : data.ConfirmPassword,
        }
        await axios.post("/api/user/signup", userInfo)
        .then((res)=> {
                    console.log(res.data)
                    toast.success("User create successfully")
                    localStorage.setItem("ChatApp",JSON.stringify(res.data))
                    setAuthUser(res.data)
                })
             .catch((err)=>{
                    console.log(err)
                    toast.error("Error" + " " + err.response.data.error)
                })
    }

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='border border-white px-6 py-2 rounded-md space-y-3 w-96'>
                    <h1 className='text-2xl text-center'>Chat <span className='text-green-500 font-semibold'>App</span></h1>
                    <h2 className='text-xl text-white font-bold pb-6'>Signup</h2>

                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Fullname" {...register("Fullname", { required: true })} />
                    </label>
                    {errors.Fullname && <span className="text-red-500 text-sm font-semibold">This field is required</span>}

                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Email" {...register("Email", { required: true })} />
                    </label>
                    {errors.Email && <span className="text-red-500 text-sm font-semibold">This field is required</span>}

                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                            <path fillRule="evenodd" d="M14 6a4 4 0 1 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                        </svg>
                        <input type="password" className="grow" placeholder="Password" {...register("Password", { required: true })} />
                    </label>
                    {errors.Password && <span className="text-red-500 text-sm font-semibold">This field is required</span>}

                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                            <path fillRule="evenodd" d="M14 6a4 4 0 1 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                        </svg>
                        <input type="password" className="grow" placeholder="Confirm Password" {...register("ConfirmPassword", { required: true, validate: validatePasswordMatch })} />
                    </label>
                    {errors.ConfirmPassword && <span className="text-red-500 text-sm font-semibold">{errors.ConfirmPassword.message}</span>}

                    <div className='flex justify-between'>

                        <p>Have an account? 
                            <span className='text-blue-500 underline cursor-pointer ml-1'>
                            <Link to="/login">Login</Link>
                            </span>
                        </p>

                        <input type="submit" value="Signup" className='bg-green-500 text-white px-2 py-1 cursor-pointer rounded-lg' />
                    </div>
                </form>
            </div>
        </>
    )
}
