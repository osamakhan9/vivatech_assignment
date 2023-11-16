import {
	Box,
	Flex,

	HStack,

	Button,
	useColorModeValue,
	Text

} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export default function Navbar() {

	return (
		<>
			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<HStack spacing={44} alignItems={'center'}>
						<Link to='/crud'>
							<Box>HOME</Box>
						</Link>
						<HStack  as={'nav'} spacing={44} display={{ base:'none', md: 'flex' }} >
							<Link to='/NewTask'>
								
								<Button variant={'solid'}
								colorScheme={'teal'}
								>
								ADD NEW TASK
								</Button>
							</Link>

							<Link to='/crud'>
							<Button variant={'solid'}
								colorScheme={'teal'}
								fontWeight='500'
								>
								 LIST RECORD
								</Button>
							</Link>
						</HStack>
					</HStack>
					<Flex alignItems={'center'}>
					</Flex>
				</Flex>
			</Box>   
		</>
	)
}