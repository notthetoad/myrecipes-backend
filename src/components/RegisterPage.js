import React from 'react';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import {
	Box,
	Center,
	FormControl,
	FormLabel,
	FormHelperText,
	Button,
	Input,
	Checkbox,
} from '@chakra-ui/react';

const validate = values => {
	const errors = {};
	if (!values.login) {
		errors.login = 'Required';
	} else if (values.login.length < 3) {
		errors.login = 'Login must be longer than 3 characters';
	};

	if (!values.password) {
		errors.password = 'Required';
	} else if (values.password.length < 3) {
		errors.password = 'Password must be 3 characters or more';
	};

	return errors;
}

const RegisterPage = () => {

		const [login, setLogin] = useState('');
		const [password, setPassword] = useState('');

	useEffect(() => {
		localStorage.getItem('login', 'password')
	}, [login, password])

	const setLocalStorage = () => {
		localStorage.setItem('login', formik.values.login)
		localStorage.setItem('password', formik.values.password)
	}

	const clearLocalStorage = () => {
		localStorage.clear();
	}

	const formik = useFormik({
		initialValues: {
			login: '',
			password: ''
		},
		validate,
		onSubmit: values => {
			console.log(JSON.stringify(values, null, 2));
		},
	});
	return ( // remake signup so it doesnt look too different to login
		<Center mt='10%'>
			<Box>
			<form onSubmit={formik.handleSubmit}>
				<FormControl id='login' isRequired>
					<FormLabel htmlFor='login'>Login</FormLabel>
					{formik.touched.login && formik.errors.login ? <Box style={{color: 'red'}}>{formik.errors.login}</Box> : null}
					<Input 
						type='login' 
						size='sm' 
						id='login'
						name='login'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.login}
						mb='2'
						/>
				</FormControl>
				<FormControl id='password' isRequired>
					<FormLabel htmlFor='password'>Password</FormLabel>
					{formik.touched.password && formik.errors.password ? <Box style={{color: 'red'}}>{formik.errors.password}</Box> : null}
					<Input 
						type='password'
						size='sm' 
						id='password'
						name='password'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}	
						/>
					<FormHelperText mb='2'>Remember to never share your password with anybody</FormHelperText>
					<Checkbox 
						isDisabled={!formik.errors.login && !formik.errors.password && formik.values.login && formik.values.password ? false : true}
						>
						Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
					</Checkbox>
				</FormControl>
				<Button colorScheme='teal' variant='outline' onClick={setLocalStorage} type='submit' mt='2'>Register</Button>
				<Button colorScheme='tea' variant='ghost' onClick={clearLocalStorage} mt='2'>Clear data</Button>
			</form>
			</Box>
		</Center>
	)
}


export default RegisterPage;