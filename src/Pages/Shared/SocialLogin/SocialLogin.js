import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../hooks/useToken';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [googleLoginError, setGoogleLoginError] = useState('');
    const [googleLoginEmail, setGoogleLoginEmail] = useState('');
    const [token] = useToken(googleLoginEmail);


    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleGoogleSignIn = data => {
        setGoogleLoginError('')
        googleSignIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setGoogleLoginEmail(data.email)
            })
            .catch(err => {
                console.error(err)
                setGoogleLoginError(err.message)
            });
    }
    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </p>
        </div>
    );
};

export default SocialLogin;