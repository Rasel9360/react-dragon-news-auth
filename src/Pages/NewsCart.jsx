import { Link } from "react-router-dom";

const NewsCart = ({news}) => {
    const {_id, title, image_url, details} = news;
    return (
        <div className="border-2 mb-10 p-4 space-y-3">
            <h2 className="text-xl font-bold">{title}</h2>
            <img src={image_url} alt="" />
            {
                details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`}  className="text-blue-600 font-bold">Read More....</Link></p> 
                :
                <p>{details}</p>
            }
        </div>
    );
};

export default NewsCart;