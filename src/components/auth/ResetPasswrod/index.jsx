import React from 'react'
import './ResetPassword.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ResetPasswordSchema } from '../../../schema/ResetPassword'
const ResetPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(ResetPasswordSchema),
      })
      const onsubmit = (data) => console.log(data)
    return (
        <div>
            <div className='Resetpasswordmain'>
                <div className='ResetpasswordWrap'>
                    <form className='Resetpasswordcontainer' onSubmit={handleSubmit(onsubmit)}>
                        <h2>Reset your password?</h2>
                        <p>Enter your new password below</p>
                        <div className='ResetPasswordInputWrap'>
                            <div className='ResetpasswordDiv'>
                                <label>Password</label>
                                <input  placeholder='Password' className='ResetpasswordDivIn' {...register("password")}/>
                                <p className='ResetPasswordError'>{errors?.password?.message}</p>
                            </div>
                            <div className='ResetpasswordDiv'>
                                <label>Confirm Password</label>
                                <input  placeholder='Confirm Password' className='ResetpasswordDivIn' {...register("confirmPassword")}/>
                                <p className='ResetPasswordError'>{errors?.confirmPassword?.message}</p>
                            </div>
                        </div>
                        <button type='submit' className='ResetpasswordBut'>Reset password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword