import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function LoginPageScreen() {
    const navigate = useNavigate()
    const state = useSelector((state) => state.reducers)
   // console.log('6::', state)
  return (
    <div>
        <h1>Gallery Screen</h1>
        <button onClick={() => navigate('/')}>Logout</button>
    </div>
  );
}
