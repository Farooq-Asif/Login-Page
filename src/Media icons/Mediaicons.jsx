import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FcGoogle } from "react-icons/fc";
import './Style.css'

const Mediaicons = () => {
  return (
    <>
      <div className="row media-icons mx-2">
        <div className="row">
          <button id='google-btn' className='btns'>
            <div className="col-2">
              <FcGoogle
                className='google-icon'
              />
            </div>
            <span className='text-dark ps-2 btn-text fw-1'>Log In with Google</span>
          </button>
        </div>
      
        <div className="row">
          <button id='fb-btn' className='btns'>
            <div className="col-2">
              <FacebookIcon
                className='fb-icon'
              />
            </div>
            <span className='text-dark ps-2 btn-text'>Log In with Facebook</span>
          </button>
        </div>
      
        <div className="row">
          <button id='apple-btn' className='btns'>
            <div className="col-2">
              <AppleIcon
                className='Apple-icon'
              />
            </div>
            <span className='text-dark ps-2 btn-text'>Log In with Apple</span>
          </button>
        </div>

        </div>
    </>
  )
}

export default Mediaicons