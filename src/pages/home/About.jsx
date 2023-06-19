import { Link } from 'react-router-dom';
import doctor from '../../assets/images/doctor 1.png'
const About = () => {
    return (
        <section className='flex flex-col-reverse lg:flex-row'>
            <img src={doctor} alt="doctor" />
            <div>
                <h1>About Us</h1>
                <p>With BillCare, you can pay for airtime, internet data, electricity
                    bills, make flight ticket reservations, and access free medical
                    consultations.
                </p>
                <Link to=''>Read More...</Link>
            </div>
        </section>
    );
};

export default About;