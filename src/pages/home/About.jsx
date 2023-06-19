import { Link } from 'react-router-dom';
import doctor from '../../assets/images/doctor 1.png'
const About = () => {
    return (
        <section className='flex flex-col-reverse lg:flex-row items-center'>
            <img src={doctor} alt="doctor" className='lg:w-[43.5%]' />
            <div className='text-[#04083A] pl-4 py-4 lg:py-0'>
                <h1 className='text-7xl font-bold '>About Us</h1>
                <h3 className='text-2xl py-3 lg:py-5 '>With BillCare, you can pay for airtime, internet data, electricity <br />
                    bills, make flight ticket reservations, and access free medical <br />
                    consultations.
                </h3>
                <Link to='' className='text-2xl '>Read More...</Link>
            </div>
        </section>
    );
};

export default About;