import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../Styles/RegisterPage.css'
import { useDispatch } from 'react-redux'
import { registrationData } from '../Actions/actions'

function RegisterPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [registerData, setRegisterData] = useState({ firstName: "", lastName: '', gender: '', qualification: '', occupation: '', dob: '', age: '', email: '', password: '', address: '' })
    const [registerError, setRegisterError] = useState({ fnameError: "", lnameError: "", genderError: "", qualifError: "", occupError: '', dobError: "", addError: "", emailError: "", pswdError: "" })
    const months = new Date().getMonth() - new Date(registerData?.dob).getMonth()
    let years = new Date().getFullYear() - new Date(registerData?.dob).getFullYear()
    const age = months < 0 || months === 0 || new Date().getDate() < new Date(registerData?.dob).getDate() ? years-- : years
    useEffect(() => {
        setRegisterData({ ...registerData, age: age })
    }, [registerData, age])
    const handleRegisterData = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value })
    }
    const handleBlurEvent = (e) => {
        console.log("30==", e.target)
        if (registerData.firstName.length && !(registerData.firstName.length > 3 && new RegExp(/^[A-Z]*$/).test(registerData.firstName))) {
            setRegisterError({...registerError, fnameError: 'Please enter valid fname in uppercase'})
        } else {
            setRegisterError({...registerError, fnameError: ''})
        }
        if (registerData.lastName.length && !(registerData.lastName.length > 3 && new RegExp(/^[A-Z]*$/).test(registerData.lastName))) {
            setRegisterError({...registerError, lnameError: 'Please enter valid lname in uppercase'})

        } else {
            setRegisterError({...registerError, lnameError: ''})
        }
        if (!registerData.gender) {
            setRegisterError({...registerError, genderError: 'Please select a item'})

        } else {
            setRegisterError({...registerError, genderError: ''})
        }
        if (!registerData.qualification) {
            setRegisterError({...registerError, qualifError: 'Please select qualification'})
        } else {
            setRegisterError({...registerError, qualifError: ''})
        }
        if (registerData.occupation.length && !(registerData.occupation.length > 3 && new RegExp(/^[A-Z]*$/).test(registerData.occupation))) {
            setRegisterError({...registerError, occupError: 'Please enter valid occupation'})
        } else {
            setRegisterError({...registerError, occupError: ''})
        }
        if (!registerData.dob) {
            setRegisterError({...registerError, dobError: 'please select your dob'})
        } else {
            setRegisterError({...registerError, dobError: ''})
        }
        if (registerData.address.length && !(registerData.address.length > 3 && new RegExp(/^[A-Z]*$/).test(registerData.address))) {
            setRegisterError({...registerError, addError: 'Please enter valid address'})
        } else {
            setRegisterError({...registerError, addError: ''})
        }
        if (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
            registerData.email)) {
            setRegisterError({...registerError, emailError: ''})
        } else {
            setRegisterError({...registerError, emailError: 'Please enter valid email'})
        }
        if (new RegExp(
            '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
        ).test(registerData.password)) {
            setRegisterError({...registerError, pswdError: ''})
        } else {
            setRegisterError({...registerError, pswdError: 'Please enter valid password'})
        }
    }

    const registerNextScreen = () => {
        dispatch(registrationData(registerData))
        if (registerData.email) {
            navigate('/loginPage')
        }

        var get = JSON.parse(localStorage.getItem('details') || "[]");
        get.push(registerData);
        localStorage.setItem('details', JSON.stringify(get));
    }

    return (
        <div>
            <h1 className='formHeader'>Registration Form</h1>
            <div className='registerform'>
                <label htmlFor='firstName' className='regText'>First Name:</label> {" "}
                <input type="text" placeholder="FirstName" name='firstName' id="firstName" value={registerData.firstName} onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} />
                <p className='regErrText'>{registerError.fnameError}</p>

                <label htmlFor='lastName' className='regText'>Last Name:</label>{" "}
                <input type="text" placeholder="LastName" name='lastName' id="lastName" value={registerData.lastName} onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} />
                <p className='regErrText'>{registerError.lnameError}</p>

                <label className='gender regText' htmlFor='gender'>Gender:</label>
                <input type="radio" name="gender" value="male" onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} /> MALE
                <input type="radio" name="gender" value="female" onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} /> FEMALE
                <input type="radio" name="gender" value="other" onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} /> OTHER
                <p className='regErrText'>{registerError.genderError}</p>

                <label htmlFor='qualif' className="qualification regText">Qualification:</label>
                <select name='qualification' id='qualif' value={registerData.qualification} onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent}>
                    <option select default hidden>select one</option>
                    <option value='SSC'>SSC</option>
                    <option value='Intermediate'>Intermediate</option>
                    <option value='Diploma'>Diploma</option>
                    <option value='Degree'>Degree</option>
                    <option value='Btech'>Btech</option>
                    <option value='MBA'>MBA</option>
                    <option value='MCA'>MCA</option>
                    <option value='Bpharmacy'>Bpharmacy</option>
                </select>
                <p className='regErrText'>{registerError.qualifError}</p>

                <label htmlFor='occupation' className='occupation regText'>Occupation:</label> {" "}
                <input type="text" name="occupation" id="occupation" placeholder="Occupation" value={registerData.occupation} onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} />
                <p className='regErrText'>{registerError.occupError}</p>

                <label htmlFor='dob' className='dob regText'>Date of birth:</label>
                <input type="date" name='dob' id='dob' value={registerData.dob} onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} />
                <p className='regErrText'>{registerError.dobError}</p>
                <p>
                    {registerData.dob && <> <label htmlFor='age' className='regText age'>Age:
                    </label>
                        <input type='text' readOnly name="age" id="age" value={`${age} years`} />
                    </>
                    }
                </p>
                <label htmlFor='email' className='email regText'>Email:</label>
                <input type="email" name='email' id='email' placeholder='Email' value={registerData.email} onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} />
                <p className='regErrText'>{registerError.emailError}</p>

                <label htmlFor='pswd' className='pswd regText'>Password:</label>
                <input type="password" name='password' id='pswd' placeholder='Password' value={registerData.password} onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} />
                <p className='regErrText'>{registerError.pswdError}</p>

                <label htmlFor='address' className='address regText'>Address:</label>
                <input type='textarea' name='address' id='address' placeholder='Address' value={registerData.address} onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} />
                <p className='regErrText'>{registerError.addError}</p>
            </div>
            <div className='registerfooter'>
                <button className='regBack' onClick={() => navigate(-1)}>Back</button>
                <button className='regNext' onClick={registerNextScreen}>Next</button>
            </div>

        </div>
    );
}
export default RegisterPage