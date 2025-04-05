import { Link , NavLink } from "react-router-dom";
import '../Hader/Hader.css'
import './MainHader.css'

const MainHader = () => {
    return (
        <div>
            <div className="flex justify-center items-center gap-10 text-2xl list-none li-style mt-0.5">
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/about"><li>About</li></NavLink>
                    <NavLink to="/users"><li>Users</li></NavLink>
                    <NavLink to="/posts"><li>Posts</li></NavLink>
                    <Link to="/contract"><li>Contract</li></Link>
                </div>
        </div>
    );
};

export default MainHader;