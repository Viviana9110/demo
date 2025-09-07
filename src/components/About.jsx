export default function About() {
  return (
    <section className="py-30 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12">
        
        {/* Imagen elegante */}
        <div className="md:w-1/2">
          <img
            src="https://picsum.photos/600/400?travel"
            alt="Sobre nosotros"
            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2 text-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">
            Sobre nosotros
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Somos una agencia de viajes comprometida en brindarte las mejores 
            experiencias turísticas en Colombia y el mundo. Nuestro objetivo es 
            que cada cliente disfrute de un viaje seguro, cómodo y lleno de recuerdos inolvidables.
          </p>
          <p className="text-lg leading-relaxed">
            Con un equipo apasionado por el turismo, trabajamos día a día para 
            ofrecer paquetes personalizados, atención cercana y un servicio que 
            hará que tu viaje sea mucho más que unas simples vacaciones.
          </p>
        </div>
      </div>
    </section>
  );
}
