import googleIcon from '../assets/icons/google.png'
import facebookIcon from '../assets/icons/facebook.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
const SignUp = () => {
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <section className="lg:auth-bg py-10 lg:py-16 relative">
            {
                location.pathname === '/signup' && <button onClick={() => navigate('/')} className='bg-[#04083A] absolute top-7 hidden lg:block right-5 text-white active:scale-95 cursor-pointer transition-all w-[200px] mx-auto mt-10 rounded-2xl py-4 font-bold text-xl'>
                    Back to home
                </button>
            }
            {
                location.pathname === '/signup' && <Link className="absolute top-2 right-2 text-[#04083A] underline block lg:hidden" to='/'>Home</Link>
            }
            <div className='bg-white lg:w-[692px] px-4 lg:rounded-[40px] mx-auto items-center text-center py-10 lg:py-14'>
                <h1 className="uppercase text-3xl lg:text-4xl font-extrabold">Create Account</h1>
                <div className='flex flex-col lg:flex-row py-8 lg:py-10 justify-center gap-5 lg:gap-10'>
                    <button className='flex active:scale-95 transition-all justify-center gap-3 rounded-2xl items-center border px-4 py-2'>
                        <img src={googleIcon} alt="google icon" />
                        <span>Sign up with Google</span>
                    </button>
                    <button className='flex active:scale-95 transition-all justify-center gap-3 rounded-2xl items-center border px-4 py-2'>
                        <img src={facebookIcon} alt="facebook icon" />
                        <span>Sign up with Facebook</span>
                    </button>
                </div>
                <div className='flex items-center justify-center gap-3 mb-8 lg:mb-8'>
                    <div className='w-10 border border-[#979797]'></div>
                    <div className='text-[#979797] text-xl'>OR</div>
                    <div className='w-10 border border-[#979797]'></div>
                </div>
                <form onClick={handleSubmit} className='lg:px-28'>
                    <div className='space-y-8 lg:space-y-10'>
                        <input type="text" className='border-b border-[#BBBBBB] pt-2 placeholder:text-lg w-full outline-none' placeholder='Full Name' />
                        <input type="email" autoComplete='off' className='border-b border-[#BBBBBB] pt-2 placeholder:text-lg w-full outline-none' placeholder='Email Address' />
                        <input type="password" autoComplete='off' className='border-b border-[#BBBBBB] pt-2 placeholder:text-lg w-full outline-none' placeholder='Password' />
                    </div>
                    <input type='submit' value='Create Account' className='bg-[#04083A] text-white active:scale-95 cursor-pointer transition-all w-full lg:w-[373px] mt-10 rounded-2xl py-4 font-bold text-xl' />
                </form>
                <p className='mt-8 lg:mt-10'><span>Already have an account? <Link to='/login' className='font-semibold text-[#04083A]'>Log In</Link></span></p>
            </div>
        </section>
    );
};

export default SignUp;