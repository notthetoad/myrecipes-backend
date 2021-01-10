import React from 'react';
import {
	Box,
	StackDivider,
	VStack,
	Heading,
	Text,
	Flex,
	IconButton
} from '@chakra-ui/react';
import MainContainer from './MainContainer';
import { MdEdit } from 'react-icons/md';
import DeleteButton from './DeleteButton';

// Finish styling Stack component
const Stack = (props) => (
	<VStack w='70%'>
		<StackDivider>
			<Recipe {...props}/>
		</StackDivider>
	</VStack>
)

// Add button functionality
const Recipe = (props) => {
	return (
		<Flex p={5} shadow='md' borderWidth='1px' mb='3' props={props} direction='column'>
		<Flex align='center'>
			<Heading fontSize='1.5em'>{props.title}</Heading>
			<IconButton 
				icon={<MdEdit />}
				aria-label='Edit recipe'
				size='sm'
				ml='auto'
			/>
			<DeleteButton />
			</Flex>
			<Flex>
				<Text mt={4}>By: {props.author}</Text>
			</Flex>
			<Flex direction='column'>
				<Box mt={4}>Ingredients: {props.ingredients.split('\n').map(item => <Box ml='6%'>{item}<br /></Box>)}</Box>
			</Flex>
			<Text mt={4}>Portion Size: {props.portionSize}</Text>
			<Box mt={4}>Steps: {props.steps.split('\n').map(item => <Box ml='6%'>{item}<br /></Box>)}</Box>
		</Flex>
	)
}

const MyRecipes = () => {

	let myLs = localStorage.getItem('recipe');
	let ls = JSON.parse(myLs)

	return (
		<>
			<MainContainer children={ls.map(recipe => <Stack title={recipe.title} author={recipe.author} ingredients={recipe.ingredients} portionSize={recipe.portionSize} steps={recipe.steps}/>)}/>
		</>
	)
}

export default MyRecipes;