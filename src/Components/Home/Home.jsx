import MainHader from "../MainHader/MainHader";
import { Outlet, useNavigation} from "react-router-dom";
import { FadeLoader } from "react-spinners";



const Home = () => {

    // for set spinners here
    const navigation  = useNavigation()


    return (
        <div className="mt-20">
            <h2 className="text-2xl bg-green-600 rounded-2xl p-4 text-center text-white font-bold">This is a Home</h2>
            <MainHader></MainHader>
            {
                navigation.state === "loading" ? <div className="flex justify-center mt-4 text-blue-70">  <FadeLoader ></FadeLoader>  </div> : <Outlet></Outlet>
            }
           
        </div>
    );
};

export default Home;