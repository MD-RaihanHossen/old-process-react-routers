import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const UserDtails = () => {
    const user = useLoaderData()

    const {name, username, email, id} = user

    return (
        <div className="border border-red-500 w-[300px] h-[300px] flex justify-center gap-5 items-center p-2 rounded-2xl mx-auto mt-5" >
        <div>
        <h1 className="text-2xl font-bold">Name : {name}</h1>
        <h2>username: {username}</h2>
        <p>email {email}</p>
        <Link to={`/users`}><button className="border m-2 p-2 rounded-2xl">Go back</button></Link>
        

        </div>
    </div>
    );
};

export default UserDtails;