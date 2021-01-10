import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Flex, Spacer, Box, Heading, Button, useColorMode } from '@chakra-ui/react';

const Header = () => {

	const { colorMode, toggleColorMode } = useColorMode();

	return(
		<Flex p='1' style={{backgroundColor: '#319795'}}>
			<Box p='2'>
				<Link to='/'>
					<Heading size='md'>Placeholder app</Heading>
				</Link>
			</Box>
			<Spacer />
			<Box>
				<Link to='/signup'>
					<Button colorScheme='teal' bg='teal' mr='4'>
						Sign up
					</Button>
				</Link>
				<Link to='/login'>
					<Button colorScheme='teal' bg='teal' mr='4'>Log in</Button>
				</Link>
				<Button colorScheme='teal' bg='teal' onClick={toggleColorMode}>{colorMode === 'light' ? "Dark" : "Light"} Mode</Button>
			</Box>
		</Flex>
	)
}

export default Header;

        
    
