import JoseAcevedo from '../assets/images/JoseAcevedo.jpg'
import MascotaJose from '../assets/images/MascotaJose.jpeg'
import LuisBarnabo from '../assets/images/LuisBarnabo.jpeg'
import MascotaLuis from '../assets/images/MascotaLuis.jpeg'

const teamData = [
    {
        id: 'luis',
        nombre: 'Luis Victor Hugo',
        apellido: 'Barnabó',
        habilidades: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
        proyectos: [
      {
        id: "proj-luis-1",
        nombre: "E-commerce de Ropa",
        descripcionCorta: "Plataforma de compraventa de ropa con carrito y pasarela de pago.",
        imagen: "https://picsum.photos/seed/luisproj1/300/200", // Usa Picsum para imágenes de relleno
        tecnologiasUsadas: ["React", "Node.js", "MongoDB", "Stripe"],
        linkDemo: "https://demo.ecommerce.com",
        linkRepo: "https://github.com/luisg/ecommerce",
        fecha: "2023-01-15"
      },
      {
        id: "proj-luis-2",
        nombre: "Sistema de Inventario",
        descripcionCorta: "Aplicación para gestionar inventario en pequeños negocios.",
        imagen: "https://picsum.photos/seed/luisproj2/300/200",
        tecnologiasUsadas: ["Vue.js", "Firebase", "CSS Modules"],
        linkDemo: "https://demo.inventory.com",
        linkRepo: "https://github.com/luisg/inventory-app",
        fecha: "2023-04-20"
      },
      {
        id: "proj-luis-3",
        nombre: "Clon de Twitter (básico)",
        descripcionCorta: "Implementación básica de una red social tipo Twitter.",
        imagen: "https://picsum.photos/seed/luisproj3/300/200",
        tecnologiasUsadas: ["React", "Supabase", "TailwindCSS"],
        linkDemo: "https://demo.twitterclone.com",
        linkRepo: "https://github.com/luisg/twitter-clone",
        fecha: "2023-09-10"
      }
    ],
    tecnologias: [
      'html5', // Usaremos nombres para los iconos
      'css3',
      'react',
      'mysql',
      'javascript',
      'android',
      'csharp'
    ],
    imagenPerfil: LuisBarnabo,
    imagenMascota: MascotaLuis,
    },
    {
    id: 'jose', // Propiedad para usar en la URL
    nombre: 'José',
    apellido: 'Acevedo',
    habilidades: ['HTML', 'CSS', 'MySQL', 'Photoshop', 'Illustrator', 'AfterEffects'],
    proyectos: [
      {
        id: "proj-jose-1",
        nombre: "Rediseño de Landing Page",
        descripcionCorta: "Diseño y maquetación de una landing page moderna y responsiva.",
        imagen: "https://picsum.photos/seed/joseproj1/300/200",
        tecnologiasUsadas: ["HTML", "CSS", "JavaScript", "Sass"],
        linkDemo: "https://demo.landing.com",
        linkRepo: "https://github.com/josep/landing-redesign",
        fecha: "2022-11-01"
      },
      {
        id: "proj-jose-2",
        nombre: "Prototipo de App Móvil",
        descripcionCorta: "Prototipo interactivo de una aplicación de fitness para Android/iOS.",
        imagen: "https://picsum.photos/seed/joseproj2/300/200",
        tecnologiasUsadas: ["Figma", "Principle", "After Effects"],
        linkDemo: "https://demo.mobileapp.com",
        linkRepo: "https://github.com/josep/fitness-app-prototype",
        fecha: "2023-06-25"
      },
      {
        id: "proj-jose-3",
        nombre: "Componentes UI en Storybook",
        descripcionCorta: "Librería de componentes UI reusable con documentación.",
        imagen: "https://picsum.photos/seed/joseproj3/300/200",
        tecnologiasUsadas: ["React", "Storybook", "Styled Components"],
        linkDemo: "https://demo.storybook.com",
        linkRepo: "https://github.com/josep/ui-components",
        fecha: "2024-01-30"
      }
    ],
    tecnologias: [
      'html5',
      'css3',
      'mysql',
      'photoshop',
      'illustrator',
      'aftereffects'
    ],
    imagenPerfil: JoseAcevedo,
    imagenMascota: MascotaJose,
  }
]

export default teamData