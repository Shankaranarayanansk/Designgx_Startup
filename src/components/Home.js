import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';
  
const LandingPage = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      
      <main
        ref={mainRef}
        className="flex-grow text-center py-20 bg-gray-100 flex flex-col justify-center items-center"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-bold mb-4">
          Empowering Your Business with
        </h1>
        <h2 className="text-3xl text-grey-600 font-semibold">
          <Typewriter
            words={['Innovative IT Solutions','Business Management','Mobile Application development','SEO development','Web Development','IT Solutions and Consluting']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      </main>
    </div>
  );
};

export default LandingPage;
