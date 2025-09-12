import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { assets } from "../assets/assets"

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { image: "https://images.unsplash.com/photo-1545330785-15356daae141?q=80&w=990&auto=format&fit=crop" },
    { image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=870&auto=format&fit=crop" },
    { image: "https://images.unsplash.com/photo-1570299437488-d430e1e677c7?q=80&w=725&auto=format&fit=crop" },
    { image: "https://destinations-cms-testing.s3.amazonaws.com/uploads/645bd8242733860025fd6a24-punta-cana-1.jpeg" },
  ];

  useEffect(() => {
    const totalSlides = slides.length;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const slider = document.getElementById("slider");
    const dots = document.querySelectorAll("#dot-indicators span");
    const totalSlides = slides.length;

    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.remove("bg-black");
      dot.classList.add("bg-black/20");
      if (i === currentIndex) {
        dot.classList.remove("bg-black/20");
        dot.classList.add("bg-black");
      }
    });
  }, [currentIndex, slides.length]);

  return (
    <>
      {/* Slider con formulario encima */}
      <div className="flex flex-col items-center relative">
        <div className="w-full h-screen overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            id="slider"
          >
            {slides.map((slide, i) => (
              <div key={i} className="w-full h-full flex-shrink-0 relative">
                <motion.img
                  key={i + "-img"}
                  src={slide.image}
                  className="w-full h-full object-cover"
                  alt={`slide-${i}`}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{
                    scale: i === currentIndex ? 1 : 1.05,
                    opacity: i === currentIndex ? 1 : 0,
                  }}
                  transition={{ duration: 1 }}
                />
              </div>
            ))}
          </div>

          
          {/* Formulario sobre el slider */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-4xl px-4">
          <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl text-center text-third font-bold mb-4 drop-shadow-lg"
        >
          Descubre tu próximo destino
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl text-center text-third mb-6 drop-shadow-md"
        >
          Viaja con nosotros a los mejores lugares del mundo
        </motion.p>

            <form className='bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

            <div>
                <div className='flex items-center gap-2'>
                   <img src={assets.calenderIcon} alt="" className='h-4'/>
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                <datalist id='destinations'>
                    
                </datalist>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                     <img src={assets.calenderIcon} alt="" className='h-4' />
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" className='h-4' />
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
            <img src={assets.searchIcon} alt="searchIcon" className='h-7' />
                <span>Search</span>
            </button>
        </form>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center mt-5 space-x-2" id="dot-indicators">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${i === 0 ? "bg-black" : "bg-black/20"}`}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
