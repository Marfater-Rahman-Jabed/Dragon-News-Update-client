import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h1>this is terms and conditions </h1>
            <p>go to register<Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;