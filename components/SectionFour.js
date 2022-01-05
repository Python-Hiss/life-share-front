/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import {gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import IndexNavbar from "components/Navbars/IndexNavbar.js";
// import Footer from "components/Footers/Footer.js";

export default function Index() {
    gsap.registerPlugin(ScrollTrigger)
  
    useEffect(() => {


      gsap.from(".scrollsct4img",1.5, {
       
        scrollTrigger: {
          trigger: ".scrollsct4img",
          toggleActions:'restart reverse restart reverse', // onenter onleave onenterback onleaveback
          start:'top center',
          end:'bottom center',

        },
        x: -500,
        autoAlpha: 0,
        overwrite: "auto"
        // ease: Power3.easeInOut,
      });
      gsap.from(".scrollsct6img",1.5, {
       
        scrollTrigger: {
          trigger: ".scrollsct6img",
          toggleActions:'restart reverse restart reverse', // onenter onleave onenterback onleaveback
          start:'top center',
          end:'bottom center',
        },
        x: 500,
        autoAlpha: 0,
        overwrite: "auto"
        // ease: Power3.easeInOut,
      });
     
    }, []);
    return (
        <>

{/* style={{backgroundColor:'#EEEBDD', marginTop:0}} */}


            <section style={{marginBottom:"50px",marginTop: "-250px"}} class="section-content-block section-process">

                <div class="container-fluid w-full">

                    <div class="row">

                        <div class="col-md-12 col-sm-12 text-center">
                            <h2 style={{fontWeight:"bolder", fontSize:"35px"}} class="section-heading"><span>Donation</span> Process</h2>
                            <p style={{fontSize:"20px"}} class="section-subheading">The donation process from the time you arrive center until the time you leave</p>
                        </div>

                    </div>

                    {/* <div class="row wow fadeInUp"> */}
                    

                        <div id="sec4img" class="col-lg-3 col-md-6 col-sm-6 col-xs-12 scrollsct4img">

                            <div class="process-layout">

                                <figure  class="process-img">
                                    <img style={{width:"400px", height:"300px"}} src="https://previews.123rf.com/images/vladwel/vladwel1812/vladwel181200007/115187657-medical-online-research-report-on-computer-vector-flat-cartoon-health-or-medical-record-paper-or-ins.jpg" alt="process" />
                                    <div class="step">
                                        <h3>1</h3>
                                    </div>
                                </figure>

                                <article id="article" class="process-info">
                                    <h2 id="h2-sec4">REGISTRATION</h2>
                                    <p>You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.</p>
                                </article>

                            </div>

                        </div>



                        <div id="sec4img" class="col-lg-3 col-md-6 col-sm-6 col-xs-12">

                            <div class="process-layout">

                                <figure  class="process-img">
                                    <img style={{width:"400px", height:"300px"}} src="https://us.123rf.com/450wm/vectorlab/vectorlab1905/vectorlab190500326/123180425-blood-donation-male-female-characters-in-medical-uniform-making-lifeblood-transfusion-from-human-han.jpg?ver=6" alt="process" />
                                    <div class="step">
                                        <h3>2</h3>
                                    </div>
                                </figure>

                                <article id="article" class="process-info">
                                    <h2 id="h2-sec4">Screening</h2>
                                    <p>A drop of blood from your finger will take for simple test to ensure that your blood iron levels are proper enough for donation process.</p>
                                </article>

                            </div>

                        </div>


                        <div id="sec4img" class="col-lg-3 col-md-6 col-sm-6 col-xs-12 scrollsct6img">

                            <div class="process-layout">

                                <figure class="process-img">
                                    <img style={{width:"400px", height:"300px"}} src="https://previews.123rf.com/images/zuperia/zuperia2003/zuperia200300192/142389550-poj%C4%99cie-krwiodawstwa-%C5%9Bwiatowy-dzie%C5%84-krwiodawcy-wolontariusz-oddaje-krew-w-medycznym-banku-krwi-piel%C4%99.jpg" alt="process" />
                                    <div class="step">
                                        <h3>3</h3>
                                    </div>
                                </figure>

                                <article id="article" class="process-info">
                                    <h2 id="h2-sec4">Donation</h2>
                                    <p>After ensuring and passed screening test successfully you will be directed to a donor bed for donation. It will take only 6-10 minutes.</p>
                                </article>
                            </div>

                        </div>

                      

                    </div>

                {/* </div> */}

            </section>

        </>
    );
}


