import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Style.css'

const Mediaicons = () => {
  return (
    <>
      <div className="media-options">
        <div className=' field-facebook py-3 row'>
          <div className="col-4">
            <FacebookIcon
              className='text-primary facebook-icon'
            />
          </div>
          <div className="col">
            <span className='text-dark text-center ps-2'>Login with Facebook</span>
          </div>
        </div>
      </div>
      <div className="media-options">
        <div className=' row field-google py-3  mt-3 '>
          <div className="col-4">
            <GoogleIcon
              className='google-icon'
            />
          </div>
          <div className="col">
            <span className='text-dark ps-2'>Login with Google</span>
          </div>

        </div>
      </div>


      <div className="media-options">
        <div className='row field-apple py-3  mt-3'>
          <div className="d-flex col-4">
            <AppleIcon
              className=' Apple-icon'
            />
          </div>
          <div className="col">
            <span className='text-dark ps-2'>Login with Apple</span>
          </div>

        </div>
      </div>
    </>
  )
}

export default Mediaicons