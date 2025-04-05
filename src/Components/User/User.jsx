import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {
    const {name, username, email, id} = user

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/user/${id}`)
    }

    return (
        <div className="border border-red-500 w-[300px] h-[300px] flex justify-center gap-5 items-center p-2 rounded-2xl mx-auto" >
            <div>
            <h1 className="text-2xl font-bold">Name : {name}</h1>
            <h2>username: {username}</h2>
            <p>email {email}</p>
            
            <Link to={`/user/${id}`}><button className="border m-2 p-2 rounded-2xl">see ditails here</button></Link>

            <button onClick={() => handleNavigate()} className="border m-2 p-2 rounded-2xl">go by navigate</button>
            </div>
        </div>
    );
};

export default User;