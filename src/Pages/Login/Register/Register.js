import React, { useContext, useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Register = () => {
    // Fourt Step2:: 
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState(); //error:1.4

    const handleOnsubmitForm = event => {
        event.preventDefault() // no reload // must add at first

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        // Fourt Step2:: 
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError(''); //error:2.4
                form.reset();
            })
            .catch(error => {
                console.error(error);
                setError(error.message); //error:3.4
            })

    }

    return (

        <Form onSubmit={handleOnsubmitForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="photo url" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Register
            </Button>

            {/* error: 4.4 */}
            <Form.Text className='text-danger'>
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;