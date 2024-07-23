import React from 'react'
import { useFormik } from 'formik'
import { SignUpSchema } from '../Schemas/Schemas'
import Mediaicons from '../Media icons/Mediaicons'


const Contactform = () => {

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
  return (
    <form className='col-10 d-flex flex-column align-content-center gap-3 px-4 pt-4 mt-5 ' onSubmit={handleSubmit} id='createauthform'>
      <h6 className=' text-orange'>Welcome Back</h6>
      <h2 className='text-start'>Login to Your Account</h2>
      <div class="input-area">
        <label for="exampleInputEmail1" className="form-label"> Enter Your Email</label>
        <input type="email" className="form-control px-3 py-3" id="InputEmail" aria-describedby="emailHelp" name='email' onChange={handleChange} value={values.email} />

        {errors.email && touched.email ? (<p className='text-danger'>{errors.email}</p>) : null}
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" className="" >Enter Your Password</label>
        <input type="password" className="form-control px-3 py-3" id="InputPassword" name='password' value={values.password} onChange={handleChange} />
        {errors.password && touched.password ? <p className='text-danger'>{errors.password}</p> : null}
      </div>
      <div className="d-flex justify-content-between mb-1">
        <div className="d-flex  gap-2">
          <label class="checkbox">
            <input type="checkbox" class="checkbox__input" />
            <span class="checkbox__inner"></span>
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


      <div className="d-flex justify-content-center gap-2 align-items-baseline ">
        <p>New User ?</p>
        <button className=' text-capitalize Sign-up-btn text-orange'>Sign up here</button>
      </div>



    </form>

  )
}

export default Contactform