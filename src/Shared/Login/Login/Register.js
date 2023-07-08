import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../useTitle';

const Register = () => {
    const { createUser, updateUserProfile, VerifyEmail, user, setLoading } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [chek, setChek] = useState(false);
    useTitle('Register');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // alert('successfully register');
                setError('');
                form.reset();
                verficationEmail();
                toast('please check your email address or spam folder to verify your email ')
                handleprofile(name, photoURL);
                if (user.emailVerified) {

                    navigate('/login')
                }

            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
            .finally(() => {
                toast('please verified first');
                setLoading(false);

            })

    }

    const handleprofile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const verficationEmail = () => {
        VerifyEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleCheckBox = (event) => {
        setChek(event.target.checked)

    }
    return (
        <div>
            <h1>Register Please!!!</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Enter Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"
                        onClick={handleCheckBox}
                        label={<>Accept <Link to='/terms'>terms & conditions</Link></>} />
                </Form.Group>
                <p className='text-danger'>{error.slice(10, -1)}</p>
                <div className='d-flex justify-content-between'>
                    <Button variant="primary" disabled={!chek} type="submit">
                        Register
                    </Button>
                    <span>Already have an Account?<Link to='/login'>Login</Link></span>
                </div>


            </Form>
        </div>
    );
};

export default Register;