import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPageScreen() {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Gallery Screen</h1>
        <button onClick={() => navigate('/')}>Logout</button>
    </div>
  );
}
