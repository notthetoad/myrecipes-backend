// import React from 'react';
// import { useFormik } from 'formik';
// import {
// 	FormLabel,
// 	Button,
// 	Input,
// 	Form
// } from '@chakra-ui/react';

// const SignupForm = () => {
// 	const formik = useFormik({
// 		initialValues: {
// 			login: '',
// 			password: ''
// 		},
// 		onSubmit: values => {
// 			alert(JSON.stringify(values, null, 2));
// 		},
// 	});
// 	return (
// 		<Form onSubmit={formik.handleSubmit}>
// 			<FormLabel htmlFor='login'>Login</FormLabel>
// 			<Input
// 				id='login'
// 				name='login'
// 				type='text'
// 				onChange={formik.handleChange}
// 				value={formik.values.login}
// 			/>
// 			<FormLabel htmlFor='password'>Password</FormLabel>
// 			<Input
// 				id='password'
// 				name='password'
// 				type='password'
// 				onChange={formik.handleChange}
// 				value={formik.values.password}
// 			/>
// 			<Button colorScheme='teal' variant='outline'>Submit</Button>
// 		</Form>
// 	)
// }

// export default SignupForm;

import React from 'react';
import { useFormik } from 'formik';
import {
	FormLabel,
	Button,
	Input,
} from '@chakra-ui/react';

const SignupForm = () => {

	const formik = useFormik({
		initialValues: {
			login: '',
			password: ''
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<FormLabel htmlFor='login'>Login</FormLabel>
			<Input
				id='login'
				name='login'
				type='text'
				onChange={formik.handleChange}
				value={formik.values.login}
			/>
			<FormLabel htmlFor='password'>Password</FormLabel>
			<Input
				id='password'
				name='password'
				type='password'
				onChange={formik.handleChange}
				value={formik.values.password}
			/>
			<Button type='submit'>Submit</Button>
		</form>
	)
}

export default SignupForm;