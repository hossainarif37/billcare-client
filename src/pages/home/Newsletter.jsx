import newsletterImg from '../../assets/images/girl_2.png'
const Newsletter = () => {
    return (
        <section className='flex flex-col lg:flex-row justify-between bg-[#FBFAF8]  items-center'>
            <div className=' px-4 py-10 lg:py-0  lg:pl-20 lg:pr-10 space-y-6 lg:space-y-10'>
                <div>
                    <h1 className='text-4xl lg:text-6xl font-black mb-5 text-[#4D4D4D]'>Sign Up for our Newsletter</h1>
                    <h3 className='text-3xl'>Stay updated with the latest news and offers from <br className='hidden lg:block' /> BillCare.
                    </h3>
                </div>
                <div className="flex flex-col lg:flex-row gap-5">
                    <input type="text" placeholder="Your Email Address" className="px-4 rounded-xl w-full shadow-md placeholder:text-[#222] outline-none focus:ring-2 focus:ring-offset-2 max-w-md bg-white py-5" />
                    <button className="active:scale-95 w-44 mx-auto lg:mx-0 transition-all py-3 px-3 font-semibold ring-4 ring-white  shadow-md shadow-black bg-[#4D4D4D] text-white rounded-3xl items-center capitalize text-4xl ">sign up</button>

                </div>
            </div>
            <img className='lg:w-[26%] shrink-0 h-full' src={newsletterImg} alt="Feature Image" />
        </section>
    );
};

export default Newsletter;