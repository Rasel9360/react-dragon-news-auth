import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="w-11/12 mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;