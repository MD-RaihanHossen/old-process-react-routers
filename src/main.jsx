import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contract from './Components/Contract/Contract.jsx';
import Users from './Components/Users/Users.jsx';
import UserDtails from './Components/UserDetails/UserDtails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import Eroor from './Components/Eroor/Eroor.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
     errorElement : <Eroor></Eroor>,
    children: [
      {
        path: "/about",
        element: <About></About>
      }, 
      {
        path: "/contract",
        element: <Contract></Contract>
      }, 
      {
        path: "/users",
        loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>,
      }, 
      {
        path : '/user/:userId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element : <UserDtails></UserDtails>,
        
      }, 
      {
        path : '/posts',
        loader : () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>,
      }
    ], 
    

    
  }, 

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
