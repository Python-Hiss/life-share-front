import React from 'react'
import Navbar from './Navbar'
import Sectiontwo from './Sectiontwo'
import SectiontThree from './SectiontThree'
import Footer from './Footer'
import LoginForm from './LoginForm'
import Signupform from './Signupform'
import Signupformhospital from './Signupfromhospital'
import { useEffect } from 'react'
import { TweenMax, Power3,Expo,gsap } from "gsap";
import SectionFour from './SectionFour'
import AboutUs from './About'

const  Homa_page =()=> {
    useEffect(() => {
        gsap.from('.imagenav',1.5, { y:1000  ,opacity: 0, delay:1,ease:Power3.easeInOut});
        gsap.from('.contenttext',1, { x:-200 , opacity: 0 , delay:0.4,ease:Power3.easeInOut});
        TweenMax.staggerFrom('.divnavbar ul li',1,{ delay:1.4, opacity:0, y:-20, ease:Power3.easeInOut },0.2)
        gsap.from(".logoimage", 2, {delay: 0.6, y: 40,  scale:(-4,0),   ease: Expo.easeInOut }); 
      }, []);

     
       
    return (
        <>
            <Navbar/>
            <Sectiontwo/>
            <SectiontThree/>
            <SectionFour/>
            <Footer/>
            <LoginForm/>
            <Signupform/>
            <Signupformhospital/>
        </>
    )
}
export default Homa_page