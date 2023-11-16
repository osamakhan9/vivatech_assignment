import React from 'react'
import { Routes,Route } from 'react-router'
import Crud from '../CRUD/Crud'
import Home from '../Home/Home'
import NewTask from '../NewTask/NewTask'
import { SinglePageCrud } from '../SinglePage/SinglePageCrud'


const PageRoutes = () => {
  return (
	<div>
		<Routes>
			<Route path='/' element={<Home/>}/>
		    <Route path='/crud' element={<Crud/>}/>
			<Route path='/NewTask' element={<NewTask/>}/>
			<Route path='/SingleData/:id' element={<SinglePageCrud/>}/>
		</Routes>
	</div>
  )
}

export default PageRoutes