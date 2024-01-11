
import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import ContactMe from "../ContactMe";
// import Experience from "../Experience";
export default function(){
    return(
       <>
        <HeroSection/>
        <MySkills/>
        <AboutMe/>
        <MyPortfolio/>
        {/* <Experience/> */}
        <ContactMe/>
       </>
    );
}