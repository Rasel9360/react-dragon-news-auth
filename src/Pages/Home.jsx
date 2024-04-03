import BreakingNews from "./BreakingNews";
import Header from "./shared/Header/Header";
import LeftSideNav from "./shared/LeftSideNav/LeftSideNav";
import Navbar from "./shared/Navbar/Navbar";
import RightSideNav from "./shared/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
                <div className="border-2"><LeftSideNav></LeftSideNav></div>
                <div className="md:col-span-2 border-2"><h1 className="text-4xl">News is coming</h1></div>
                <div className="border-2"><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;