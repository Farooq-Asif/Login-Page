import React from 'react'
import trippy from '../Images/6576c04b6829c5f9a07e38534548885a.png'
import Contactform from './Contactform'
const LoginAuth = () => {

    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 mt-5 ">
                    <div className="col d-flex flex-column mt-5 flex-wrap align-items-center align-items-lg-start">
                        <div className="pt-5 mt-5 tripyy-section ">
                            <img src={trippy} alt="" className='img-fluid tripyy-img' />
                            <div className="tripyy-body py-4">
                                <h5 className='text-white fs-1 fw-bold'>Building The Feature...</h5>
                                <p className='text-white mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>


                    </div>
                    <div className="col mb-4 d-flex justify-content-center">
                        <Contactform />

                    </div>
                </div>

            </div>


        </>

    )
}

export default LoginAuth