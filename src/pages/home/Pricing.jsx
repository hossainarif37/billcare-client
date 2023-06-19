import boy from '../../assets/images/slide_2_small.png'
const Pricing = () => {
    return (
        <section className='flex flex-col-reverse lg:flex-row bg-[#04083A]'>
            <div>
                <img src={boy} alt="" />
            </div>
            <div>
                <div className='text-white px-5 lg:px-20 text-center py-10'>
                    <h1 className='font-black text-4xl lg:text-6xl mb-4'>Pro Membership Pricing</h1>
                    <p className='text-3xl'>Upgrade to Pro membership and enjoy all the exclusive
                        features.</p>
                </div>
                <div className='flex flex-col mb-7 lg:mb-0 lg:flex-row justify-center gap-5 lg:gap-20 text-[#04083A]'>
                    <div className='text-center bg-[#D6D7DB] w-[250px] mx-auto lg:mx-0  py-10 border-4 rounded-3xl border-white'>
                        <h1 className='text-5xl mb-3 font-black'>Yearly</h1>
                        <h3 className='text-4xl'>19,999</h3>
                        <h4 className='text-4xl'>Naira</h4>
                    </div>
                    <div className='text-center bg-[#D6D7DB] mx-auto lg:mx-0 text-[#04083A] w-[253px] py-10 border-4 rounded-3xl border-white'>
                        <h1 className='text-5xl mb-3 font-black w-[250px]'>Monthly</h1>
                        <h3 className='text-4xl'>1,999</h3>
                        <h4 className='text-4xl'>Naira</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;