import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const OTPVerification = () => {
    function EnterPhone() {
        const navigate = useNavigate();
        const [phone, setPhone] = useState('');

        const handlePhoneSubmit = async () => {


            navigate('/otp-verification');
        };

        return (
            <div>
                <h1>Enter Phone Number</h1>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button onClick={handlePhoneSubmit}>Send OTP</button>
            </div>
        )
    };
}

export default OTPVerification