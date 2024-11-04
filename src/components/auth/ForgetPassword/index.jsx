import React from 'react'
import './ForgetPassword.css'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ForgetPasswordSchema } from '../../../schema/ForgetPasswordSchema'

const Forgotpassword = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(ForgetPasswordSchema),
      })
    return (
        <div className='Forgotpasswordmain'>
            <div className='ForgotpasswordWrap'>
                <form className='Forgotpasswordcontainer' onSubmit={handleSubmit(onsubmit)}>
                    <h2>Forgot your password?</h2>
                    <p>Enter your email address associated with your ezyPay <br /> account
                        and we'll send you a link to rest your password.
                    </p>
                    <div className='ForgotpasswordDiv'>
                        <label>Email Address</label>
                        <input  placeholder='Email' className='ForgotpasswordDivIn' {...register("email")}/>
                        <p className='ForgotpasswordError'>{errors?.email?.message}</p>
                    </div>
                    <button type='submit' className='ForgotpasswordBut'>Reset password</button>
                    <span className='ForgotpasswordReturnLogin' onClick={() => navigate('/')}>Return to login</span>
                </form>
            </div>
        </div>
    )
}

export default Forgotpassword