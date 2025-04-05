import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    //come from main.jsx that users data
    const users = useLoaderData();

    return (
        <div className="grid grid-cols-1  md:grid-cols-2 gap-5 lg:grid-cols-4 mt-[100px]">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;