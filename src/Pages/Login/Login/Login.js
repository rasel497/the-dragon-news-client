import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useLocation, } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';



const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');  //error:1.4-error password wirong email is user not found
    const navigate = useNavigate(); //mne login succes hole home/root page niye jbe jabe

    const location = useLocation();
    const from = location.state?.from.pathname || "/";

    const handleOnSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError(''); //error:2.4
                navigate(from, { replace: true }); // login and home page show
            })
            .catch(error => {
                console.error(error);
                setError(error.message); //error:3.4
            })

    }

    return (
        <div>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>

                {/* error: 4.4 */}
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>
            </Form>

        </div>
    );
};

export default Login;