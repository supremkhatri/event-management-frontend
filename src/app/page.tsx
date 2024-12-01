import Navbar from "./components/Navbar";
import Hero_section from "./components/Hero_section"
import FeaturedSection from "./components/Featured_section"
import Footer from "./components/Footer"
import FeaturedEvent from "./components/featured_event/Featured_Event";


export default function Home(){
  return(
    <>
    
    <Hero_section/>
    <FeaturedEvent/>
    <FeaturedSection/>
    
    </>
  )
}