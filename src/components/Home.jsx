import EventSection from "../section/EventSection";
import HeroCarousel from "../section/HeroSection";
import QuoteSection from "../section/QuoteSection";





const Home = () => {
    return ( 
        <div>
            <HeroCarousel />
            <QuoteSection />
            <EventSection />
            
        </div>
     );
}
 
export default Home;