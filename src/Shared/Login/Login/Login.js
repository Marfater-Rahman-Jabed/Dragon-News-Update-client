import React, { useState } from 'react';
import { useContext, } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../useTitle';

const Login = () => {
    const { signin, user, setLoading } = useContext(AuthContext);
    const nevigate = useNavigate();
    const [error, setError] = useState('');
    const location = useLocation();
    useTitle('Login')
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('')
                if (user.emailVerified) {
                    toast('successfully login')
                    nevigate(from, { replace: true });
                }
                else {
                    toast('Please Verify your email first')
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
    return (
        <div>
            <h1>LogIn First Please!!!</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{error.slice(22, -2)}</p>
                <div className='d-flex justify-content-between'>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <p>New in Website <Link to='/register'>Register</Link></p>
                </div>

            </Form>
        </div>
    );
};

export default Login;