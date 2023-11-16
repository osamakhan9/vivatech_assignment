import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Box, TableContainer, Table, TableCaption, Tr, Th, Thead, Tbody, Button, Td, useToast } from '@chakra-ui/react'
import { EditTodoList } from '../EditCrud/EditTodoList'
import { SinglePageCrud } from '../SinglePage/SinglePageCrud'
import { Link } from 'react-router-dom'

const Crud = () => {
	const toast = useToast();

	const [data, setData] = useState('')


	async function apiCall() {
		let res = await fetch("https://backend-jwq9.onrender.com/records");
		res = await res.json();
		
		setData(res)
		
	}
	apiCall()




	async function handleDelete(id) {
		await fetch(`https://backend-jwq9.onrender.com/deleterecord/${id}`, {
			method: "DELETE",

		});
		toast({
			title: "DELETE Successfully",
			description: `your are Deleted ${id} CRUD.`,
			status: "warning",
			duration: 9000,
			isClosable: true,
			position: "top",
		});

		apiCall();
	}



	return (
		<>
			<Navbar />

			<Box width='70%' m='auto' mt='30px'>

				<TableContainer
					boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
					pt={"1rem"}
				>
					<Table variant="striped">
						<TableCaption></TableCaption>
						<Thead>
							<Tr>
								<Th>Id</Th>
								<Th>NAME</Th>
								<Th>Category</Th>
								<Th>Status</Th>
								<Th>Edit</Th>
								<Th>Delete</Th>
								<Th>View Page</Th>
							</Tr>
						</Thead>
						<Tbody>
							{data && data.map((el, index) => {
								return (
									<Tr key={index + 1}>
										<Td>{el._id}</Td>
										<Td>{el.name}</Td>
										<Td>{el.category}</Td>
										<Td>{el.active ? "True" : "False"}</Td>
										<Td>
											<EditTodoList el={el} apiCall={apiCall} toast={toast} />
										</Td>
										<Td>
											<Button
												variant={"solid"}
												colorScheme={"red"}
												onClick={() => {
													handleDelete(el._id);
												}}
											>
												Delete
											</Button>
										</Td>
										<Td>

											<Button
											
											variant={"solid"}
												colorScheme={"teal"}>

												<Link to={`/SingleData/${el._id}`}>
													View
												</Link>
											</Button>

										</Td>

									</Tr>
								);
							})}
						</Tbody>
					</Table>
				</TableContainer>

			</Box>
		</>
	)
}

export default Crud