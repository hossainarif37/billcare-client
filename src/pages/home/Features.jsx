import featureImg from '../../assets/images/girl_1.png'
const Features = () => {
    return (
        <section className='flex flex-col lg:flex-row justify-between items-center '>
            <div className='px-4 py-10 lg:py-0 lg:px-24 space-y-7 lg:space-y-14'>
                <div>
                    <h1 className='text-4xl lg:text-6xl font-bold mb-5 text-[#4D4D4D]'>Free Medical Consultations</h1>
                    <h3 className='text-4xl'>Sign up today and get free medical consultancy for 15
                        minutes within the first 3 days.
                    </h3>
                </div>
                <div>
                    <h1 className='text-4xl lg:text-6xl font-bold text-[#4D4D4D]'>Pro Membership Benefits</h1>
                    <h3 className='text-4xl'>Get exclusive features and benefits as a Pro member,
                        including access to premium customer support.

                    </h3>
                </div>
            </div>
            <img className='lg:w-[26%] shrink-0' src={featureImg} alt="Feature Image" />
        </section>
    );
};

export default Features;