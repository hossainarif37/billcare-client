import About from "./About";
import Banner from "./Banner";
import Features from "./Features";
import Newsletter from "./Newsletter";
import Pricing from "./Pricing";

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Features />
            <Pricing />
            <Newsletter />
        </div>
    );
};

export default Home;