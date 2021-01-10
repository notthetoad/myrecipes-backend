import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { MdClear } from 'react-icons/md';

const DeleteButton = () => {
	return (
		<IconButton 
				icon={<MdClear />}
				aria-label='Delete recipe'
				size='sm'
				ml='3px'
			/>
	)
}

export default DeleteButton;