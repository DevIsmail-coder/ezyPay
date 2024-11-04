import React from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { SignUpSchema } from '../../../schema/SignupSchema'


const CreateAccount = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  })
  const onSubmit = (data) => console.log(data)
  return (
    <div className='Signupmain'>
      <div className='SignupWrap'>
        <div className='SignupCover'>
          <div className='SignupLeftDiv'>
            <img src="/create-account.svg" alt="" />
          </div>
          <form className='SignupRightDiv' onSubmit={handleSubmit(onSubmit)} >
            <h1 className='SignupBold'> Create your ezyPay account</h1>
            <div className='SignupRightDivd1'>
              <p> Business Name</p>
              <input placeholder='Business Name:' className='SignupIn' {...register("business_name")} />
              <p className='SignupError'>{errors?.business_name?.message}</p>
            </div>
            <div className='SignupRightDivd2'>
              <div className='SignupRightDivdd2'>
                <p> Email</p>
                <input placeholder='Email:' className='SignupIn1' {...register("email")} />
                <p className='SignupError'>{errors?.email?.message}</p>
              </div>
              <div className='SignupRightDivdd2'>
                <p> Password</p>
                <input placeholder='Password:' className='SignupIn1' {...register("password")}/>
                <p className='SignupError'>{errors?.password?.message}</p>
              </div>
            </div>
            <div className='SignupRightDivd2'>
              <div className='SignupRightDivdd2'>
                <p> Phone Number</p>
                <input  placeholder='Phone Number:' className='SignupIn1' {...register("PhoneNumber")}/>
                <p className='SignupError'>{errors?.PhoneNumber?.message}</p>
              </div>
              <div className='SignupRightDivdd2'>
                <p> Business Address</p>
                <input placeholder='Business Address:' className='SignupIn1' {...register("business_address")}/>
                <p className='SignupError'>{errors?.business_address?.message}</p>
              </div>
            </div>
            <button type='submit' className='Signupbut'>Create account</button>
            <span className='LoginCreateAccount'>
              <p>Already have account?</p>
              <p className='LoginCreateAccountAction' onClick={() => navigate('/')}>Please Login</p>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount