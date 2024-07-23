import React, { useState } from 'react'
import { useFormik } from 'formik'
import { SignUpSchema } from '../Schemas/Schemas'
import Mediaicons from '../Media icons/Mediaicons'
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'


import './Contact.css'
const Contactform = () => {
  // settype of password
  const [type, settype] = useState('password')
  const [icon, seticon] = useState(eyeOff)


  const initialValues = {
    email: '',
    password: '',
  }


  const { handleChange, values, errors, touched, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpSchema,
    onSubmit: (values, action) => {

      action.resetForm()

    }

  })
  // handel eye toogle/password
  const handeleyetoggle = () => {
    if (type === 'password') {
      seticon(eye)
      settype('text')
    } else {
      seticon(eyeOff)
      settype('password')
    }
  }

  return (
    <form className='col-10 d-flex flex-column align-content-center gap-3 px-4 pt-4 mt-5 pb-3 ' onSubmit={handleSubmit} id='createauthform'>
      <h6 className=' text-orange'>Welcome Back</h6>
      <h2 className='text-start form-title'>Login In to Your Account</h2>
      <div className="did-floating-label-content input-group">
        <input className="did-floating-input" id="InputEmail" name='email' onChange={handleChange} value={values.email} type="email" />
        <label className="did-floating-label"> Email</label>
        {errors.email && touched.email ? (<p className='text-danger'>{errors.email}</p>) : null}
      </div>
      <div className="did-floating-label-content input-group" id='input-group-pass'>
        <input class="did-floating-input" id="InputPassword"
          type={type}
          name='password'
          value={values.password} onChange={handleChange}
        />
        <label className="did-floating-label">Password</label>
        {errors.password && touched.password ? <p className='text-danger'>{errors.password}</p> : null}
        <span className='Icon-span' onClick={handeleyetoggle} ><Icon icon={icon} size={21} /></span>



      </div>

      <div className="d-flex justify-content-between mb-1">
        <div className="d-flex  gap-2">
          <label class="checkbox">
            <input type="checkbox" class="checkbox__input" />
            <span className="checkbox__inner"></span>
          </label>
          <p className='mb-0'>Remember me</p>
        </div>
        <button className='Forget-password-btn text-orange'>Forget password ?</button>
      </div>
      <button className='text-capitalize py-2 px-5  countinu-btn text-white' type='submit'>Continue</button>
      <div className="d-flex flex-column mt-2">
        <p className="divider"> OR </p>
      </div>
      <Mediaicons />
      <div className="d-flex justify-content-center gap-1 align-items-baseline ">
        <p>New User?</p>
        <button className='Sign-up-btn text-orange text-uppercase'>Sign up here</button>
      </div>



    </form>

  )
}

export default Contactform