import React from 'react';
import { Link } from 'react-router-dom';
import {
	GridItem,
	Box,
} from '@chakra-ui/react';

const SideContainer = () => {

	const hoverStyle = {
		color: '#319795'
	}

	return (
				<GridItem colSpan={3} borderRight='solid 1px grey' w='70%' h='8%' style={{position: 'sticky', top:'30px'}}>
					<Box ml='8em' mb='3' mt='20%' _hover={hoverStyle}>
						<Link to='/login'>Add Recipe</Link>
					</Box>
					<Box ml='8em' mb='3' _hover={hoverStyle}>
						<Link to='/myrecipes'>My Recipes</Link>
					</Box>
				</GridItem>
	)
}

export default SideContainer;