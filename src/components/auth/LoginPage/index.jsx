import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema } from '../../../schema/LoginSchema'
import { FaMoon } from 'react-icons/fa'
// import { FaSun } from 'react-icons/fa'
const Login = (theme,setTheme) => {


    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(LoginSchema),
      })
      const onSubmit = (data) => console.log(data)
    return (
        <div className='Loginmain'>
            <div className='LoginWrap'>
                <div className='LoginCover'>
                    <div className='LoginLeftDiv'>
                        <img src="/login.svg" alt="" />
                    </div>
                    <form className='LoginRightDiv' onSubmit={handleSubmit(onSubmit)}>
                        <h1>Welcome Back to ezyPay</h1>
                        <div className='LoginRightDivd1'>
                            <label>Enter Your Email</label>
                            <input type='text' placeholder='Email' className='LoginIn' {...register("email")} />
                            <p className='LoginError'>{errors?.email?.message}</p>
                        </div>
                        <div className='LoginRightDivd1'>
                            <label>Enter Your password</label>
                            <input type='text' placeholder='Password' className='LoginIn' {...register("password")}/>
                            <p className='LoginError'>{errors?.password?.message}</p>
                        </div>
                        <button type='submit' className='LoginBut'>LOG IN</button>
                        <span className='LoginCreateAccount'>
                            <p>Don't have account?</p>
                            <p className='LoginCreateAccountAction' onClick={()=> navigate('/create-account')}>Create account</p>
                        </span>
                        <p className='LoginForgotPassword' onClick={() => navigate('/Forgotpassword')}> Forgot your password</p>
                       <FaMoon className='LoginMoon'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login