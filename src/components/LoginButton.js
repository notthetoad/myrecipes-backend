import React from 'react';
import {
	Button,
	Link
} from '@chakra-ui/react';

const LoginButton = () => {
	return (
		<Link to='/main'>
			<Button colorScheme='teal' bg='teal' mr='4'>
				Login
			</Button>
		</Link>
	)
}

export default LoginButton;