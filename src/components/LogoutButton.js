import React from 'react';
import {
	Button,
	Link
} from '@chakra-ui/react';

const LogoutButton = () => {
	return (
		<Link to='/'>
			<Button colorScheme='teal' bg='teal' mr='4'>
				Logout
			</Button>
		</Link>
	)
}

export default LogoutButton;
