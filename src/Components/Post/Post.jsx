import { useNavigate, Link } from "react-router-dom";


const Post = ({post}) => {
    const {id, userId, title, body} = post

    const navigate = useNavigate()

    const hendleposts = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className="border border-red-500 w-[300px]   gap-5 rounded-2xl mx-auto flex flex-col p-3">
            <div className="grow flex flex-col gap-3">
            <h1 className="text-2xl font-bold">userId : {userId}</h1>
            <p className="font-bold">Titel : {title}</p>
            <p>Titel : {body}</p>
            </div>

            <Link to={`/post/${id}`}> <button className="border m-2 p-2  rounded-2xl">link Details here</button> </Link>

            {/* for useing functin hendle here */}
            <button className="border m-2 p-2  rounded-2xl" onClick={() => hendleposts()}>Details here</button>

        </div>
    );
};

export default Post;