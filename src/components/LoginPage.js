import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import {
	Box,
	Center,
	// FormControl,
	FormLabel,
	Button,
	Input,
} from '@chakra-ui/react';


const LoginPage = () => {

	const [isLoggedIn, setIsLoggedIn] = useState(true); // Change to false after testing
	const [isLoginClicked, setIsLoginClicked] = useState(true);


	const validate = values => {
		const errors = {};

		if (!values.login) {
			errors.login = 'Required';
		} else if (values.login !== localStorage.getItem('login')) {
			errors.login = 'Invalid login';
		}

		if (!values.password) {
			errors.password = 'Required';
		} else if (values.password !== localStorage.getItem('password')) {
			errors.password = 'Invalid password';
		}

		return errors;
	}

	const formik = useFormik({
		initialValues : {
			login: '',
			password: ''
		},
		validate,
		onSubmit: values => {
			console.log(values, null, 2)
		},
	});

	if (isLoggedIn) {
		return (
			<Redirect to='/main' /> // Make protected routes for users
		)
	} else {
		return (
			<Center mt='10%'>
				<Box>
					<form onSubmit={formik.handleSubmit}>
						<FormLabel htmlFor='login'>Login</FormLabel>
						{/* {formik.touched.login && formik.errors.login ? <Box>{formik.errors.login}</Box> : null} */}
						<Input
							id='login'
							name='login'
							type='text'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.login}
							mb='2'
						/>
						<FormLabel htmlFor='password'>Password</FormLabel>
						{/* {formik.touched.password && formik.errors.password ? <Box>{formik.errors.password}</Box> : null} */}
						<Input 
							id='password'
							name='password'
							type='password'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
						/>
							<Button 
								colorScheme='teal' 
								variant='ghost' 
								onClick={() => formik.values.login === localStorage.getItem('login') && formik.values.password === localStorage.getItem('password') ? setIsLoggedIn(true) : setIsLoginClicked(false)}
								mt='1'
								mb='2'
							>
								Login
							</Button>
						{!isLoginClicked ? <Box style={{color: 'red'}}>Invalid login or password</Box> : null}
					</form>
				</Box>
			</Center>
		)
	}
}

export default LoginPage;