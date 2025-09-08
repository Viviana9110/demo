import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        navbar: {
          home: "Inicio",
          destinos: "Destinos",
          about: "Sobre Nosotros",
          contact: "Contacto",
          login: "Iniciar sesión"
        },
        hero: {
          title: "Explora Colombia con nosotros",
          subtitle: "Los mejores destinos turísticos a tu alcance"
        }
      }
    },
    en: {
      translation: {
        navbar: {
          home: "Home",
          destinos: "Destinations",
          about: "About Us",
          contact: "Contact",
          login: "Login"
        },
        hero: {
          title: "Explore Colombia with us",
          subtitle: "The best tourist destinations at your fingertips"
        }
      }
    },
    pt: {
      translation: {
        navbar: {
          home: "Início",
          destinos: "Destinos",
          about: "Sobre Nós",
          contact: "Contato",
          login: "Entrar"
        },
        hero: {
          title: "Explore a Colômbia conosco",
          subtitle: "Os melhores destinos turísticos ao seu alcance"
        }
      }
    }
  }, 
  lng: "es", // 👈 Idioma por defecto
  fallbackLng: "es",
  interpolation: { escapeValue: false }
});

export default i18n;
