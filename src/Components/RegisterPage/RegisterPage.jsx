import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../Styles/RegisterPage.css'
import { useDispatch } from 'react-redux'
import { registrationData } from '../Actions/actions'

function RegisterPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [registerData, setRegisterData] = useState({ firstName: "", lastName: '', gender: '', qualification: '', occupation: '', dob: '', age: '', email: '', password: '', address: '' })
    // const [registerError, setRegisterError] = 
    const [fnameError, setFnameError] = useState('')
    const [lnameError, setLnameError] = useState('')
    const [genderError, setGenderError] = useState('')
    const [qualifError, setQualifError] = useState('')
    const [occupError, setOccupError] = useState('')
    const [dobError, setDobError] = useState('')
    const [addError, setAddError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [pswdError, setPswdError] = useState('')
    const months = new Date().getMonth() - new Date(registerData?.dob).getMonth()
    let years = new Date().getFullYear() - new Date(registerData?.dob).getFullYear()
    const age = months < 0 || months === 0 || new Date().getDate() < new Date(registerData?.dob).getDate() ? years-- : years
 useEffect(()=>{
setRegisterData( {...registerData, age:age})
 },[registerData.dob])
    const handleRegisterData = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value })
    }
    const handleBlurEvent = (e) => {
        console.log("30==",e.target)
        if (registerData.firstName.length && !(registerData.firstName.length > 3 && new RegExp(/^[A-Z]*$/).test(registerData.firstName))) {
            setFnameError('Please enter valid fname in uppercase')
        } else {
            setFnameError('')
        }
        if (registerData.lastName.length && !(registerData.lastName.length > 3 && new RegExp(/^[A-Z]*$/).test(registerData.lastName))) {
            setLnameError('Please enter valid lname in uppercase')
        } else {
            setLnameError('')
        }
        if (!registerData.gender) {
            setGenderError('Please select a item')
        } else {
            setGenderError('')
        }
        if (!registerData.qualification) {
            setQualifError('Please select qualification')
        } else {
            setQualifError('')
        }
        if (registerData.occupation.length && !(registerData.occupation.length > 3 && new RegExp(/^[A-Z]*$/).test(registerData.occupation))) {
            setOccupError('Please enter valid occupation')
        } else {
            setOccupError('')
        }
        if (!registerData.dob) {
            setDobError('please select your dob')
        } else {
            setDobError('')
        }
        if (registerData.address.length && !(registerData.address.length > 3 && new RegExp(/^[A-Z]*$/).test(registerData.address))) {
            setAddError('Please enter valid address')
        } else {
            setAddError('')
        }
        if (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
            registerData.email)) {
            setEmailError('')
        } else {
            setEmailError('Please enter valid email')
        }
        if (new RegExp(
            '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
        ).test(registerData.password)) {
            setPswdError('')
        } else {
            setPswdError("Please enter valid password")
        }
    }

    const registerNextScreen = () => {
        dispatch(registrationData(registerData))
        
        console.log("81==", Object.values(registerData).every((val) => val !== ""))
        if(registerData.email){

            navigate('/loginPage')
        }

        var get = JSON.parse(localStorage.getItem('details') || "[]");
        get.push(registerData);
        localStorage.setItem('details', JSON.stringify(get));
    }
    // useEffect(() => {
    // }, [registerData]);

    return (
        <div>
            <h1 className='formHeader'>Registration Form</h1>
            <div className='registerform'>
                <label htmlFor='firstName' className='regText'>First Name:</label> {" "}
                <input type="text" placeholder="FirstName" name='firstName' id="firstName" value={registerData.firstName} onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} />
                <p className='regErrText'>{fnameError}</p>

                <label htmlFor='lastName' className='regText'>Last Name:</label>{" "}
                <input type="text" placeholder="LastName" name='lastName' id="lastName" value={registerData.lastName} onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} />
                <p className='regErrText'>{lnameError}</p>

                <label className='gender regText' htmlFor='gender'>Gender:</label>
                <input type="radio" name="gender" value="male" onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} /> MALE
                <input type="radio" name="gender" value="female" onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} /> FEMALE
                <input type="radio" name="gender" value="other" onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} /> OTHER
                <p className='regErrText'>{genderError}</p>

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
                <p className='regErrText'>{qualifError}</p>

                <label htmlFor='occupation' className='occupation regText'>Occupation:</label> {" "}
                <input type="text" name="occupation" id="occupation" placeholder="Occupation" value={registerData.occupation} onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} />
                <p className='regErrText'>{occupError}</p>

                <label htmlFor='dob' className='dob regText'>Date of birth:</label>
                <input type="date" name='dob' id='dob' value={registerData.dob} onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} />
                <p className='regErrText'>{dobError}</p>
                <p>
                    {registerData.dob && <> <label htmlFor='age' className='regText age'>Age:
                    </label>
                        <input type='text' readOnly name="age" id="age" value={`${age} years`} />
                    </>
                    }
                </p>
                <label htmlFor='email' className='email regText'>Email:</label>
                <input type="email" name='email' id='email' placeholder='Email' value={registerData.email} onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} />
                <p className='regErrText'>{emailError}</p>

                <label htmlFor='pswd' className='pswd regText'>Password:</label>
                <input type="password" name='password' id='pswd' placeholder='Password' value={registerData.password} onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} />
                <p className='regErrText'>{pswdError}</p>

                <label htmlFor='address' className='address regText'>Address:</label>
                <input type='textarea' name='address' id='address' placeholder='Address' value={registerData.address} onChange={(e) => handleRegisterData(e)} onBlur={handleBlurEvent} />
                <p className='regErrText'>{addError}</p>
            </div>
            <div className='registerfooter'>
                <button className='regBack' onClick={() => navigate(-1)}>Back</button>
                <button className='regNext' onClick={registerNextScreen}>Next</button>
            </div>

        </div>
    );
}
export default RegisterPage