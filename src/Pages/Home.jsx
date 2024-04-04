import { useLoaderData } from "react-router-dom";
import BreakingNews from "./BreakingNews";
import Header from "./shared/Header/Header";
import LeftSideNav from "./shared/LeftSideNav/LeftSideNav";
import Navbar from "./shared/Navbar/Navbar";
import RightSideNav from "./shared/RightSideNav/RightSideNav";
import NewsCart from "./NewsCart";

const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
                <div className=""><LeftSideNav></LeftSideNav></div>
                {/* news container */}
                <div className="md:col-span-2 ">
                    <h1 className="text-4xl">News is coming</h1>
                    <div>
                        {
                            news.map(aNews => <NewsCart
                                key={aNews._id}
                                news={aNews}
                            ></NewsCart>)
                        }
                    </div>
                </div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;