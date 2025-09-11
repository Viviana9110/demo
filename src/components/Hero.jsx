import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1545330785-15356daae141?q=80&w=990&auto=format&fit=crop",
      title: "Vive Perú, una experiencia única",
      description: "Descubre Machu Picchu, las maravillas del Cusco y la calidez de su gente. Un destino lleno de historia, cultura y paisajes que te enamorarán. ¡Prepárate para tu próxima aventura en Perú!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=870&auto=format&fit=crop",
      title: "Brasil: alegría sin fin",
      description: "Déjate llevar por la energía de Río de Janeiro, las playas paradisíacas y la selva amazónica. Brasil te espera con su música, color y sabor en cada rincón.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1570299437488-d430e1e677c7?q=80&w=725&auto=format&fit=crop",
      title: "Cuba: historia y encanto caribeño",
      description: "Recorre La Habana, sus calles llenas de historia, música y tradición. Disfruta de playas cristalinas y la hospitalidad única del pueblo cubano.",
    },
    {
      image:
        "https://destinations-cms-testing.s3.amazonaws.com/uploads/645bd8242733860025fd6a24-punta-cana-1.jpeg",
      title: "Punta Cana: tu paraíso soñado",
      description: "Arena blanca, mar turquesa y sol todo el año. Vive unas vacaciones inolvidables en el corazón del Caribe con todo incluido para tu confort.",
    },
  ];

  useEffect(() => {
    const totalSlides = slides.length;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
      {/* Hero Section */}
    
      <div className="flex flex-col items-center">
        <div className="w-full h-screen overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            id="slider"
          >
            {slides.map((slide, i) => (
              <div key={i} className="w-full h-full flex-shrink-0 relative">
                {/* Imagen con animación de zoom */}
                <motion.img
                  key={i + "-img"}
                  src={slide.image}
                  className="w-full h-full object-cover"
                  alt={slide.title}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{
                    scale: i === currentIndex ? 1 : 1.05,
                    opacity: i === currentIndex ? 1 : 0,
                  }}
                  transition={{ duration: 1 }}
                />

                {/* Overlay con animación */}
                {i === currentIndex && (
                  <motion.div
                    key={i + "-text"}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.8 }}
                    className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-6"
                  >
                    <motion.h3
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="text-3xl font-bold"
                    >
                      {slide.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="text-lg"
                    >
                      {slide.description}
                    </motion.p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center mt-5 space-x-2" id="dot-indicators">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === 0 ? "bg-black" : "bg-black/20"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
