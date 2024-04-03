import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qImage1 from '../../../assets/qZone1.png';
import qImage2 from '../../../assets/qZone2.png';
import qImage3 from '../../../assets/qZone3.png';
const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3">
                <h1 className="text-xl font-bold">Login With</h1>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login With GitHub
                </button>
            </div>
            <div className="p-4 ">
                <h1 className="text-xl font-bold mb-3">Find Us On</h1>
                <a className="flex items-center gap-4 border-2 p-2 rounded-t-lg" href=""><FaFacebook></FaFacebook> Facebook</a>
                <a className="flex items-center gap-4 border-x-2 p-2 " href=""><FaTwitter /> Twitter</a>
                <a className="flex items-center gap-4 border-2 p-2 rounded-b-lg" href=""><FaInstagram /> Instagram</a>

            </div>
            {/* Q zone */}
            <div className="p-4">
                <div className="p-4 rounded-lg bg-[#F3F3F3]">
                    <h2 className="text-xl font-bold mb-3">Q-Zone</h2>
                    <img className="w-full object-cover" src={qImage1} alt="" />
                    <img className="w-full object-cover" src={qImage2} alt="" />
                    <img className="w-full object-cover" src={qImage3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;