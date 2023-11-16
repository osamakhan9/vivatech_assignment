import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { Box,Text } from '@chakra-ui/react';
import axios from 'axios'

export const SinglePageCrud = () => {
	const [record, setRecord] = useState({});

	const params = useParams()

	useEffect(()=>{
        // setLoad(true)
        async function getObj(){
            let res = await axios.get(`https://backend-jwq9.onrender.com/SingleData/${params.id}`);
            let ans = await res.data;
       
			setRecord(ans[0])

          }
          getObj();
    },[])

	console.log(record)

	return (
		<>
			<Navbar />


		 <Box  boxShadow='xs' p='6' rounded='md' bg='white' textAlign='left' width='42%' m='auto' mt='30px'  >
           
		   <Text>Name: {record.name}</Text>
		   <br />
		   <Text>Category: {record.category}</Text>
		   <br />
		   <Text> Status: {record.active ? "True":"False"}</Text>
		   <br />
		   <Text> Description: {record.description}</Text>
		 </Box>

		</>
	)
}
