import React from 'react'
import './login.css'
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { auth } from '../../firebase/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import 'firebase/auth';
import firebase from 'firebase/app';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = localStorage.getItem('user');
    if (user) {
        setTimeout(() => {
            window.location.href = "/"
        }, 1000);

    } else {
        // The 'user' item does not exist in localStorage.
        // The user is not logged in or has not stored any data.
        console.log('User is not logged in');
    }
    const signin = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('user', JSON.stringify(result));
            toast.success('Signin Successfully', { /* Toast options */ });
            setTimeout(() => {
                window.location.href = "/" // Use React Router to navigate to the home page
            }, 1000);
        } catch (error) {
            toast.error(`Signin Failed: ${error.message}`, { /* Toast options */ });
        }

    }


    return (
        <>
            <div class="login-container">
                <ToastContainer />
                <div class="login-box">
                    <h2>Login to code with bard</h2>

                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" required autoComplete='off' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" onClick={signin} >Login</button>
                </div>
            </div>
        </>
    )
}

export default Login