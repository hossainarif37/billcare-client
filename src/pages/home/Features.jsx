import featureImg from '../../assets/images/girl_1.png'
const Features = () => {
    return (
        <section className='flex flex-col lg:flex-row justify-between  items-center bg-[#FBFAF8]'>
            <div className='px-4 py-10 lg:py-0  lg:px-20 space-y-6 lg:space-y-10'>
                <div>
                    <h1 className='text-4xl lg:text-6xl font-bold mb-5 text-[#4D4D4D]'>Free Medical Consultations</h1>
                    <h3 className='text-3xl'>Sign up today and get free medical consultancy for 15
                        minutes within the first 3 days.
                    </h3>
                </div>
                <div>
                    <h1 className='text-4xl lg:text-6xl font-bold mb-5 text-[#4D4D4D]'>Pro Membership Benefits</h1>
                    <h3 className='text-3xl'>Get exclusive features and benefits as a Pro member,
                        including access to premium customer support.

                    </h3>
                </div>
            </div>
            <img className='lg:w-[26%] shrink-0 h-full' src={featureImg} alt="Feature Image" />
        </section>
    );
};

export default Features;