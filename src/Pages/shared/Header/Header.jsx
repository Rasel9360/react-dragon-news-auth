import logo from '../../../assets/logo.png'
import moment from 'moment';
import BreakingNews from '../../BreakingNews';

const Header = () => {
    return (
        <div className='mt-10'>
            <div className='text-center space-y-3'>
                <img className='mx-auto' src={logo} alt="" />
                <h3>Journalism Without Fear or Favour</h3>
                <h4 className='text-xl font-medium'>{moment().format("dddd, MMMM D, YYYY")}</h4>
            </div>
        </div>
    );
};

export default Header;