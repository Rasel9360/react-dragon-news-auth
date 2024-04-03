import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex my-10">
            <button className="btn btn-secondary">Breaking Nows</button>
            <Marquee pauseOnHover={true} speed={100}>
               <Link className="ml-5" to='/'> I can be a React component, multiple React components, or just some text.</Link>
               <Link className="ml-5" to='/'> I can be a React component, multiple React components, or just some text.</Link>
               <Link className="ml-5" to='/'> I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;