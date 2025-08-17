const datos = {
  header: {
    logo: "/React-Landing/public/imagenes/gif-colombia.gif",
    titulo: "Viaja por Colombia",
    link: "#",
    nav: [
      {
        nombre: "Inicio",
        link: "/",
      },
      {
        nombre: "Nosotros",
        link: "/nosotros",
      },
      {
        nombre: "Destinos",
        link: "/destinos",
        subNav: [
          {
            nombre: "Andina",
            link: "/andina",
            subMenu: [
              { 
                 nombre: "Cali",
                 link: "/cali"
              },
              { 
                 nombre: "Bogotá",
                 link: "/bogota"
              },
              { 
                 nombre: "Santander",
                 link: "/santander"
              },
              { 
                 nombre: "Eje cafetero",
                 link: "/eje-cafetero"
              },
              { 
                 nombre: "Nevado Santa Isabel",
                 link: "/nevado-santa-isabel"
              },
            ],
          },
           {
            nombre: "Caribe",
            link: "/caribe",
            subMenu: [
              { 
                 nombre: "Barranquilla",
                 link: "/barranquilla"
              },
              { 
                 nombre: "Cartagena",
                 link: "/cartagena"
              },
              { 
                 nombre: "Santa Marta",
                 link: "/santa-marta"
              },
              { 
                 nombre: "Guajira",
                 link: "/guajira"
              },
            ],
          },
          {
            nombre: "Insular",
            link: "/insular",
            subMenu: [
              { 
                 nombre: "San Andrés",
                 link: "/san-andres"
              },
              { 
                 nombre: "Islas del Rosario",
                 link: "/rosario"
              },
            ],
          },
          {
            nombre: "Amazonía",
            link: "/amazonia",
            subMenu: [
              { 
                 nombre: "Amazonas",
                 link: "/amazonas"
              },
            ],
          },
          
          {
            nombre: "Orinoquía",
            link: "/orinoquia",
             subMenu: [
              { 
                 nombre: "Caño Cristales",
                 link: "/cano-cristales"
              },
            ],
          },
         
          {
            nombre: "Pacífico",
            link: "/pacifico",
            subMenu: [
              { 
                 nombre: "Chocó",
                 link: "/choco"
              },
            ],
          },
        ],
      },
      {
        nombre: "Contacto",
        link: "/contacto",
      },
    ],
  },
  destinos: [
    {
      imagen: "/React-Landing/public/imagenes/Bogota.webp",
      titulo: "Bogotá",
      descripcion:
        "Mezcla de historia y modernidad, se destacan la Candelaria, el Museo del Oro y Monserrate, con vistas increíbles.",
      subtitulo: "Nuestra hermosa capital",
    },
    {
      imagen: "/React-Landing/public/imagenes/Cartagena2.webp",
      titulo: "Cartagena",
      descripcion:
        "Es reconocida por su rica historia colonial, su arquitectura conservada y su papel clave durante la época de la colonización española.",
      subtitulo: "Excelentes playas, cultura vibrante y vida nocturna",
    },
    {
      imagen: "/React-Landing/public/imagenes/Cali.webp",
      titulo: "Cali",
      descripcion:
        "La música y el baile son parte de la vida cotidiana, además el Barrio San Antonio ofrece una experiencia cultural y bohemia.",
      subtitulo: "Capital mundial de la salsa",
    },
    {
      imagen: "/React-Landing/public/imagenes/choco.webp",
      titulo: "Chocó",
      descripcion:
        "Alberga selvas tropicales vírgenes, manglares, ríos cristalinos y una abundante vida silvestre.",
      subtitulo: "Avistamiento de ballenas",
    },
    {
      imagen: "/React-Landing/public/imagenes/Barranquilla.webp",
      titulo: "Barranquilla",
      descripcion:
        "Cuna del Carnaval más famoso del país, cultura caribeña, historia y modernidad bañados por el río Magdalena y el océano atlántico. ",
      subtitulo: "'Puerta de oro de Colombia'",
    },
    {
      imagen: "/React-Landing/public/imagenes/amazonas.webp",
      titulo: "Amazonas",
      descripcion:
        "Actividades como avistamiento de delfines rosados, senderismo en la selva, y visitas a comunidades indígenas. También permite explorar la triple frontera con Perú y Brasil.",
      subtitulo: "Leticia, ideal para el ecoturismo",
    },
    {
      imagen: "/React-Landing/public/imagenes/sanandres.webp",
      titulo: "San Andrés",
      descripcion:
        "Islas paradisíacas con mar multicolor, perfectas para buceo, snorkel y descanso.",
      subtitulo: "Conoce nuestro mar de los 7 colores",
    },
    {
      imagen: "/React-Landing/public/imagenes/santamarta.webp",
      titulo: "Santa Marta",
      descripcion:
        "Combina playas, selva y cultura indígena. Punto de partida hacia la Ciudad Perdida.",
      subtitulo: "Lugares paradisíacos rodeados de mucha historia",
    },
    {
      imagen: "/React-Landing/public/imagenes/baru.webp",
      titulo: "Isla Barú e islas del Rosario",
      descripcion:
        "Playas de arena blanca y aguas cristalinas cerca de Cartagena. Ideales para relajarse o practicar deportes acuáticos.",
      subtitulo: "Date el placer de conocer estos lugares",
    },
    {
      imagen: "/React-Landing/public/imagenes/ejecafetero.webp",
      titulo: "Eje cafetero",
      descripcion:
        "Sus coloridos pueblos como Salento, los recorridos por fincas de café, y maravillas naturales como el Valle de Cocora, lo hacen perfecto para el ecoturismo y el agroturismo.",
      subtitulo: "Espectacular recorrido por Quindío, Caldas y Risaralda",
    },
    {
      imagen: "/React-Landing/public/imagenes/santander.webp",
      titulo: "Santander",
      descripcion:
        "Considerado uno de los más bonitos de Colombia, ofrece un ambiente colonial encantador y rutas de senderismo como el Camino Real.",
      subtitulo: "Turismo de aventura",
    },
    {
      imagen: "/React-Landing/public/imagenes/cano2.webp",
      titulo: "Caño cristales",
      descripcion:
        "Es un fenómeno natural que ocurre entre julio y noviembre, cuando algas especiales tiñen el agua con colores vibrantes, región rica en biodiversidad.",
      subtitulo: "El río de los cinco colores",
    },
    {
      imagen: "/React-Landing/public/imagenes/guajira2.webp",
      titulo: "La Guajira",
      descripcion:
        "Destinos como Cabo de la Vela y Punta Gallinas ofrecen paisajes únicos donde el mar Caribe se encuentra con el desierto. Es un lugar para el turismo cultural, étnico y de aventura.",
      subtitulo: "Hogar del pueblo indígena Wayúu.",
    },
    {
      imagen: "/React-Landing/public/imagenes/nevado.webp",
      titulo: "Nevado de Santa Isabel ",
      descripcion:
        "Forma parte del Parque Nacional Natural Los Nevados, hogar de frailejones, cóndores, venados y otras especies únicas del ecosistema de páramo.",
      subtitulo: "El ascenso es accesible para principiantes.",
    },
  ],
};

export default datos;



