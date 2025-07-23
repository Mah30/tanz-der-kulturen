import EventSection from "../section/EventSection";
import HeroCarousel from "../section/HeroSection";
import QuoteSection from "../section/QuoteSection";
import Footer from "./Footer";





const Home = () => {
    return ( 
        <div>
            <HeroCarousel />
            <QuoteSection />
            <EventSection />
            <Footer />
            
        </div>
     );
}
 
export default Home;