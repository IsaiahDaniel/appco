import React from 'react';
import ShowCaseImg from '../assets/landing-image.webp';
import Sales from '../assets/sales.webp';

import { AiFillPlayCircle } from 'react-icons/ai';
import { BsPlayCircle } from 'react-icons/bs';
import Card from '../components/Card/Card';

import { AiOutlineSecurityScan } from 'react-icons/ai';
import { MdPayments } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import ScreenshootOne from "../assets/screenshoot-1.webp";
import ScreenshootTwo from "../assets/screenshoot-2.webp";
import ScreenshootThree from "../assets/screenshoot-3.webp";
import imageBackground from "../assets/bg-computer.webp";
import DesktopShowcase from "../assets/app-showcase.webp";
import Playstore from "../assets/playstore.webp";
import Appstore from "../assets/app-store.webp";
import ArrowSpring from "../assets/arrow-spring.webp";

import './Home.css';

const Home = () => {
  return (
    <div className={`showcase`}>
      <div className="container">
        <div className="showcase__content">
          <div className="showcase__contentText">
            <span>APP LANDING PAGE</span>
            <h2 className="lg-heading">Get Things Done With Appco</h2>
            <p className="w-75">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident beatae enim, nostrum cumque nemo voluptate odit aut
              aspernatur repellat omnis!
            </p>
            <div className="mt-3">
              <a href="#" className="btn btn-primary mr-2 border-radius--sm">
                Download
              </a>

              <a href="#" className="text-white bg-purple border-radius-50">
                {/* <AiFillPlayCircle size="40" /> */}
                {/* <BsPlayCircle size="25" /> */}
                play
              </a>
            </div>
          </div>

          <div className="showcase__contentImg d-none-sm">
            <img src={ShowCaseImg} alt="ShowCaseImg" />
          </div>
        </div>
      </div>

      <div className="showcase__features d-flex-between mt-5">
        <div>
          <img src={Sales} alt="Sales" style={{ width: '450px' }} />
        </div>
        <div>
          <div className="showcase__featuresWrapper">
            <h2 className="sm-heading md-heading">
              Some of the best Features of our App!
            </h2>
            <div className="showcase__featuresCard text-centerr">
              <div className="d-flex-between">
                <div className="showcase__featuresCardIcon">
                  <AiOutlineSecurityScan size="60" />
                </div>
                <div>
                  <h3>Easy To customize</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum eveniet doloribus magni libero minima.
                  </p>
                </div>
              </div>

              <div className="d-flex-between">
                <div className="showcase__featuresCardIcon">
                  <AiOutlineSecurityScan size="60" />
                </div>
                <div>
                  <h3>Easy To customize</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum eveniet doloribus magni libero minima.
                  </p>
                </div>
              </div>

              <div className="d-flex-between">
                <div className="showcase__featuresCardIcon">
                  <AiOutlineSecurityScan size="60" />
                </div>
                <div>
                  <h3>Easy To customize</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum eveniet doloribus magni libero minima.
                  </p>
                </div>
              </div>

              <div className="d-flex-between">
                <div className="showcase__featuresCardIcon">
                  <AiOutlineSecurityScan size="60" />
                </div>
                <div>
                  <h3>Easy To customize</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum eveniet doloribus magni libero minima.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="showcase__appcoHelp container">
        <h2 className="md-heading text-center mt-5">
          How Can We Help You with Appco!
        </h2>
        <div className="d-flex-between">
          <div className="box text-center">
            <div>
                <div className="card__imgBg">
                    <MdManageAccounts size="50" color="#e83e8c" /> 
                </div>
                <h3>Easily Manage</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum eveniet doloribus magni libero minima.</p>
            </div>
          </div>

          <div className="box box-active text-center">
            <div>
                <div className="card__imgBg">
                    <MdPayments size="50" color='#6f42c1' /> 
                </div>
                <h3>Easily Manage</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum eveniet doloribus magni libero minima.</p>
            </div>
          </div>

          <div className="box text-center">
            <div>
                <div className="card__imgBg">
                    <BiMessageSquareDetail size="50" color="#e83e8c" /> 
                </div>
                <h3>Easily Manage</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum eveniet doloribus magni libero minima.</p>
            </div>
          </div>

        </div>
      </div>
      
      <div className="mt-5">
        <div className="showcase__screenshoots">
          <div className="d-flex-between">
            <div className="p-5 w-25">
              <h3 className='md-heading'>Applic Apps <br /> Screenshot </h3>
              <p>
                Lorem ipsum dolor sit amet, consecadipiscing elit, sed do eiusmod tempor incididunt ut ore et dolore magna aliqua. Quis ipsum suspendisse gravida. Risus commodo viverra maecenasan lacus vel facilisis.
              </p>
            </div>
            <div className="ml-auto">
              <img src={ScreenshootOne} alt="Screenshoot" style={{ width: "180px" }} className="mr-2" />
              <img src={ScreenshootTwo} alt="Screenshoot" style={{ width: "180px" }} className="mr-2" />
              <img src={ScreenshootThree} alt="Screenshoot" style={{ width: "180px" }} className="mr-2" />
              <img src={ScreenshootOne} alt="Screenshoot" style={{ width: "180px" }}  className="mr-2" />
            </div>
          </div>
        </div>
      </div>

      {/* linear-gradient(0deg, #f9218d 0%, #6c19f6 100%) */}
      
      <div className='showcase__pricing-bg p-5 mt-5' style={{ background: `linear-gradient(0deg, #f9218d 0%, #6c19f6 100%), url(${imageBackground})`, height: "60vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
        <h1 className='text-center text-white'>Choose Your very Best <br /> Pricing Plan</h1>
        <div className='d-flex-between' style={{ marginTop: "6rem" }}>
          <Card 
            years="2 Years" 
            pricing="$05 / month" 
            pricingInfo={["Increase Traffic 50%", "E-mail support", "10 free Optimization", "24/7 Support"]} 
          />
          <Card 
            years="2 Years" 
            pricing="$05 / month" 
            pricingInfo={["Increase Traffic 50%", "E-mail support", "10 free Optimization", "24/7 Support"]} 
          />
          <Card 
            years="2 Years" 
            pricing="$05 / month" 
            pricingInfo={["Increase Traffic 50%", "E-mail support", "10 free Optimization", "24/7 Support"]} 
            />
        </div>
      </div>

      <section className='mt-5' style={{ marginTop: "20rem" }}>
        <div className='showcase__pricing-bg p-5 mt-5' style={{ background: `linear-gradient(0deg, #f9218d 0%, #6c19f6 100%), url(${imageBackground})`, height: "60vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className='d-flex-between' style={{ marginTop: "6rem" }}>
            <div className='text-white'>
              <h2 className='md-heading'>
                Our App Available For Any Device Download now
              </h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fug.
              </p>
              <div className='mt-2'>
                <img src={Playstore} alt="" className='mr-3' />
                <img src={Appstore} alt="" />
              </div>
            </div>    

            <img src={DesktopShowcase} alt="DesktopShowcase" style={{ width: "50%" }} />
          </div>
        </div> 
      </section>

      <section className="showcase__collaboration d-flex-between mt-3" style={{ backgroundImage: `url(${ArrowSpring})`, backgroundRepeat: "no-repeat", backgroundPosition:  "right"}}>
          <div className="d-flex-between container p-5">
            <h2 className="md-heading">Say Hello To The Collaboration Hub</h2>
            <span>
              <a href="#" className="btn btn-primary border-5">
                Contact Us
              </a>
            </span>
          </div>
      </section>

      {/* <div style={{ marginTop: "400px" }}></div> */}

    </div>
  )
}

export default Home;
