import { motion } from "framer-motion";
import Title from "./Title";
import { NavLink } from "react-router-dom";

const FeaturedDestination = () => {
  const destinos = [
    {
      name: "Perú",
      image:
        "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Descubre Machu Picchu, las maravillas del Cusco y la calidez de su gente.",
    },
    {
      name: "Brasil",
      image:
        "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "La energía de Río de Janeiro, las playas paradisíacas y la selva amazónica.",
    },
    {
      name: "Cuba",
      image:
        "https://images.unsplash.com/photo-1500759285222-a95626b934cb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Recorre La Habana, sus calles llenas de historia, música y tradición.",
    },
    {
      name: "Punta Cana",
      image:
        "https://images.unsplash.com/photo-1551126892-7cf2e2d9a4d9?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Arena blanca, mar turquesa y sol todo el año. ",
    },
  ];

  return (
    <section
      id="destinos"
      className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20"
    >
      <Title
        title="Featured Destination"
        subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        {destinos.map((destino, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={destino.image}
              alt={destino.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 pt-5">              
              <h4 className="font-playfair text-xl font-medium text-gray-800">{destino.name}</h4>
              <p className="flex items-center gap-1 text-sm">{destino.description}</p>
              
              <div className='flex items-center justify-between mt-4'>
                <p><span className='text-xl text-gray-800'>$</span></p>
                <NavLink to={"/destination"} className='px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer'>Reservar</NavLink>
            </div>
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestination;
