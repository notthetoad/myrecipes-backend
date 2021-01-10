import React from 'react';
import {
	Flex,
	Box,
	Input,
	Button,
	FormLabel,
	Textarea,
	NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RecipeField = () => {

	
	const formik = useFormik({
		initialValues: {
			title: '',
			author: '',
			ingredients: '',
			portionSize: 1,
			steps: '',
		},
		validationSchema: Yup.object({
			title: Yup.string()
				.required('Required'),
			author: Yup.string()
				.required('Required'),
			ingredients: Yup.string()
				.required('Required'),
			portionSize: Yup.number()
				.required('Required'),
			steps: Yup.string(),
		}),
		onSubmit: values => {
			console.log(values)
		},
	});

	const style = {color: 'red'}

	const insertRecipe = (recipe) => {
		let recipes = JSON.parse(localStorage.getItem('recipe'))
		if (!recipes) {
			recipes = []
		}
		recipes.push(recipe)
		localStorage.setItem('recipe', JSON.stringify(recipes))
	}

	return (
		<form onSubmit={formik.handleSubmit}>
			<Flex>
				<Box width='600px'>
					<FormLabel htmlFor='title' mb='0'>Title</FormLabel>
					{formik.touched.title && formik.errors.title ? <Box style={style}>{formik.errors.title}</Box> : null}
					<Input 
						id='title'
						name='title'
						{...formik.getFieldProps('title')}
						mb='3'
					/>
					<FormLabel htmlFor='author' mb='0'>Author</FormLabel>
					{formik.touched.author && formik.errors.author ? <Box style={style}>{formik.errors.author}</Box> : null}
					<Input 
						id='author'
						name='author'
						{...formik.getFieldProps('author')}
						mb='3'
					/>
					<FormLabel htmlFor='ingredients' mb='0'>Ingredients</FormLabel>
					{formik.touched.ingredients && formik.errors.ingredients ? <Box style={style}>{formik.errors.ingredients}</Box> : null}
					<Textarea 
						id='ingredients'
						name='ingredients'
						{...formik.getFieldProps('ingredients')}
						mb='3'
					/>
					<FormLabel htmlFor='portionSize' mb='0'>Portion Size</FormLabel>
					<NumberInput clampValueOnBlur={true} defaultValue={1} min={1}>
						<NumberInputField 
							id='portionSize'
							name='portionSize'
							{...formik.getFieldProps('portionSize')}
						/>
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
					<FormLabel htmlFor='steps' mt='3' mb='0'>Steps</FormLabel>
					<Textarea 
						id='steps'
						name='steps'
						{...formik.getFieldProps('steps')}
					/>
					<Flex>
						<Button
							marginLeft='auto' 
							mt='3'
							onClick={() => insertRecipe(formik.values)}
						>
						Add recipe
						</Button>
					</Flex>
				</Box>
			</Flex>
		</form>
	)
}

export default RecipeField;