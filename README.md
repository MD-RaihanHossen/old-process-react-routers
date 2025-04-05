

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

..........................>>> ........................>>> ........................

1. how to create route with use children component  path here and how call api by usedsing Loader and  useLoaderData(). 
2. <Outlet></Outlet> where i want to show my data there i wite it it might be by condition before looding data with spinners
3. where we click for that path we can use { Link , NavLink } both . for NavLink we get Active class name;
4. for DataLoading we can use   useNavigation() function how much time need for that we can user spinners ; 
5. eroor 404 not fouding page for we can used useRouteError() hook. if we do not get any right page that time we can used it. and it will show { errorElement } with one component
