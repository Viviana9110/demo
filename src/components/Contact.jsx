export default function Contact() {
  return (
    <section className="py-30 bg-gray-50" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12">
          Contáctanos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 📩 Formulario */}
          <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Mensaje
              </label>
              <textarea
                rows="4"
                placeholder="Escribe tu mensaje..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Enviar mensaje
            </button>
          </form>

          {/* 📍 Información + mapa */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dirección</h3>
              <p className="text-gray-600">Calle 123 #45-67, Bogotá, Colombia</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Teléfono</h3>
              <p className="text-gray-600">+57 300 123 4567</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Correo</h3>
              <p className="text-gray-600">info@agenciadeviajes.com</p>
            </div>

            {/* 🌍 Google Maps embebido */}
            <iframe
              title="Mapa Agencia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.909030508407!2d-74.07209258459313!3d4.710988343037851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99c9f730b17f%3A0x2a2d43f8f1f8df!2sBogotá!5e0!3m2!1ses!2sco!4v1680000000000!5m2!1ses!2sco"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
