import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [category, setCategory] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then((data) => {setCategory(data)})
    },[])
    return (
        <div className="space-y-5">
            <h2 className="text-xl font-semibold pt-3 pl-3">All Category</h2>
            <h1 className="text-center text-xl font-semibold bg-[#E7E7E7] py-4">National News</h1>

            {
                category.map(cate => <NavLink
                     key={cate.id}
                     className={'block ml-20 text-xl font-medium'}
                     to={`/category/${cate.id}`}
                     >{cate.name}
                     </NavLink>)
            }

        </div>
    );
};

export default LeftSideNav;