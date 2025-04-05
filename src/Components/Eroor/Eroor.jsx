import React from 'react';
import { Link, useRouteError } from 'react-router-dom';


const Eroor = () => {

    const error = useRouteError()
    console.log(error)

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className=' text-3xl'>opps</h1>

            {
                error.status === 404 && <div>
                    <h1>This is 404 not found this page</h1>
                    <Link to={`/posts`}> <button className='border m-2 p-2  rounded-2xl text-center'> Back to Home </button> </Link>
                </div>
            }

                </div>
    );
};

            export default Eroor;