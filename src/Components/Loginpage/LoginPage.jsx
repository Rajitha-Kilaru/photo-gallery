import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../Styles/LoginPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { loginDetails } from '../Actions/actions'

function LoginPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector((state) => state.reducers)
    const [loginData, setLoginDetails] = useState({ email: "", password: "" })
    const [emailError, setEmailError] = useState()
    const [pswdError, setPswdError] = useState()
    const [accError, setAccError] = useState('')
    const [show, setShow] = useState(false)
    const [showpassword, setShowPassword] = useState()
    
    const handleLoginData = (e) => {
        setLoginDetails({ ...loginData, [e.target.name]: e.target.value })
    }

    const handleDataOnBlur = () => {
        if (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
            loginData.email)) {
            setEmailError('')
        } else {
            setEmailError('Please enter valid email')
        }
        if (new RegExp(
            '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
        ).test(loginData.password)) {
            setPswdError('')
        } else {
            setPswdError("Please enter valid password")
        }
    }

    const handleNextPage = () => {
        const userData = JSON.parse(localStorage.getItem("details"))?.filter((val) => (val.email === loginData.email) && (val.password === loginData.password))
        if (userData.length) {
            dispatch(loginDetails(loginData))
            navigate('/galleryScreen')
            setShow(false)
        } else {
            setShow(true)
            setAccError("The email or password that you've entered doesn't belong to an account and try again")
        }
    }

    const showpswd = (e) => {
        setShowPassword(e.target.checked)
    }

    return (
        <div className='login'>
            <h1>Login</h1>
            <label className='emailLabel' htmlFor='email'> Email: {" "}
            </label>
            <input type='email' id='email' placeholder="Enter your Email" value={loginData.email} name="email" onChange={(e) => handleLoginData(e)} onBlur={handleDataOnBlur} />
            <p className='errormsg'>{emailError}</p>
            <label className='pswdLabel' htmlFor='pswd'> Password: {" "}
            </label>
            <input type={showpassword ? 'text' : 'password'} name="password" id='pswd' placeholder="Enter your password" value={loginData.password} onChange={(e) => handleLoginData(e)} onBlur={handleDataOnBlur} />
            <p className='errormsg'>{pswdError}</p>
            <div className='checkbox'>
                <label htmlFor='checkbox' >
                    <input type='checkbox' name='checkbox' id='checkbox' onChange={(e) => showpswd(e)} /> show password
                </label>
            </div>
            <Link className='forgetPswd' to='/forgetPswd'>Forget Password?</Link>
            <div className='footerCard'>
                <button className='backbtn' onClick={() => navigate(-1)}>Back</button>
                <button className='nextLink' onClick={() => handleNextPage()}>Next
                </button>
            </div>
            {show && <div>
                <p className='accerrormsg'>{accError}</p>
                <p className='accPara'>Don't have an account?<span className='accLink'><Link to='/register'>Register</Link></span></p>
            </div>
            }
        </div>
    );
}
export default LoginPage