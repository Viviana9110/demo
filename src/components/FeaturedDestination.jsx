import { motion } from "framer-motion";
import Title from "./Title";

const FeaturedDestination = () => {
   const destinos = [
    {name: "Cartagena", image:"https://images.unsplash.com/photo-1633394027858-fff49145f120?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Cancún", image: "https://plus.unsplash.com/premium_photo-1697730254647-9b24f6ead436?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, 
    {name: "Río de Janeiro", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Madrid", image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  ];
  return (
    <section id="destinos" className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      <Title title='Featured Destination' subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'/>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
          {destinos.map((destino, index) => (
            <motion.div
              key={destino}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={destino.image}
                alt={destino}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">{destino.name}</h4>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Ver más
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
  )
}

export default FeaturedDestination