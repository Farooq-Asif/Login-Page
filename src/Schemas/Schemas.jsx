import * as Yup from 'yup'

export const SignUpSchema=Yup.object({
email:Yup.string().email().required('Please Enter Your Email'),
password:Yup.string().min(6).required('Enter your Password')
})