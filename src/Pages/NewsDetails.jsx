import { useParams } from "react-router-dom";
import Header from "./shared/Header/Header";
import Navbar from "./shared/Navbar/Navbar";
import RightSideNav from "./shared/RightSideNav/RightSideNav";

const NewsDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-3xl font-bold">Dragon News</h2>
                    <div>
                        <h2>{id}</h2>
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default NewsDetails;