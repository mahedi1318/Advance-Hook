import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Root from '../layouts/root/Root'
import RefHooks from '../pages/RefHooks'
import EffectHook from '../pages/EffectHook'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root/>}>
        <Route path='/' element={<RefHooks/>}></Route>
        <Route path='/effect' element={<EffectHook/>}></Route>
    </Route>
))

const Routers = () => {
  return (
    <>
    <RouterProvider router={router}/>     
    </>
  )
}

export default Routers
