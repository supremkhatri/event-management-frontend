
import Hero_section from "./components/Hero_section"
import FeaturedSection from "./components/Featured_section"
import FeaturedEvent from "./components/Featured_event_section/Featured_Event";
import Faq from "./components/faq"

export default function Home(){
  return(
    <>
    
    <Hero_section/>
    <FeaturedEvent/>
    <FeaturedSection/>
    <Faq/>
    </>
  )
}