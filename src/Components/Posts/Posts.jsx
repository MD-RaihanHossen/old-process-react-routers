import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";




const Posts = () => {
    const posts = useLoaderData();
   
    // data come from main.jsx in post data
   



    return (
        <div>
           
            <div className="grid grid-cols-1  md:grid-cols-2 gap-5 lg:grid-cols-4 mt-[100px]">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;