import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useToast,
	useDisclosure,
	Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import style from '../NewTask/NewTask.module.css'
//   const toast = useToast()

export function EditTodoList({ el, apiCall, toast }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [active, setActive] = useState('');


	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch(`https://backend-jwq9.onrender.com/update-record/${el._id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, description, category, active }),
		});
		const data = await response.json();
		console.log(data);

		toast({
			title: 'NEW CRUD Successfully',
			description: "Create a CRUD application SuccessFully",
			status: 'success',
			duration: 3000,
			isClosable: true,
			position: 'top'
		})
		// Navigator('/home')
		apiCall()
	};


	return (
		<>


			<Button onClick={onOpen} variant={"solid"} colorScheme={"teal"}>
				Edit
			</Button>
			<Modal isOpen={isOpen} onClose={onClose} >
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Update List</ModalHeader>
					<ModalCloseButton />
					<ModalBody >
					


						<Box w='auto' pt='50px' pl="30px" pr='30px' pb='50px' margin='auto' boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px;' >
							<form id={style.NewTaskForm} onSubmit={handleSubmit}>
								<FormLabel mt='10px' color='black'>Name</FormLabel>
								<Input type='text' color='black'
									value={name} onChange={(e) => setName(e.target.value)}
								/>

								<FormLabel mt='10px' color='black'>Description</FormLabel>
								<Textarea type='text' h='300px'
									color='black'
									value={description} onChange={(e) => setDescription(e.target.value)}
								/>



								<FormLabel mt='10px'>Category</FormLabel>


								<select className={style.selectStyle} value={category} onChange={(e) => setCategory(e.target.value)}>
									<option value='Select category'>Select category</option>
									<option value='blog'>Blog</option>
									<option value='movie'>Movie</option>
									<option value='news'>News</option>
									<option value='Social media'>Social media</option>
								</select>


								<div className={style.activeDive}>
									<label className={style.activeLable}>Active</label>
									<input type="radio" value={true} onChange={(e) => setActive(e.target.value)} />

									<label className={style.activeLable}>In Active</label>
									<input type="radio" value={false} onChange={(e) => setActive(e.target.value)} />
								</div>

								{/* <Button type='submit' mt='10px' width='100%'>Submit</Button> */}

							</form>

						</Box>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button onClick={handleSubmit}>Update</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}