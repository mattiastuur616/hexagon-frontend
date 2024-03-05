import React, { useState } from 'react'
import axios from 'axios';
import './signUpForm.css'
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }

    function createAccount() {

        axios.post(`http://localhost:8080/api/addUser?firstName=${data.firstName}&lastName=${data.lastName}&email=${data.email}&password=${data.password}`)
        .then(res => {
            console.log(res.data)
            if (res.data === "New user was added") {
                alert("User created, redirecting to Main Page");
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/");
            } else if (res.data === "Invalid password") {
                alert("Invalid password. Password should include one uppercase letter and be at least 18 digits long")
            } else if (res.data === "One or multiple values are empty") {
                alert("One or multiple values are empty")
            } else if (res.data === "Can't add new user") {
                alert("User already exists for this email")
            }
        }).catch(error => {
            console.log(error)
        });
    }

    return (
        <div>
            <div className='hex__sign-up_form'>
                <label className='hex__sign-up_form-label'>
                    <p>Enter your first name:</p>
                    <input type="text" name='firstName' placeholder='First Name' value={data.firstName} onChange={handleChange} />
                </label>
                <label className='hex__sign-up_form-label'>
                    <p>Enter your last name:</p>
                    <input type="text" name='lastName' placeholder='Last Name' value={data.lastName} onChange={handleChange} />
                </label>
                <label className='hex__sign-up_form-label'>
                    <p>Your email address:</p>
                    <input type="text" name='email' placeholder='Email' value={data.email} onChange={handleChange} />
                </label>
                <div className='hex__sign-up_text'>
                    <p>Password must include at least one upper letter and be at least 18 digits long</p>
                </div>
                <label className='hex__sign-up_form-label'>
                    <p>Enter a password:</p>
                    <input type="password" name='password' placeholder='Password' value={data.password} onChange={handleChange} />
                </label>
                <button type='submit' onClick={createAccount}>Create The Account</button>
            </div>
        </div>
    )
}

export default SignUpForm
