import { Link } from 'react-router-dom';
import banner from '../../assets/images/banner.jpg'
const Banner = () => {
    return (
        <div className='relative'>
            <img src={banner} alt="" />
            <ul className='lg:flex flex-col lg:flex-row hidden items-center absolute top-0 text-[#ddd] space-x-14 px-28 py-10'>
                <li className='text-2xl hover:text-white'><Link to='' href='#features'>Features</Link></li>
                <li className='text-2xl hover:text-white'><Link to='' href='#pricing'>Pricing</Link></li>
                <li className='text-2xl hover:text-white'><Link to=''>Sign Up</Link></li>
            </ul>
        </div>
    );
};

export default Banner;