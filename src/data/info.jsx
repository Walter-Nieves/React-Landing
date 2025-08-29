import { Link } from "react-router-dom";

const datos = {
  header: {
    logo: "/React-Landing/imagenes/gif-colombia.gif",
    titulo: "Viaja por Colombia",
    // link: "#",
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
                link: "/cali",
              },
              {
                nombre: "Bogotá",
                link: "/bogota",
              },
              {
                nombre: "Santander",
                link: "/santander",
              },
              {
                nombre: "Eje cafetero",
                link: "/eje-cafetero",
              },
              {
                nombre: "Nevado Santa Isabel",
                link: "/nevado-santa-isabel",
              },
            ],
          },
          {
            nombre: "Caribe",
            link: "/caribe",
            subMenu: [
              {
                nombre: "Barranquilla",
                link: "/barranquilla",
              },
              {
                nombre: "Cartagena",
                link: "/cartagena",
              },
              {
                nombre: "Santa Marta",
                link: "/santa-marta",
              },
              {
                nombre: "Guajira",
                link: "/guajira",
              },
            ],
          },
          {
            nombre: "Insular",
            link: "/insular",
            subMenu: [
              {
                nombre: "San Andrés",
                link: "/san-andres",
              },
              {
                nombre: "Islas del Rosario",
                link: "/rosario",
              },
            ],
          },
          {
            nombre: "Amazónica",
            link: "/amazonia",
            subMenu: [
              {
                nombre: "Amazonas",
                link: "/amazonas",
              },
            ],
          },

          {
            nombre: "Orinoquía",
            link: "/orinoquia",
            subMenu: [
              {
                nombre: "Caño Cristales",
                link: "/cano-cristales",
              },
            ],
          },

          {
            nombre: "Pacífica",
            link: "/pacifico",
            subMenu: [
              {
                nombre: "Chocó",
                link: "/choco",
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
  nosotros: [
    {
      imagen: "/React-Landing/imagenes/QueEsLaColombianidad_web_1-scaled.webp",
      titulo: " ¿Quienes somos?",
      subtitulo: "Somos tu viaje ideal en Colombia",
      parrafo1:
        "Ayudamos a turistas y viajeros de Colombia y el mundo a planear y ejecutar su viaje perfecto, de acuerdo con sus gustos, preferencias,limitaciones de tiempo y presupuestos.",
      parrafo2:
        " Los Travel Planners (agentes de viaje especializados) estarán dispuestos a organizar los mejores viajes a Colombia, encontrando diferentes opciones, para tener una experiencia única.",
      parrafo3:
        "En viaja por Colombia buscamos que nuestro equipo brille por sus múltiples talentos, estamos cada vez más seguros que cada ser humano es único y tiene algo maravilloso para dar al mundo.",
      subtitulo2: "¡Somos expertos en hacer realidad tus viajes!",
      parrafo4:
        "Conectamos sueños con destinos inolvidables. Más que una agencia, somos tus cómplices de viaje, ofreciendo atención personalizada, experiencias únicas y total confianza en cada paso del camino.",
      titulo2: "Atención rápida y personalizada",
      porcentaje2: "100%",
      titulo3: "Viajeros frecuentes",
      porcentaje3: "70%",
      titulo4: "Viajeros que nos recomiendan",
      porcentaje4: "100%",
      imagen2: "/React-Landing/imagenes/jeep.webp",
      subtitulo3: " ¿Por qué elegirnos?",
      parrafo5:
        "Somos una red de viajeros enamorados de Colombia, conocedores de cada uno de sus rincones, que ayudan a otros viajeros a escoger los mejores destinos.",
    },
  ],
  valores: [
    {
      icono: "/React-Landing/icons/star-fill.svg",
      titulo: "Misión",
      texto:
       "Nuestra misión es diseñar y ofrecer servicios turísticos de alta calidad que inspiren confianza y seguridad en cada cliente. Buscamos promover experiencias responsables y sostenibles que valoren la diversidad cultural y natural de los destinos. Trabajamos con ética y compromiso, creando momentos memorables que fortalezcan el amor por los viajes y el respeto por el planeta."
    },
    {
      icono: "/React-Landing/icons/tv-fill.svg",
      titulo: "Visión",
      texto:
       "Queremos consolidarnos como una empresa referente en turismo, reconocida tanto nacional como internacionalmente por la innovación, la confianza y la cercanía con nuestros viajeros. Aspiramos a transformar cada recorrido en una experiencia única que motive a descubrir el mundo con responsabilidad, generando un impacto positivo en la sociedad y en el medio ambiente."
    },
    {
      icono: "/React-Landing/icons/people-fill.svg",
      titulo: "Lo que somos",
      texto:
        "Somos una agencia turística comprometida con crear experiencias que respeten la cultura y el entorno natural de cada lugar. Nuestro equipo está integrado por guías y asesores con amplia trayectoria, que acompañan a cada viajero en su camino de descubrimiento. Creemos que un viaje debe emocionar, enseñar y dejar recuerdos que enriquezcan la vida y fomenten la unión con otros.",
    },
  ],
  elegirnos: [
    {
      icono: "/React-Landing/icons/headset.svg",
      titulo: "Tecnología",
      parrafo:
        "Contamos con herramientas tecnológicas que nos permiten brindarte un servicio óptimo.",
    },
    {
      icono: "/React-Landing/icons/person-check-fill.svg",
      titulo: "Planes",
      parrafo:
        "Coordinamos todos los detalles de tu viaje, desde el alojamiento hasta el transporte y las actividades.",
    },
    {
      icono: "/React-Landing/icons/person-square.svg",
      titulo: "Atención",
      parrafo:
        "Tenemos diversos canales de contacto, para que puedas planear tu viaje en Colombia como siempre lo has soñado.",
    },
    {
      icono: "/React-Landing/icons/person-arms-up.svg",
      titulo: "Compañia",
      parrafo:
        "Te acompañamos durante tu estadía para resolver cualquier duda que encuentres, logrando que disfrutes tu viaje al máximo.",
    },
  ],
  destinos: [
    {
      imagen: "/React-Landing/imagenes/Bogota.webp",
      titulo: "Bogotá",
      descripcion:
        "Mezcla de historia y modernidad, se destacan la Candelaria, el Museo del Oro y Monserrate, con vistas increíbles.",
      subtitulo: "Nuestra hermosa capital",
    },
    {
      imagen: "/React-Landing/imagenes/cartagena2.webp",
      titulo: "Cartagena",
      descripcion:
        "Es reconocida por su rica historia colonial, su arquitectura conservada y su papel clave durante la época de la colonización española.",
      subtitulo: "Excelentes playas, cultura vibrante y vida nocturna",
    },
    {
      imagen: "/React-Landing/imagenes/cali2.webp",
      titulo: "Cali",
      descripcion:
        "La música y el baile son parte de la vida cotidiana, además el Barrio San Antonio ofrece una experiencia cultural y bohemia.",
      subtitulo: "Capital mundial de la salsa",
    },
    {
      imagen: "/React-Landing/imagenes/choco.webp",
      titulo: "Chocó",
      descripcion:
        "Alberga selvas tropicales vírgenes, manglares, ríos cristalinos y una abundante vida silvestre.",
      subtitulo: "Avistamiento de ballenas",
    },
    {
      imagen: "/React-Landing/imagenes/Barranquilla.webp",
      titulo: "Barranquilla",
      descripcion:
        "Cuna del Carnaval más famoso del país, cultura caribeña, historia y modernidad bañados por el río Magdalena y el océano atlántico. ",
      subtitulo: "'Puerta de oro de Colombia'",
    },
    {
      imagen: "/React-Landing/imagenes/amazonas.webp",
      titulo: "Amazonas",
      descripcion:
        "Actividades como avistamiento de delfines rosados, senderismo en la selva, y visitas a comunidades indígenas. También permite explorar la triple frontera con Perú y Brasil.",
      subtitulo: "Leticia, ideal para el ecoturismo",
    },
    {
      imagen: "/React-Landing/imagenes/sanandres.webp",
      titulo: "San Andrés",
      descripcion:
        "Islas paradisíacas con mar multicolor, perfectas para buceo, snorkel y descanso.",
      subtitulo: "Conoce nuestro mar de los 7 colores",
    },
    {
      imagen: "/React-Landing/imagenes/santamarta.webp",
      titulo: "Santa Marta",
      descripcion:
        "Combina playas, selva y cultura indígena. Punto de partida hacia la Ciudad Perdida.",
      subtitulo: "Lugares paradisíacos rodeados de mucha historia",
    },
    {
      imagen: "/React-Landing/imagenes/baru.webp",
      titulo: "Isla Barú e islas del Rosario",
      descripcion:
        "Playas de arena blanca y aguas cristalinas cerca de Cartagena. Ideales para relajarse o practicar deportes acuáticos.",
      subtitulo: "Date el placer de conocer estos lugares",
    },
    {
      imagen: "/React-Landing/imagenes/ejecafetero.webp",
      titulo: "Eje cafetero",
      descripcion:
        "Sus coloridos pueblos como Salento, los recorridos por fincas de café, y maravillas naturales como el Valle de Cocora, lo hacen perfecto para el ecoturismo y el agroturismo.",
      subtitulo: "Espectacular recorrido por Quindío, Caldas y Risaralda",
    },
    {
      imagen: "/React-Landing/imagenes/santander.webp",
      titulo: "Santander",
      descripcion:
        "Considerado uno de los más bonitos de Colombia, ofrece un ambiente colonial encantador y rutas de senderismo como el Camino Real.",
      subtitulo: "Turismo de aventura",
    },
    {
      imagen: "/React-Landing/imagenes/cano2.webp",
      titulo: "Caño cristales",
      descripcion:
        "Es un fenómeno natural que ocurre entre julio y noviembre, cuando algas especiales tiñen el agua con colores vibrantes, región rica en biodiversidad.",
      subtitulo: "El río de los cinco colores",
    },
    {
      imagen: "/React-Landing/imagenes/guajira4.webp",
      titulo: "La Guajira",
      descripcion:
        "Destinos como Cabo de la Vela y Punta Gallinas ofrecen paisajes únicos donde el mar Caribe se encuentra con el desierto. Es un lugar para el turismo cultural, étnico y de aventura.",
      subtitulo: "Hogar del pueblo indígena Wayúu.",
    },
    {
      imagen: "/React-Landing/imagenes/nevado.webp",
      titulo: "Nevado de Santa Isabel ",
      descripcion:
        "Forma parte del Parque Nacional Natural Los Nevados, hogar de frailejones, cóndores, venados y otras especies únicas del ecosistema de páramo.",
      subtitulo: "El ascenso es accesible para principiantes.",
    },
  ],
  destinos2: {
    imagen1: "/React-Landing/imagenes/colombia2.webp",
    titulo1: "Conoce nuestro hermoso",
    titulo2: "Colombia",
    parrafo1: (
      <>
        La{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/andina"
        >
          Región Andina
        </Link>{" "}
        es el corazón cultural y económico de Colombia. Aquí puedes recorrer{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/andina/bogota"
        >
          Bogotá
        </Link>
        , la capital del país con su historia y modernidad; disfrutar de la
        alegría y la salsa en{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/andina/cali"
        >
          Cali
        </Link>
        ; vivir la aventura extrema en{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/andina/santander"
        >
          Santander
        </Link>
        ; maravillarte con las montañas y cafetales del{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/andina/eje-cafetero"
        >
          Eje Cafetero
        </Link>
        ; y explorar la majestuosidad del{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/andina/nevado-santa-isabel"
        >
          Nevado de Santa Isabel
        </Link>
        .
      </>
    ),
    parrafo2: (
      <>
        La{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/caribe"
        >
          Región Caribe
        </Link>{" "}
        es sinónimo de playas y alegría. En{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/caribe/barranquilla"
        >
          Barranquilla
        </Link>{" "}
        la fiesta nunca termina; en{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/caribe/cartagena"
        >
          Cartagena
        </Link>{" "}
        la historia colonial se mezcla con el mar Caribe;
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/caribe/santa-marta"
        >
          Santa Marta
        </Link>{" "}
        sorprende con su cercanía a la Sierra Nevada; y la{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/caribe/guajira"
        >
          Guajira
        </Link>{" "}
        deslumbra con sus desiertos, playas vírgenes y cultura wayuu.
      </>
    ),
    parrafo3: (
      <>
        La{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/insular"
        >
          Región Insular
        </Link>{" "}
        ofrece islas paradisíacas de aguas cristalinas. En{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/insular/san-andres"
        >
          San Andrés
        </Link>{" "}
        disfrutarás de playas de siete colores y arrecifes de coral, mientras
        que las{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/insular/rosario"
        >
          Islas del Rosario
        </Link>{" "}
        son un tesoro natural perfecto para el buceo y el descanso.
      </>
    ),
    parrafo4: (
      <>
        La{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/amazonia"
        >
          Región Amazónica
        </Link>{" "}
        es un paraíso de biodiversidad y culturas ancestrales. El{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/amazonia/amazonas"
        >
          Amazonas
        </Link>{" "}
        te invita a recorrer sus ríos majestuosos, convivir con comunidades
        indígenas y adentrarte en la selva más grande del mundo.
      </>
    ),
    parrafo5: (
      <>
        La{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/orinoquia"
        >
          Región Orinoquía
        </Link>{" "}
        deslumbra con sus llanuras infinitas y paisajes únicos. En{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/orinoquia/cano-cristales"
        >
          Caño Cristales
        </Link>
        , conocido como el "río de los cinco colores", vivirás una experiencia
        natural inigualable rodeada de magia y biodiversidad.
      </>
    ),
    parrafo6: (
      <>
        La{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/pacifico"
        >
          Región Pacífica
        </Link>{" "}
        es naturaleza pura y cultura afrocolombiana. En el{" "}
        <Link
          className="text-blue-400 hover:underline hover:text-blue-500"
          to="/destinos/pacifico/choco"
        >
          Chocó
        </Link>{" "}
        encontrarás selvas exuberantes, playas vírgenes, avistamiento de
        ballenas y una tradición musical llena de sabor y alegría.
      </>
    ),
    parrafo7: (
      <>
        En <strong>Viaja por Colombia</strong> nos apasiona mostrarte lo mejor
        de nuestro país, por eso nos encargamos de cada detalle para que tu
        única preocupación sea disfrutar. Gestionamos tus tiquetes aéreos,
        reservamos los mejores hoteles, diseñamos tours únicos y te ofrecemos
        precios accesibles para todos los presupuestos. Con nosotros tendrás la
        seguridad de un viaje organizado, cómodo y lleno de experiencias
        inolvidables. ¡Deja todo en nuestras manos y atrévete a descubrir
        Colombia como nunca antes!
      </>
    ),
    parrafo8: (
      <>
        Haz clic{" "}
        <Link
          to="/contacto"
          className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
        >
          {" "}
          aquí
        </Link>{" "}
        y contáctanos para que podamos asesorarte y acompañarte en tu próxima
        aventura.
      </>
    ),
  },
  regiones: [
    {
      imagen: "/React-Landing/imagenes/andina.webp",
      titulo: "Region Andina",
      slug: "andina",
      parrafo1: (
        <>
          La <strong>Región Andina</strong> es considerada el corazón cultural,
          histórico y económico de Colombia. Rodeada de majestuosas cordilleras
          y paisajes de montaña, esta región ofrece una diversidad de
          experiencias que van desde modernas metrópolis hasta pueblos
          coloniales llenos de tradición. Viajar por la Andina significa
          encontrarse con climas variados, gastronomía típica, arquitectura
          histórica y una riqueza cultural que no se encuentra en ninguna otra
          parte del país.
        </>
      ),
      parrafo2: (
        <>
          En{" "}
          <Link
            to="/destinos/andina/bogota"
            className="text-blue-400 hover:underline hover:text-blue-500"
          >
            Bogotá
          </Link>
          , la capital de Colombia, se combinan la modernidad y la historia en
          perfecta armonía. La ciudad ofrece museos de talla mundial como el
          Museo del Oro, barrios coloniales como La Candelaria y una vibrante
          vida nocturna. Además, su cercanía con atractivos naturales como
          Monserrate la convierten en un destino que mezcla cultura,
          espiritualidad y entretenimiento en un solo lugar.
        </>
      ),
      parrafo3: (
        <>
          En{" "}
          <Link
            to="/destinos/andina/cali"
            className="text-blue-400 hover:underline hover:text-blue-500"
          >
            Cali
          </Link>
          , conocida como la capital mundial de la salsa, la música y la alegría
          están presentes en cada rincón. Sus discotecas, festivales y calles
          llenas de ritmo invitan a los viajeros a dejarse llevar por el sabor
          del Pacífico y el calor de su gente. Además, Cali también ofrece
          experiencias culturales, gastronómicas y paisajes naturales que la
          convierten en un destino vibrante y diverso.
        </>
      ),
      parrafo4: (
        <>
          El{" "}
          <Link
            to="/destinos/andina/eje-cafetero"
            className="text-blue-400 hover:underline hover:text-blue-500"
          >
            Eje Cafetero
          </Link>{" "}
          es uno de los destinos más emblemáticos de Colombia gracias a sus
          paisajes de montañas cubiertas de cafetales, pueblos llenos de color y
          una cultura que gira alrededor del café. Aquí los viajeros pueden
          recorrer haciendas cafeteras, disfrutar de miradores naturales
          impresionantes y vivir la experiencia de conocer el proceso del café
          colombiano, considerado el mejor del mundo.
        </>
      ),
      parrafo5: (
        <>
          En{" "}
          <Link
            to="/destinos/andina/santander"
            className="text-blue-400 hover:underline hover:text-blue-500"
          >
            Santander
          </Link>{" "}
          la aventura se convierte en protagonista. Este departamento es famoso
          por sus deportes extremos como parapente, rafting y escalada, además
          de sus paisajes imponentes como el Cañón del Chicamocha. Santander
          combina la adrenalina con la cultura, ya que también es hogar de
          pueblos coloniales llenos de historia que muestran lo mejor de la
          tradición andina.
        </>
      ),
      parrafo6: (
        <>
          Para los amantes de la naturaleza y las experiencias únicas, el{" "}
          <Link
            to="/destinos/andina/nevado-santa-isabel"
            className="text-blue-400 hover:underline hover:text-blue-500"
          >
            Nevado de Santa Isabel
          </Link>{" "}
          es un destino imperdible. Este imponente glaciar, ubicado en el Parque
          Nacional Natural Los Nevados, ofrece una experiencia inolvidable entre
          páramos, lagunas y montañas cubiertas de nieve. Es un lugar ideal para
          quienes buscan conexión con la naturaleza, caminatas de aventura y un
          encuentro directo con la majestuosidad de los Andes colombianos.
        </>
      ),
      parrafo7: (
        <>
          En <strong>Viaja por Colombia</strong> estamos comprometidos en
          ofrecerte un servicio completo y de calidad. Te invitamos a registrar
          tus datos en nuestra sección de
          <Link
            to="/contacto"
            className="text-blue-400 hover:underline hover:text-blue-500"
          >
            {" "}
            contacto{" "}
          </Link>
          para que podamos asesorarte de manera personalizada. Nuestros paquetes
          todo incluido garantizan que cada detalle de tu viaje esté cubierto:
          desde los tiquetes aéreos y el hospedaje hasta los tours y traslados,
          brindándote comodidad, confianza y una experiencia de viaje organizada
          de principio a fin.
        </>
      ),
      parrafo8: (
        <>
          Haz clic{" "}
          <Link
            to="/contacto"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            {" "}
            aquí
          </Link>{" "}
          y contáctanos para que podamos asesorarte y acompañarte en tu próxima
          aventura.
        </>
      ),
      lugares: [
        {
          imagen: "/React-Landing/imagenes/Cali.webp",
          imagen2: "/React-Landing/imagenes/calibus.webp",
          titulo: "Cali",
          slug: "cali",
          parrafo1:
            "Cali, reconocida como la capital mundial de la salsa, es una ciudad vibrante que combina modernidad, cultura y tradición. Su ambiente cálido y alegre se refleja tanto en sus calles como en su gente, lo que convierte a esta ciudad del Valle del Cauca en un destino imperdible para quienes buscan ritmo, sabor y hospitalidad.",
          parrafo2:
            "Entre sus lugares más representativos destaca el imponente Cristo Rey, un monumento que se alza sobre las montañas y ofrece una vista panorámica inigualable de toda la ciudad. A su lado, el Zoológico de Cali es uno de los más importantes de Latinoamérica, hogar de especies nacionales e internacionales que lo convierten en un espacio ideal para toda la familia.",
          parrafo3:
            "La Iglesia de San Antonio, con su estilo colonial y rodeada de calles empedradas, invita a recorrer uno de los barrios más tradicionales de Cali. Muy cerca, el moderno Boulevard del Río ofrece un espacio urbano renovado, perfecto para pasear, disfrutar de actividades culturales al aire libre y deleitarse con la gastronomía caleña.",
          parrafo4:
            "Otro de los sitios imperdibles es el Mirador de Sebastián de Belalcázar, desde donde se puede contemplar toda la ciudad al atardecer. Esta estatua rinde homenaje al fundador de Cali y se ha convertido en uno de los lugares más visitados por turistas y locales que buscan una vista privilegiada.",
          parrafo5:
            "Más allá de los íconos turísticos, cada barrio de Cali tiene un encanto propio. Sus calles están llenas de murales coloridos, música en vivo, restaurantes típicos y espacios culturales que reflejan la identidad caleña. Aquí, la salsa no solo se baila en discotecas, sino que también se vive en cada esquina, convirtiéndose en un patrimonio cultural inmaterial de la ciudad.",
          parrafo6:
            "Para recorrer cómodamente todos estos atractivos, la ciudad cuenta con un bus turístico especial que realiza paradas en los principales sitios de interés. Este servicio permite a los visitantes subir y bajar en diferentes destinos, conocer la historia con guías especializados y disfrutar de Cali a su propio ritmo, garantizando una experiencia organizada y completa.",
          parrafo7: (
            <>
              En <strong>Viaja por Colombia</strong> estamos comprometidos en
              ofrecerte un servicio completo y de calidad. Te invitamos a
              registrar tus datos en nuestra sección de
              <Link
                to="/contacto"
                className="text-blue-400 hover:underline hover:text-blue-500"
              >
                {" "}
                contacto{" "}
              </Link>
              para que podamos asesorarte de manera personalizada. Nuestros
              paquetes todo incluido garantizan que cada detalle de tu viaje
              esté cubierto: desde los tiquetes aéreos y el hospedaje hasta los
              tours y traslados, brindándote comodidad, confianza y una
              experiencia de viaje organizada de principio a fin.
            </>
          ),
          parrafo8: (
            <>
              Haz clic{" "}
              <Link
                to="/contacto"
                className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
              >
                {" "}
                aquí
              </Link>{" "}
              y contáctanos para que podamos asesorarte y acompañarte en tu
              próxima aventura.
            </>
          ),
        },
        {
          imagen: "/React-Landing/imagenes/monserrate.webp",
          imagen2: "/React-Landing/imagenes/Jaime-Duque.webp",
          titulo: "Bogotá",
          slug: "bogota",
          parrafo1:
            "Bogotá, la capital de Colombia, es una ciudad que combina historia, modernidad y cultura en un mismo lugar. Ubicada a más de 2.600 metros sobre el nivel del mar, ofrece a sus visitantes un clima fresco y una atmósfera cosmopolita que refleja la diversidad del país. Es un destino que sorprende por su dinamismo, su riqueza cultural y la calidez de su gente.",
          parrafo2:
            "Uno de los lugares más emblemáticos es el cerro de Monserrate, que se eleva sobre la ciudad y permite disfrutar de una vista panorámica inigualable. Se puede llegar caminando, en teleférico o funicular, y en la cima aguardan su iglesia, restaurantes y miradores que convierten la visita en una experiencia inolvidable.",
          parrafo3:
            "El centro histórico, conocido como La Candelaria, es un viaje al pasado con sus calles empedradas, casas coloniales y museos de gran importancia. Entre ellos destaca el Museo del Oro, que alberga la colección prehispánica más grande del mundo en piezas de orfebrería, y el Museo Botero, con obras del maestro Fernando Botero y artistas internacionales.",
          parrafo4:
            "La ciudad también es reconocida por su vida cultural y artística. Bogotá cuenta con teatros, galerías, festivales de música y una vibrante agenda cultural durante todo el año. Además, su gastronomía ofrece desde platos típicos como el ajiaco hasta experiencias gourmet de talla internacional, consolidando a la capital como un destino para todos los gustos.",
          parrafo5:
            "Para quienes disfrutan de los espacios al aire libre, la capital ofrece parques como el Simón Bolívar, considerado el pulmón verde de la ciudad, y ciclovías dominicales que invitan a recorrerla en bicicleta. Estos escenarios hacen de Bogotá un lugar ideal para el deporte, el descanso y la recreación en familia.",
          parrafo6:
            "Explorar Bogotá es sumergirse en la esencia de Colombia: tradición e innovación que conviven en perfecta armonía. Sus paisajes, su cultura y su diversidad hacen que cada visita sea única. Quien llega a la capital no solo descubre una ciudad vibrante, sino también una puerta de entrada al país que invita a regresar una y otra vez.",
          parrafo7: (
            <>
              En <strong>Viaja por Colombia</strong> estamos comprometidos en
              ofrecerte un servicio completo y de calidad. Te invitamos a
              registrar tus datos en nuestra sección de
              <Link
                to="/contacto"
                className="text-blue-400 hover:underline hover:text-blue-500"
              >
                {" "}
                contacto{" "}
              </Link>
              para que podamos asesorarte de manera personalizada. Nuestros
              paquetes todo incluido garantizan que cada detalle de tu viaje
              esté cubierto: desde los tiquetes aéreos y el hospedaje hasta los
              tours y traslados, brindándote comodidad, confianza y una
              experiencia de viaje organizada de principio a fin.
            </>
          ),
          parrafo8: (
            <>
              Haz clic{" "}
              <Link
                to="/contacto"
                className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
              >
                {" "}
                aquí
              </Link>{" "}
              y contáctanos para que podamos asesorarte y acompañarte en tu
              próxima aventura.
            </>
          ),
        },
        {
          imagen:
            "/React-Landing/imagenes/sitios-turisticos-de-santander.webp",
          imagen2: "/React-Landing/imagenes/barichara.webp",
          titulo: "Santander",
          slug: "santander",
          parrafo1:
            "Santander, ubicado en el nororiente de Colombia, es un departamento que combina aventura, naturaleza y cultura en un solo lugar. Su geografía montañosa y sus profundos cañones lo convierten en un escenario ideal para quienes buscan experiencias únicas y paisajes inolvidables.",
          parrafo2:
            "El Cañón del Chicamocha es uno de sus principales atractivos. Este imponente escenario natural, considerado uno de los cañones más grandes del mundo, alberga el Parque Nacional del Chicamocha, donde se pueden realizar actividades extremas como parapente, cable vuelo y deportes de aventura, mientras se disfruta de vistas impresionantes.",
          parrafo3:
            "Los pueblos coloniales de Santander son verdaderas joyas arquitectónicas. Barichara, conocido como “el pueblo más lindo de Colombia”, sorprende con sus calles empedradas y casas de cal blanca, mientras que Girón conserva un encanto histórico con sus iglesias y balcones típicos. Estos destinos invitan a recorrerlos sin prisa, disfrutando de su historia y hospitalidad.",
          parrafo4:
            "Para los amantes de la aventura, Santander es sinónimo de deportes extremos. El rafting en el río Fonce, el parapente en San Gil y la escalada en cuevas y montañas son solo algunas de las experiencias que han hecho de la región la capital del turismo de aventura en Colombia.",
          parrafo5:
            "La gastronomía también es protagonista en Santander. Platos típicos como la arepa santandereana, las hormigas culonas y el cabro con pepitoria forman parte de una tradición culinaria que sorprende a locales y visitantes. Cada bocado refleja la riqueza cultural y el carácter auténtico de la región.",
          parrafo6:
            "Visitar Santander es descubrir un destino que lo tiene todo: paisajes majestuosos, pueblos llenos de historia, actividades para liberar adrenalina y una gastronomía única. Es un lugar que invita a desconectarse de la rutina y a vivir experiencias que quedan grabadas para siempre en la memoria.",
          parrafo7: (
            <>
              En <strong>Viaja por Colombia</strong> estamos comprometidos en
              ofrecerte un servicio completo y de calidad. Te invitamos a
              registrar tus datos en nuestra sección de
              <Link
                to="/contacto"
                className="text-blue-400 hover:underline hover:text-blue-500"
              >
                {" "}
                contacto{" "}
              </Link>
              para que podamos asesorarte de manera personalizada. Nuestros
              paquetes todo incluido garantizan que cada detalle de tu viaje
              esté cubierto: desde los tiquetes aéreos y el hospedaje hasta los
              tours y traslados, brindándote comodidad, confianza y una
              experiencia de viaje organizada de principio a fin.
            </>
          ),
          parrafo8: (
            <>
              Haz clic{" "}
              <Link
                to="/contacto"
                className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
              >
                {" "}
                aquí
              </Link>{" "}
              y contáctanos para que podamos asesorarte y acompañarte en tu
              próxima aventura.
            </>
          ),
        },
        {
          imagen: "/React-Landing/imagenes/eje-cafeteroimg.webp",
          imagen2: "/React-Landing/imagenes/eje-cafeteroimg2.webp",
          titulo: "Eje cafetero",
          slug: "eje-cafetero",
          parrafo1:
            "El Eje Cafetero, conformado por los departamentos de Caldas, Risaralda y Quindío, es una de las regiones más emblemáticas de Colombia y Patrimonio de la Humanidad por la UNESCO. Sus paisajes montañosos cubiertos de cafetales, su gente cálida y su cultura cafetera hacen de este lugar un destino único y auténtico.",
          parrafo2:
            "Uno de los grandes atractivos de la región son sus fincas cafeteras, donde los visitantes pueden vivir la experiencia completa del café: desde la siembra, la recolección y el proceso de beneficio, hasta la degustación de una taza recién preparada. Estos recorridos permiten conocer de cerca la tradición que ha convertido al café colombiano en uno de los mejores del mundo.",
          parrafo3:
            "El Valle de Cocora, en el Quindío, es un destino imperdible. Allí se encuentran las majestuosas palmas de cera, árbol nacional de Colombia y las más altas del planeta. Caminar entre sus senderos, disfrutar de la naturaleza y respirar aire puro es una experiencia que conecta profundamente con el entorno.",
          parrafo4:
            "Además de la cultura cafetera, el Eje Cafetero ofrece parques temáticos de gran reconocimiento como el Parque del Café y Panaca. Estos espacios combinan diversión, tradición y aprendizaje, siendo ideales para visitar en familia y vivir experiencias llenas de color, sabor y alegría.",
          parrafo5:
            "La gastronomía regional también es un atractivo irresistible. Platos como la bandeja paisa, el sancocho de gallina, la arepa de chócolo y los postres tradicionales se disfrutan mejor acompañados de un café recién hecho, completando una experiencia culinaria llena de sabor y tradición.",
          parrafo6:
            "Visitar el Eje Cafetero es adentrarse en el corazón verde de Colombia, donde la naturaleza, la aventura y la cultura se mezclan en un solo lugar. Ya sea recorriendo senderos, aprendiendo sobre el café o simplemente disfrutando de los paisajes montañosos, cada momento en esta región se convierte en un recuerdo inolvidable.",
          parrafo7: (
            <>
              En <strong>Viaja por Colombia</strong> estamos comprometidos en
              ofrecerte un servicio completo y de calidad. Te invitamos a
              registrar tus datos en nuestra sección de
              <Link
                to="/contacto"
                className="text-blue-400 hover:underline hover:text-blue-500"
              >
                {" "}
                contacto{" "}
              </Link>
              para que podamos asesorarte de manera personalizada. Nuestros
              paquetes todo incluido garantizan que cada detalle de tu viaje
              esté cubierto: desde los tiquetes aéreos y el hospedaje hasta los
              tours y traslados, brindándote comodidad, confianza y una
              experiencia de viaje organizada de principio a fin.
            </>
          ),
          parrafo8: (
            <>
              Haz clic{" "}
              <Link
                to="/contacto"
                className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
              >
                {" "}
                aquí
              </Link>{" "}
              y contáctanos para que podamos asesorarte y acompañarte en tu
              próxima aventura.
            </>
          ),
        },
        {
          imagen:
            "/React-Landing/imagenes/Intento-de-cumbre-Nevado-Santa-Isabel.webp",
          imagen2: "/React-Landing/imagenes/condor.webp",
          titulo: "Nevado de Santa Isabel",
          slug: "nevado-santa-isabel",
          parrafo1:
            "El Nevado de Santa Isabel, ubicado en el Parque Nacional Natural Los Nevados, es uno de los tesoros naturales más impresionantes de Colombia. Con sus paisajes de alta montaña, glaciares, lagunas y páramos, este lugar invita a los viajeros a vivir una experiencia única en contacto directo con la naturaleza.",
          parrafo2:
            "Aunque es el nevado más bajo de la cordillera Central, su belleza y riqueza ecológica lo convierten en un destino inigualable. Sus senderos ofrecen vistas espectaculares de montañas cubiertas de nieve, valles verdes y cielos despejados que permiten contemplar panoramas inolvidables.",
          parrafo3:
            "El recorrido hacia el Nevado de Santa Isabel es toda una aventura para los amantes del ecoturismo y el senderismo. Durante el ascenso, los visitantes atraviesan diferentes pisos térmicos, pasando por bosques andinos, frailejones del páramo y finalmente los glaciares, lo que permite apreciar la diversidad natural de la región.",
          parrafo4:
            "Además de sus paisajes, el Nevado es hábitat de especies únicas como el cóndor de los Andes, el oso de anteojos y diversas aves propias de alta montaña. Para los observadores de fauna y flora, este destino representa una oportunidad de conexión con la biodiversidad colombiana en su máximo esplendor.",
          parrafo5:
            "El Nevado de Santa Isabel también tiene un valor cultural y ambiental muy importante. Es considerado un lugar sagrado por comunidades ancestrales y, hoy en día, se resalta como un espacio clave para la conservación del agua y los ecosistemas de páramo, fundamentales para la vida en las regiones cercanas.",
          parrafo6:
            "Visitar este nevado es mucho más que una caminata; es una experiencia transformadora que mezcla aventura, conciencia ambiental y admiración por la majestuosidad de la naturaleza. El Nevado de Santa Isabel invita a quienes lo recorren a disfrutar de la montaña, a respetar su entorno y a llevarse recuerdos que permanecerán para siempre.",
          parrafo7: (
            <>
              En <strong>Viaja por Colombia</strong> estamos comprometidos en
              ofrecerte un servicio completo y de calidad. Te invitamos a
              registrar tus datos en nuestra sección de
              <Link
                to="/contacto"
                className="text-blue-400 hover:underline hover:text-blue-500"
              >
                {" "}
                contacto{" "}
              </Link>
              para que podamos asesorarte de manera personalizada. Nuestros
              paquetes todo incluido garantizan que cada detalle de tu viaje
              esté cubierto: desde los tiquetes aéreos y el hospedaje hasta los
              tours y traslados, brindándote comodidad, confianza y una
              experiencia de viaje organizada de principio a fin.
            </>
          ),
          parrafo8: (
            <>
              Haz clic{" "}
              <Link
                to="/contacto"
                className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
              >
                {" "}
                aquí
              </Link>{" "}
              y contáctanos para que podamos asesorarte y acompañarte en tu
              próxima aventura.
            </>
          ),
        },
      ],
    },
    {
      imagen: "/React-Landing/imagenes/caribe.webp",
      titulo: "Region Caribe",
      slug: "caribe",
      parrafo1: (
        <>
          La <strong>Región Caribe</strong> de Colombia es sinónimo de alegría,
          música y paisajes inolvidables. Este territorio se caracteriza por su
          diversidad cultural, el calor de su gente y la mezcla perfecta entre
          modernidad y tradición. Quien la visita encuentra un lugar donde las
          expresiones artísticas, la gastronomía y los escenarios naturales se
          convierten en una experiencia única que refleja la esencia del Caribe
          colombiano.
        </>
      ),
      parrafo2: (
        <>
          En{" "}
          <Link
            to="/destinos/caribe/barranquilla"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            Barranquilla
          </Link>
          , la puerta de oro del país, la fiesta cobra vida con su famoso
          Carnaval, declarado Patrimonio de la Humanidad por la UNESCO. Durante
          esta celebración, la ciudad entera se transforma en un escenario lleno
          de color, música y baile, donde la cumbia y la alegría de sus
          habitantes conquistan a miles de visitantes nacionales e
          internacionales que llegan para vivir uno de los espectáculos
          culturales más importantes del mundo.
        </>
      ),
      parrafo3: (
        <>
          <Link
            to="/destinos/caribe/cartagena"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            Cartagena
          </Link>{" "}
          deslumbra con su ciudad amurallada, sus calles empedradas y su
          arquitectura colonial que cuenta historias de piratas, conquistas y
          comercio marítimo. Declarada Patrimonio de la Humanidad, esta joya del
          Caribe invita a recorrer sus murallas al atardecer mientras la brisa
          marina envuelve cada rincón con un aire romántico. Más allá de su
          centro histórico, la ciudad ofrece playas de aguas cristalinas como
          las de Barú y las Islas del Rosario, ideales para quienes buscan
          descanso y contacto con la naturaleza. Al mismo tiempo, su vibrante
          vida nocturna, su gastronomía basada en pescados y mariscos, y la
          calidez de su gente hacen que cada visita se convierta en una
          experiencia completa donde el pasado, el presente y la alegría
          caribeña conviven en perfecta armonía.
        </>
      ),
      parrafo4: (
        <>
          <Link
            to="/destinos/caribe/santa-marta"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            Santa Marta
          </Link>
          , considerada la ciudad más antigua de América, combina de manera
          extraordinaria playas paradisíacas con la majestuosidad de la Sierra
          Nevada, la montaña costera más alta del mundo. Este contraste natural
          permite disfrutar en un mismo viaje de arenas blancas, aguas turquesas
          y ecosistemas montañosos con una biodiversidad única. Además, la
          ciudad guarda una gran importancia histórica, pues allí pasó sus
          últimos días el Libertador Simón Bolívar.
        </>
      ),
      parrafo5: (
        <>
          En{" "}
          <Link
            to="/destinos/caribe/guajira"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            La Guajira
          </Link>
          , el desierto se mezcla con el mar Caribe creando un paisaje de
          contrastes que parece sacado de otro mundo. Sus dunas doradas, playas
          vírgenes y atardeceres infinitos son solo parte de su encanto. Este
          departamento también es hogar del pueblo wayuu, una comunidad indígena
          que comparte con los viajeros sus tradiciones ancestrales, artesanías
          y forma de vida, enriqueciendo la experiencia con un contacto
          auténtico y culturalmente invaluable.
        </>
      ),
      parrafo6: (
        <>
          La <strong>Región Caribe</strong> es, en definitiva, un lugar que
          ofrece experiencias para todos los gustos: historia, cultura, aventura
          y naturaleza. Desde festividades que despiertan la emoción hasta
          paisajes que inspiran tranquilidad, esta región cautiva a cada
          visitante con su magia inigualable. Ya sea recorriendo sus ciudades
          coloniales, explorando sus parques naturales o aprendiendo de sus
          comunidades, el Caribe colombiano siempre deja recuerdos imborrables
          en quienes lo descubren.
        </>
      ),
      parrafo7: (
        <>
          En <strong>Viaja por Colombia</strong> estamos comprometidos en
          ofrecerte un servicio completo y de calidad. Te invitamos a registrar
          tus datos en nuestra sección de
          <Link
            to="/contacto"
            className="text-blue-400 hover:underline hover:text-blue-500"
          >
            {" "}
            contacto{" "}
          </Link>
          para que podamos asesorarte de manera personalizada. Nuestros paquetes
          todo incluido garantizan que cada detalle de tu viaje esté cubierto:
          desde los tiquetes aéreos y el hospedaje hasta los tours y traslados,
          brindándote comodidad, confianza y una experiencia de viaje organizada
          de principio a fin.
        </>
      ),
      parrafo8: (
        <>
          Haz clic{" "}
          <Link
            to="/contacto"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            {" "}
            aquí
          </Link>{" "}
          y contáctanos para que podamos asesorarte y acompañarte en tu próxima
          aventura.
        </>
      ),

      lugares: [
        {
          imagen: "/React-Landing/imagenes/barranquillaintendencia.webp",
          imagen2:
            "/React-Landing/imagenes/Barranquilla-es-turismo-9.webp",
          titulo: "Barranquilla",
          slug: "barranquilla",
          parrafo1:
            "Barranquilla, conocida como la Puerta de Oro de Colombia, es una ciudad vibrante y llena de vida que mezcla modernidad, historia y tradición caribeña. Su ubicación estratégica a orillas del río Magdalena y cercana al mar Caribe la convierte en un punto clave para quienes desean descubrir lo mejor de la cultura y la alegría costeña.",
          parrafo2:
            "La ciudad es mundialmente famosa por su Carnaval, declarado Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO. Durante esta celebración, Barranquilla se transforma en un escenario de música, danzas y desfiles coloridos que reflejan la diversidad cultural de Colombia. Sin duda, vivir el Carnaval es una experiencia inolvidable para cualquier visitante.",
          parrafo3:
            "Más allá de sus fiestas, Barranquilla ofrece atractivos turísticos que combinan arte, historia y naturaleza. El Museo del Caribe, la Catedral Metropolitana, la Casa del Carnaval y el Gran Malecón del Río son paradas obligatorias. Y, para quienes disfrutan de los paisajes naturales, la Ciénaga de Mallorquín se ha convertido en un verdadero tesoro ecológico, ideal para el avistamiento de aves y la contemplación de mágicos atardeceres frente al mar.",
          parrafo4:
            "La gastronomía barranquillera también es un motivo para visitarla. Sus platos típicos como la arepa de huevo, los bollos de yuca, el arroz de lisa y las butifarras son un deleite para el paladar, acompañados siempre de la hospitalidad y alegría que caracteriza a su gente.",
          parrafo5:
            "Además, Barranquilla se ha consolidado como una ciudad moderna y dinámica, con centros comerciales, vida nocturna activa y una agenda cultural permanente que incluye conciertos, festivales y ferias. En los últimos años, la recuperación de espacios naturales como la Ciénaga de Mallorquín ha reforzado la identidad sostenible de la ciudad, ofreciendo tanto a locales como visitantes un lugar para conectar con la biodiversidad del Caribe colombiano.",
          parrafo6:
            "Visitar Barranquilla es dejarse contagiar por el ritmo, la música y el calor humano de su gente. Cada rincón guarda una historia y cada celebración refleja la pasión de una ciudad que siempre recibe con los brazos abiertos a quienes desean descubrir el corazón del Caribe colombiano.",
          parrafo7: (
            <>
              En <strong>Viaja por Colombia</strong> estamos comprometidos en
              ofrecerte un servicio completo y de calidad. Te invitamos a
              registrar tus datos en nuestra sección de
              <Link
                to="/contacto"
                className="text-blue-400 hover:underline hover:text-blue-500"
              >
                {" "}
                contacto{" "}
              </Link>
              para que podamos asesorarte de manera personalizada. Nuestros
              paquetes todo incluido garantizan que cada detalle de tu viaje
              esté cubierto: desde los tiquetes aéreos y el hospedaje hasta los
              tours y traslados, brindándote comodidad, confianza y una
              experiencia de viaje organizada de principio a fin.
            </>
          ),
          parrafo8: (
            <>
              Haz clic{" "}
              <Link
                to="/contacto"
                className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
              >
                {" "}
                aquí
              </Link>{" "}
              y contáctanos para que podamos asesorarte y acompañarte en tu
              próxima aventura.
            </>
          ),
        },
        {
          imagen: "/React-Landing/imagenes/cartagena3.webp",
          imagen2: "/React-Landing/imagenes/cartagena4.webp",
          titulo: "Cartagena",
          slug: "cartagena",
          parrafo1:
            "Cartagena de Indias, conocida como la Heroica, es uno de los destinos más emblemáticos de Colombia y del Caribe. Su encanto radica en la perfecta combinación entre historia, arquitectura colonial y un ambiente caribeño lleno de alegría y color.",
          parrafo2:
            "La Ciudad Amurallada es el corazón histórico de Cartagena y Patrimonio de la Humanidad declarado por la UNESCO. Sus calles empedradas, balcones llenos de flores y murallas centenarias transportan a los visitantes a otra época, convirtiéndola en un escenario mágico para caminar y descubrir rincones únicos.",
          parrafo3:
            "Dentro de la ciudad, lugares como el Castillo de San Felipe de Barajas, el Convento de la Popa y las plazas principales ofrecen una mirada profunda a la historia y la resistencia de sus habitantes. Cada monumento y fortificación cuenta una historia que refleja el legado cultural y la importancia estratégica de Cartagena.",
          parrafo4:
            "Pero Cartagena no es solo historia. Sus playas, como Bocagrande, Playa Blanca y las cercanas Islas del Rosario, invitan a disfrutar de aguas cristalinas, arena blanca y actividades acuáticas como el snorkel, el buceo y paseos en lancha por paisajes paradisíacos.",
          parrafo5:
            "La gastronomía cartagenera es otro de sus grandes atractivos. Desde el tradicional arroz con coco y el pescado frito hasta las arepas de huevo y las cocadas, cada bocado refleja la mezcla de sabores afrocaribeños e indígenas que hacen de la cocina local una experiencia inolvidable.",
          parrafo6:
            "Visitar Cartagena es sumergirse en un ambiente romántico y alegre, donde cada atardecer junto a las murallas y cada noche bajo el cielo estrellado se convierten en recuerdos para toda la vida. Es un destino que combina cultura, playa y tradición, ofreciendo a sus visitantes una experiencia inolvidable en el Caribe colombiano.",
          parrafo7: (
            <>
              En <strong>Viaja por Colombia</strong> estamos comprometidos en
              ofrecerte un servicio completo y de calidad. Te invitamos a
              registrar tus datos en nuestra sección de
              <Link
                to="/contacto"
                className="text-blue-400 hover:underline hover:text-blue-500"
              >
                {" "}
                contacto{" "}
              </Link>
              para que podamos asesorarte de manera personalizada. Nuestros
              paquetes todo incluido garantizan que cada detalle de tu viaje
              esté cubierto: desde los tiquetes aéreos y el hospedaje hasta los
              tours y traslados, brindándote comodidad, confianza y una
              experiencia de viaje organizada de principio a fin.
            </>
          ),
          parrafo8: (
            <>
              Haz clic{" "}
              <Link
                to="/contacto"
                className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
              >
                {" "}
                aquí
              </Link>{" "}
              y contáctanos para que podamos asesorarte y acompañarte en tu
              próxima aventura.
            </>
          ),
        },
        {
          imagen: "/React-Landing/imagenes/santa-marta-invesion.webp",
          imagen2:
            "/React-Landing/imagenes/ciudad-perdida-sierra-nevada-de-santa-marta-colombia-36.webp",
          titulo: "Santa Marta",
          slug: "santa-marta",
          parrafo1:
            "Santa Marta, la ciudad más antigua de Colombia y de Sudamérica, es un destino que combina historia, cultura y naturaleza en un mismo lugar. Su riqueza patrimonial y su privilegiada ubicación en el Caribe colombiano la convierten en un sitio ideal para quienes buscan aventura, descanso y experiencias auténticas.",
          parrafo2:
            "Uno de sus principales atractivos es el Parque Nacional Natural Tayrona, un paraíso donde las montañas de la Sierra Nevada se encuentran con el mar Caribe. Sus playas, como Cabo San Juan, La Piscina o Arrecifes, son reconocidas por su belleza y por ser lugares perfectos para practicar senderismo, snorkel o simplemente relajarse rodeado de naturaleza.",
          parrafo3:
            "La historia también tiene un papel importante en Santa Marta. La Quinta de San Pedro Alejandrino, donde pasó sus últimos días el Libertador Simón Bolívar, es un espacio lleno de memoria que ofrece a los visitantes la oportunidad de conocer más sobre la independencia de América Latina y la vida de este gran personaje histórico.",
          parrafo4:
            "El centro histórico de la ciudad es otro punto imperdible. Sus coloridas calles coloniales, la Catedral Basílica, los cafés y restaurantes con ambiente caribeño, así como las plazas llenas de vida, hacen de cada recorrido una experiencia cultural y gastronómica que refleja la esencia samaria.",
          parrafo5:
            "Además, Santa Marta es el punto de partida para vivir una de las experiencias más fascinantes del continente: la Ciudad Perdida. Esta antigua ciudad de la civilización tayrona, ubicada en medio de la Sierra Nevada, se descubre a través de una caminata de varios días que permite conectar con la historia, la naturaleza y las comunidades indígenas que aún habitan la región.",
          parrafo6:
            "Con su mezcla de playas paradisíacas, montañas nevadas, cultura indígena y un ambiente cálido y acogedor, Santa Marta se consolida como un destino turístico completo. Ya sea para quienes buscan descanso frente al mar, contacto con la naturaleza o aventuras únicas, esta ciudad ofrece experiencias inolvidables en cada rincón.",
          parrafo7: (
            <>
              En <strong>Viaja por Colombia</strong> estamos comprometidos en
              ofrecerte un servicio completo y de calidad. Te invitamos a
              registrar tus datos en nuestra sección de
              <Link
                to="/contacto"
                className="text-blue-400 hover:underline hover:text-blue-500"
              >
                {" "}
                contacto{" "}
              </Link>
              para que podamos asesorarte de manera personalizada. Nuestros
              paquetes todo incluido garantizan que cada detalle de tu viaje
              esté cubierto: desde los tiquetes aéreos y el hospedaje hasta los
              tours y traslados, brindándote comodidad, confianza y una
              experiencia de viaje organizada de principio a fin.
            </>
          ),
          parrafo8: (
            <>
              Haz clic{" "}
              <Link
                to="/contacto"
                className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
              >
                {" "}
                aquí
              </Link>{" "}
              y contáctanos para que podamos asesorarte y acompañarte en tu
              próxima aventura.
            </>
          ),
        },
        {
          imagen: "/React-Landing/imagenes/cabodelavela.webp",
          imagen2: "/React-Landing/imagenes/guajira2.webp",
          titulo: "Guajira",
          slug: "guajira",
          parrafo1:
            "La Guajira es un territorio único en Colombia, donde el desierto se funde con el mar Caribe en un paisaje que parece sacado de otro mundo. Esta región, ubicada en el extremo norte del país, cautiva con sus contrastes, su riqueza cultural y la hospitalidad de su gente, convirtiéndose en un destino ideal para quienes buscan experiencias diferentes y memorables.",
          parrafo2:
            "Uno de los lugares más emblemáticos es Cabo de la Vela, reconocido por sus playas tranquilas, los atardeceres mágicos y el imponente Pilón de Azúcar. Este rincón es perfecto para disfrutar de deportes acuáticos como el kitesurf, o simplemente para dejarse llevar por la calma que ofrece el mar frente al desierto.",
          parrafo3:
            "Más al norte, se encuentra Punta Gallinas, el punto más septentrional de Sudamérica. Allí, las dunas se mezclan con el océano en un espectáculo natural impresionante. Los visitantes disfrutan de paisajes inigualables, la inmensidad del desierto y la oportunidad de descubrir un territorio donde la naturaleza aún conserva su carácter virgen.",
          parrafo4:
            "La cultura wayuu es otro de los grandes tesoros de La Guajira. Este pueblo indígena, guardián de la tradición, comparte con los viajeros su artesanía, como las coloridas mochilas, su gastronomía típica y sus historias llenas de sabiduría ancestral. Vivir un intercambio cultural con ellos es una de las experiencias más enriquecedoras que ofrece la región.",
          parrafo5:
            "Para los amantes de la naturaleza, La Guajira también sorprende con lugares como el Santuario de Fauna y Flora Los Flamencos, en Camarones. Allí, cientos de flamencos rosados habitan en lagunas costeras, creando un espectáculo visual que combina vida silvestre y paisajes espectaculares. Es un sitio perfecto para el ecoturismo y la observación de aves.",
          parrafo6:
            "Visitar La Guajira es adentrarse en un viaje de contrastes y emociones. Entre desiertos dorados, mares turquesa, comunidades indígenas y una riqueza natural inigualable, cada rincón ofrece una experiencia distinta. Este destino no solo enamora a quienes lo descubren, sino que también deja una huella profunda en el corazón de cada viajero.",
          parrafo7: (
            <>
              En <strong>Viaja por Colombia</strong> estamos comprometidos en
              ofrecerte un servicio completo y de calidad. Te invitamos a
              registrar tus datos en nuestra sección de
              <Link
                to="/contacto"
                className="text-blue-400 hover:underline hover:text-blue-500"
              >
                {" "}
                contacto{" "}
              </Link>
              para que podamos asesorarte de manera personalizada. Nuestros
              paquetes todo incluido garantizan que cada detalle de tu viaje
              esté cubierto: desde los tiquetes aéreos y el hospedaje hasta los
              tours y traslados, brindándote comodidad, confianza y una
              experiencia de viaje organizada de principio a fin.
            </>
          ),
          parrafo8: (
            <>
              Haz clic{" "}
              <Link
                to="/contacto"
                className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
              >
                {" "}
                aquí
              </Link>{" "}
              y contáctanos para que podamos asesorarte y acompañarte en tu
              próxima aventura.
            </>
          ),
        },
      ],
    },
    {
      imagen: "/React-Landing/imagenes/insular.webp",
      titulo: "Region Insular",
      slug: "insular",
      parrafo1: (
        <>
          La <strong>Región Insular</strong> de Colombia es un verdadero paraíso
          en medio del mar Caribe, donde la tranquilidad, la biodiversidad y el
          contraste de colores convierten cada rincón en una postal inolvidable.
          Este conjunto de islas ofrece un ambiente único en el país, con
          ecosistemas marinos protegidos, playas de ensueño y una cultura isleña
          llena de tradición y calidez. Quienes la visitan descubren un
          territorio que combina la riqueza natural con la hospitalidad de su
          gente.
        </>
      ),
      parrafo2: (
        <>
          En San Andrés, los visitantes disfrutan de playas de arena blanca y
          aguas turquesas que reflejan el famoso “mar de los siete colores”. La
          isla se ha consolidado como uno de los destinos turísticos más
          importantes de Colombia gracias a la belleza de sus paisajes y a la
          amplia oferta de actividades. Desde caminatas por la zona urbana hasta
          recorridos en lancha, cada experiencia permite conectar con la esencia
          caribeña.
        </>
      ),
      parrafo3: (
        <>
          <Link
            to="/destinos/insular/san-andres"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            San Andrés
          </Link>{" "}
          es también un destino ideal para los amantes del buceo y el snorkel.
          Sus arrecifes coralinos albergan una gran variedad de especies marinas
          que convierten cada inmersión en un espectáculo de vida y color. Los
          visitantes pueden explorar cuevas submarinas, nadar junto a peces
          tropicales y apreciar corales de formas sorprendentes que parecen
          esculturas vivientes. Además, la isla cuenta con instructores y
          escuelas de buceo que ofrecen experiencias seguras tanto para
          principiantes como para expertos, lo que permite que personas de todas
          las edades disfruten del contacto directo con el océano. Este universo
          submarino, protegido por iniciativas de conservación, es considerado
          uno de los más hermosos del Caribe y constituye un tesoro natural que
          refuerza la identidad única de la isla.
        </>
      ),
      parrafo4: (
        <>
          Por otro lado, las Islas del Rosario, ubicadas frente a la costa de
          Cartagena, conforman un archipiélago de gran valor ecológico y
          cultural. Allí se encuentra un Parque Nacional Natural que protege
          ecosistemas de manglar, lagunas costeras y una enorme biodiversidad
          marina. Las islas ofrecen una experiencia de tranquilidad absoluta,
          con playas escondidas, aguas transparentes y un ambiente propicio para
          la desconexión total.
        </>
      ),
      parrafo5: (
        <>
          En las{" "}
          <Link
            to="/destinos/insular/rosario"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            Islas del Rosario
          </Link>
          , los viajeros pueden realizar actividades como kayak, paseos en
          velero o visitas a acuarios naturales que muestran la riqueza de los
          ecosistemas del Caribe colombiano. Además, es un destino perfecto para
          quienes desean un contacto más cercano con la naturaleza sin renunciar
          a la comodidad, ya que ofrece hoteles y cabañas integradas al paisaje.
          Este equilibrio entre conservación y turismo responsable lo convierte
          en un sitio muy especial.
        </>
      ),
      parrafo6: (
        <>
          En conjunto, la <strong>Región Insular</strong> es un destino
          imprescindible para quienes buscan naturaleza, tranquilidad y belleza
          sin igual. Desde la magia de{" "}
          <Link
            to="/destinos/insular/san-andres"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            San Andrés
          </Link>{" "}
          hasta la serenidad de las{" "}
          <Link
            to="/destinos/insular/rosario"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            Islas del Rosario
          </Link>
          , esta región demuestra por qué Colombia es un país privilegiado en
          diversidad y riqueza natural. Cada viaje a estas islas deja recuerdos
          imborrables y una conexión profunda con el Caribe colombiano.
        </>
      ),
      parrafo7: (
        <>
          En <strong>Viaja por Colombia</strong> estamos comprometidos en
          ofrecerte un servicio completo y de calidad. Te invitamos a registrar
          tus datos en nuestra sección de
          <Link
            to="/contacto"
            className="text-blue-400 hover:underline hover:text-blue-500"
          >
            {" "}
            contacto{" "}
          </Link>
          para que podamos asesorarte de manera personalizada. Nuestros paquetes
          todo incluido garantizan que cada detalle de tu viaje esté cubierto:
          desde los tiquetes aéreos y el hospedaje hasta los tours y traslados,
          brindándote comodidad, confianza y una experiencia de viaje organizada
          de principio a fin.
        </>
      ),
      parrafo8: (
        <>
          Haz clic{" "}
          <Link
            to="/contacto"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            {" "}
            aquí
          </Link>{" "}
          y contáctanos para que podamos asesorarte y acompañarte en tu próxima
          aventura.
        </>
      ),
      lugares: [
        {
          imagen:
            "/React-Landing/imagenes/San-Andres-portada-1.jpg.webp",
          imagen2: "/React-Landing/imagenes/sanandresbuceo3 (1).webp",
          titulo: "San Andrés",
          slug: "san-andres",
          parrafo1:
            "San Andrés es uno de los destinos más emblemáticos del Caribe colombiano, conocido por sus playas paradisíacas, su clima cálido durante todo el año y la hospitalidad de su gente. Este rincón insular ofrece a los visitantes un ambiente ideal para descansar, disfrutar de la naturaleza y vivir experiencias inolvidables en medio de aguas cristalinas.",
          parrafo2:
            "El mayor atractivo de la isla es su famoso mar de los siete colores, un espectáculo natural que sorprende por la diversidad de tonos azules y verdes que se aprecian desde la costa o navegando en lancha. Hacer snorkel o buceo en este mar es descubrir un mundo submarino lleno de vida, con arrecifes coralinos y peces multicolores que convierten cada inmersión en una aventura única.",
          parrafo3:
            "Entre sus lugares imperdibles está la Cueva de Morgan, una caverna que, según la leyenda, fue refugio del famoso pirata inglés. También destacan el Hoyo Soplador, un fenómeno natural que sorprende a los viajeros con chorros de agua que emergen de la roca, y Johnny Cay, un islote encantador rodeado de playas de arena blanca y palmeras que invitan a relajarse.",
          parrafo4:
            "San Andrés también es cultura y tradición. La isla tiene una fuerte influencia afrocaribeña e inglesa, que se refleja en su música, gastronomía y costumbres. Disfrutar de un plato típico como el rondón, acompañado de ritmos de reggae y calipso, es sumergirse en la esencia auténtica del archipiélago.",
          parrafo5:
            "Para quienes buscan aventura, la isla ofrece planes como paseos en kayak, recorridos en moto por la costa, y excursiones en lancha hacia Cayo Acuario y Haynes Cay, donde el agua es tan clara que se puede caminar entre peces tropicales y estrellas de mar. Cada recorrido muestra por qué San Andrés es un paraíso natural incomparable.",
          parrafo6:
            "Visitar San Andrés es mucho más que un simple viaje a la playa: es una experiencia que combina descanso, cultura y aventura. Con sus paisajes de ensueño, su gente amable y su riqueza natural, la isla se consolida como uno de los destinos turísticos más fascinantes de Colombia y del Caribe.",
          parrafo7: (
            <>
              En <strong>Viaja por Colombia</strong> estamos comprometidos en
              ofrecerte un servicio completo y de calidad. Te invitamos a
              registrar tus datos en nuestra sección de
              <Link
                to="/contacto"
                className="text-blue-400 hover:underline hover:text-blue-500"
              >
                {" "}
                contacto{" "}
              </Link>
              para que podamos asesorarte de manera personalizada. Nuestros
              paquetes todo incluido garantizan que cada detalle de tu viaje
              esté cubierto: desde los tiquetes aéreos y el hospedaje hasta los
              tours y traslados, brindándote comodidad, confianza y una
              experiencia de viaje organizada de principio a fin.
            </>
          ),
          parrafo8: (
            <>
              Haz clic{" "}
              <Link
                to="/contacto"
                className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
              >
                {" "}
                aquí
              </Link>{" "}
              y contáctanos para que podamos asesorarte y acompañarte en tu
              próxima aventura.
            </>
          ),
        },
        {
          imagen: "/React-Landing/imagenes/islas-del-rosario.webp",
          imagen2:
            "/React-Landing/imagenes/Oceanario-Islas-del-Rosario.webp",
          titulo: "Islas del Rosario",
          slug: "rosario",
          parrafo1:
            "Las Islas del Rosario son uno de los destinos más fascinantes del Caribe colombiano, un archipiélago conformado por más de 20 islas rodeadas de aguas cristalinas y arrecifes coralinos. Su belleza natural, la tranquilidad de sus playas y la riqueza de su biodiversidad marina hacen de este lugar un verdadero paraíso tropical.",
          parrafo2:
            "Uno de los mayores atractivos de este destino es el Oceanario de las Islas del Rosario, un espacio dedicado a la conservación y educación ambiental. Allí, los visitantes pueden conocer de cerca tiburones, tortugas marinas, delfines y una gran variedad de especies que habitan los arrecifes, lo que convierte la visita en una experiencia enriquecedora y divertida para toda la familia.",
          parrafo3:
            "Además de su riqueza marina, las islas ofrecen playas de arena blanca y aguas de tonalidades turquesa, ideales para descansar bajo el sol caribeño. Muchos viajeros optan por pasar el día en playas privadas, donde pueden disfrutar de hamacas, cocteles tropicales y el sonido relajante del mar.",
          parrafo4:
            "El archipiélago también es un lugar perfecto para la práctica de deportes acuáticos como el snorkel y el buceo. Sus arrecifes coralinos, llenos de vida y color, permiten observar peces tropicales, corales y estrellas de mar en un entorno mágico que encanta tanto a principiantes como a expertos buzos.",
          parrafo5:
            "Las Islas del Rosario no solo destacan por su entorno natural, sino también por su cercanía a Cartagena de Indias, lo que las convierte en una escapada ideal para quienes buscan complementar historia y cultura con paisajes paradisíacos. Un corto viaje en lancha desde el muelle de Cartagena es suficiente para llegar a este destino soñado.",
          parrafo6:
            "Visitar las Islas del Rosario es descubrir un equilibrio perfecto entre aventura, naturaleza y descanso. Con su Oceanario, sus playas tranquilas y la riqueza de su ecosistema marino, el archipiélago se consolida como uno de los destinos turísticos más atractivos de Colombia y del Caribe.",
          parrafo7: (
            <>
              En <strong>Viaja por Colombia</strong> estamos comprometidos en
              ofrecerte un servicio completo y de calidad. Te invitamos a
              registrar tus datos en nuestra sección de
              <Link
                to="/contacto"
                className="text-blue-400 hover:underline hover:text-blue-500"
              >
                {" "}
                contacto{" "}
              </Link>
              para que podamos asesorarte de manera personalizada. Nuestros
              paquetes todo incluido garantizan que cada detalle de tu viaje
              esté cubierto: desde los tiquetes aéreos y el hospedaje hasta los
              tours y traslados, brindándote comodidad, confianza y una
              experiencia de viaje organizada de principio a fin.
            </>
          ),
          parrafo8: (
            <>
              Haz clic{" "}
              <Link
                to="/contacto"
                className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
              >
                {" "}
                aquí
              </Link>{" "}
              y contáctanos para que podamos asesorarte y acompañarte en tu
              próxima aventura.
            </>
          ),
        },
      ],
    },
    {
      imagen: "/React-Landing/imagenes/amazonas2.webp",
      titulo: "Region Amazónica",
      slug: "amazonia",
      parrafo1: (
        <>
          La <strong>Región Amazónica</strong> de Colombia es conocida como el
          gran pulmón verde del país y del planeta. Este vasto territorio está
          cubierto por selvas infinitas, ríos caudalosos y una biodiversidad que
          lo convierte en uno de los ecosistemas más importantes del mundo. Es
          un lugar donde la naturaleza se expresa en su forma más pura,
          ofreciendo un espectáculo único de vida, cultura y tradición.
        </>
      ),
      parrafo2: (
        <>
          En el departamento del Amazonas, los viajeros descubren la
          majestuosidad del río más caudaloso del planeta, que serpentea
          imponente entre la selva. Navegar por sus aguas permite apreciar la
          grandeza de este ecosistema y observar especies únicas de fauna y
          flora que conviven en perfecta armonía, creando un paisaje que parece
          sacado de otro mundo.
        </>
      ),
      parrafo3: (
        <>
          <Link
            to="/destinos/amazonia/amazonas"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            Amazonas
          </Link>{" "}
          también es hogar de comunidades indígenas que han mantenido vivas sus
          tradiciones a lo largo de los siglos. Sus habitantes comparten sus
          conocimientos ancestrales sobre plantas medicinales, rituales
          espirituales y formas de convivencia sostenible con la naturaleza.
          Esta interacción cultural enriquece profundamente la experiencia de
          los visitantes, permitiéndoles comprender la estrecha relación entre
          el hombre y la selva.
        </>
      ),
      parrafo4: (
        <>
          La Región Amazónica es un destino ideal para quienes buscan aventuras
          ecoturísticas. Allí se puede practicar senderismo en medio de la
          selva, realizar avistamiento de aves exóticas, explorar lagos y
          quebradas escondidas o simplemente dejarse envolver por los sonidos de
          la naturaleza. Cada recorrido se convierte en una oportunidad para
          conectar con la tierra y descubrir paisajes que permanecen intactos
          por el paso del tiempo.
        </>
      ),
      parrafo5: (
        <>
          En el corazón del{" "}
          <Link
            to="/destinos/amazonia/amazonas"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            Amazonas
          </Link>
          , los visitantes también pueden vivir la experiencia inolvidable de
          observar especies emblemáticas como delfines rosados, jaguares, monos
          aulladores y una gran variedad de peces y reptiles. Esta riqueza
          faunística convierte a la región en un escenario privilegiado para la
          fotografía y la investigación científica, consolidándola como uno de
          los destinos más fascinantes de Colombia.
        </>
      ),
      parrafo6: (
        <>
          En definitiva, la <strong>Región Amazónica</strong> es mucho más que
          un destino turístico: es un lugar que invita a reflexionar sobre la
          importancia de proteger la naturaleza y valorar la diversidad
          cultural. Quienes se adentran en esta selva inmensa no solo viven
          aventuras inolvidables, sino que también llevan consigo un mensaje de
          respeto y admiración hacia uno de los territorios más mágicos y
          vitales del planeta.
        </>
      ),
      parrafo7: (
        <>
          En <strong>Viaja por Colombia</strong> estamos comprometidos en
          ofrecerte un servicio completo y de calidad. Te invitamos a registrar
          tus datos en nuestra sección de
          <Link
            to="/contacto"
            className="text-blue-400 hover:underline hover:text-blue-500"
          >
            {" "}
            contacto{" "}
          </Link>
          para que podamos asesorarte de manera personalizada. Nuestros paquetes
          todo incluido garantizan que cada detalle de tu viaje esté cubierto:
          desde los tiquetes aéreos y el hospedaje hasta los tours y traslados,
          brindándote comodidad, confianza y una experiencia de viaje organizada
          de principio a fin.
        </>
      ),
      parrafo8: (
        <>
          Haz clic{" "}
          <Link
            to="/contacto"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            {" "}
            aquí
          </Link>{" "}
          y contáctanos para que podamos asesorarte y acompañarte en tu próxima
          aventura.
        </>
      ),
      lugares: [
        {
          imagen: "/React-Landing/imagenes/amazonas4.webp",
          imagen2: "/React-Landing/imagenes/isladelosmicos.webp",
          titulo: "Amazonas",
          slug: "amazonas",
          parrafo1:
            "El Amazonas colombiano es un destino mágico y diverso, considerado el pulmón del mundo por su exuberante selva tropical y su extraordinaria biodiversidad. Este lugar invita a los viajeros a adentrarse en un entorno natural único, lleno de paisajes sorprendentes, culturas ancestrales y experiencias inolvidables.",
          parrafo2:
            "Uno de los sitios más emblemáticos para visitar en la región es la Isla de los Micos, un paraíso natural donde cientos de pequeños primates reciben a los visitantes. Allí, los viajeros pueden interactuar con los monos en su hábitat natural, tomarse fotografías y aprender sobre la importancia de conservar estas especies en un ambiente controlado y seguro.",
          parrafo3:
            "El río Amazonas, imponente y majestuoso, ofrece recorridos en lancha que permiten explorar comunidades indígenas, avistar delfines rosados y disfrutar de la vida que rodea a este caudaloso afluente. Cada travesía por sus aguas es una ventana a la grandeza de la selva.",
          parrafo4:
            "Para los amantes de la aventura, el Amazonas ofrece actividades como caminatas ecológicas por la selva, donde guías locales comparten conocimientos sobre plantas medicinales, fauna exótica y secretos ancestrales que se han transmitido de generación en generación.",
          parrafo5:
            "Además, la capital del departamento, Leticia, se convierte en el punto de partida ideal para descubrir este destino. Su ambiente multicultural, su gastronomía basada en frutos amazónicos y su cercanía a las fronteras con Perú y Brasil hacen de la ciudad un lugar fascinante para los viajeros.",
          parrafo6:
            "Visitar el Amazonas es una experiencia transformadora, donde la Isla de los Micos, el río imponente y la majestuosidad de la selva se unen para cautivar a quienes buscan naturaleza, cultura y aventura en un solo lugar. Sin duda, es un destino que conecta al visitante con la esencia más pura de la vida.",
          parrafo7: (
            <>
              En <strong>Viaja por Colombia</strong> estamos comprometidos en
              ofrecerte un servicio completo y de calidad. Te invitamos a
              registrar tus datos en nuestra sección de
              <Link
                to="/contacto"
                className="text-blue-400 hover:underline hover:text-blue-500"
              >
                {" "}
                contacto{" "}
              </Link>
              para que podamos asesorarte de manera personalizada. Nuestros
              paquetes todo incluido garantizan que cada detalle de tu viaje
              esté cubierto: desde los tiquetes aéreos y el hospedaje hasta los
              tours y traslados, brindándote comodidad, confianza y una
              experiencia de viaje organizada de principio a fin.
            </>
          ),
          parrafo8: (
            <>
              Haz clic{" "}
              <Link
                to="/contacto"
                className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
              >
                {" "}
                aquí
              </Link>{" "}
              y contáctanos para que podamos asesorarte y acompañarte en tu
              próxima aventura.
            </>
          ),
        },
      ],
    },
    {
      imagen: "/React-Landing/imagenes/orinoquia2.webp",
      titulo: "Region Orinoquía",
      slug: "orinoquia",
      parrafo1: (
        <>
          La <strong>Región Orinoquía</strong> de Colombia es un territorio
          lleno de llanuras infinitas, ríos caudalosos y paisajes que parecen no
          tener fin. Es una región donde la naturaleza se manifiesta en su
          máxima expresión y donde la cultura llanera, con su música, su
          gastronomía y sus tradiciones, se convierte en un símbolo de identidad
          para todo el país.
        </>
      ),
      parrafo2: (
        <>
          En este vasto escenario natural se encuentra Caño Cristales , uno de
          los ríos más hermosos del mundo, conocido como el “río de los cinco
          colores”. Sus aguas cristalinas, acompañadas de plantas acuáticas
          únicas llamadas macarenias clavigera, crean tonalidades rojas, verdes,
          amarillas, azules y negras que forman un espectáculo natural sin
          igual. Este fenómeno solo ocurre durante ciertos meses del año, lo que
          lo hace aún más especial para quienes tienen la fortuna de
          presenciarlo. Además de sus colores vibrantes, el río atraviesa
          formaciones rocosas milenarias y pequeños cañones que narran la
          historia geológica de la región, ofreciendo un escenario que parece
          sacado de un cuento fantástico. La combinación de su belleza visual,
          su importancia ecológica y la energía que transmite lo convierten en
          un lugar sagrado tanto para las comunidades locales como para los
          visitantes que llegan desde todas partes del mundo.
        </>
      ),
      parrafo3: (
        <>
          <Link
            to="/destinos/orinoquia/cano-cristales"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            Caño Cristales
          </Link>{" "}
          está ubicado en la Serranía de la Macarena, una zona que combina
          ecosistemas de la Amazonía, los Andes y la Orinoquía. Este entorno
          privilegiado lo convierte en un destino ideal para los amantes del
          ecoturismo, el senderismo y la fotografía. Cada recorrido por sus
          senderos ofrece la posibilidad de descubrir cascadas, pozos naturales
          y una biodiversidad sorprendente.
        </>
      ),
      parrafo4: (
        <>
          La <strong>Región Orinoquía</strong> no solo sorprende con la belleza
          de Caño Cristales, sino también con la riqueza cultural de sus llanos.
          Allí, los cantos de vaquería, el joropo y la vida en las haciendas
          reflejan la estrecha relación entre el hombre y la naturaleza. Este
          patrimonio inmaterial convierte a la región en un lugar donde la
          tradición se mantiene viva en cada rincón.
        </>
      ),
      parrafo5: (
        <>
          Para los viajeros más aventureros, visitar Caño Cristales es una
          experiencia transformadora. Observar cómo el río cambia de colores
          según la luz del sol y la época del año genera un asombro que
          difícilmente se olvida. Este espectáculo natural, acompañado por la
          serenidad de la selva y el canto de las aves, hace que el destino sea
          considerado un verdadero tesoro de Colombia.
        </>
      ),
      parrafo6: (
        <>
          En definitiva, la <strong>Región Orinoquía</strong> es un lugar que
          combina paisajes inigualables con una cultura vibrante y auténtica. La
          magia de{" "}
          <Link
            to="/destinos/orinoquia/cano-cristales"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            Caño Cristales
          </Link>{" "}
          es solo una muestra de todo lo que este territorio tiene para ofrecer,
          consolidándose como un destino imprescindible para quienes desean
          vivir la esencia de los llanos colombianos y maravillarse con la
          belleza de la naturaleza en su estado más puro.
        </>
      ),
      parrafo7: (
        <>
          En <strong>Viaja por Colombia</strong> estamos comprometidos en
          ofrecerte un servicio completo y de calidad. Te invitamos a registrar
          tus datos en nuestra sección de
          <Link
            to="/contacto"
            className="text-blue-400 hover:underline hover:text-blue-500"
          >
            {" "}
            contacto{" "}
          </Link>
          para que podamos asesorarte de manera personalizada. Nuestros paquetes
          todo incluido garantizan que cada detalle de tu viaje esté cubierto:
          desde los tiquetes aéreos y el hospedaje hasta los tours y traslados,
          brindándote comodidad, confianza y una experiencia de viaje organizada
          de principio a fin.
        </>
      ),
      parrafo8: (
        <>
          Haz clic{" "}
          <Link
            to="/contacto"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            {" "}
            aquí
          </Link>{" "}
          y contáctanos para que podamos asesorarte y acompañarte en tu próxima
          aventura.
        </>
      ),
      lugares: [
        {
          imagen: "/React-Landing/imagenes/canocristales.webp",
          imagen2: "/React-Landing/imagenes/canocristales3.webp",
          titulo: "Caño Cristales",
          slug: "cano-cristales",
          parrafo1:
            "Caño Cristales, conocido mundialmente como el río de los cinco colores, es uno de los tesoros naturales más impresionantes de Colombia. Ubicado en la Sierra de la Macarena, en el departamento del Meta, este lugar deslumbra por sus aguas cristalinas que adquieren tonalidades rojas, amarillas, verdes, azules y negras gracias a una planta acuática llamada Macarenia clavigera.",
          parrafo2:
            "El recorrido por Caño Cristales es una experiencia mágica para los amantes de la naturaleza. Sus cascadas, pozos naturales y formaciones rocosas convierten cada visita en un espectáculo visual incomparable, ideal para los viajeros que buscan paisajes únicos en el mundo.",
          parrafo3:
            "La mejor época para visitar este paraíso natural es entre los meses de junio y noviembre, cuando el río alcanza su máximo esplendor cromático. En esta temporada, las aguas se convierten en un lienzo vivo que combina el movimiento del agua con la vibrante paleta de colores de la vegetación acuática.",
          parrafo4:
            "Los senderos alrededor de Caño Cristales ofrecen rutas de ecoturismo guiadas, donde los visitantes pueden disfrutar de caminatas entre la selva, escuchar el canto de aves exóticas y maravillarse con la biodiversidad que caracteriza a la región de la Macarena.",
          parrafo5:
            "Además del encanto del río, este destino también es una oportunidad para conectar con la cultura local. Las comunidades que habitan la zona comparten con los viajeros su hospitalidad, tradiciones y conocimientos sobre la conservación de este ecosistema único.",
          parrafo6:
            "Visitar Caño Cristales no solo es un viaje turístico, sino también una experiencia transformadora que invita a valorar la riqueza natural de Colombia. Es un destino que combina aventura, paisajes incomparables y una profunda conexión con la naturaleza.",
          parrafo7: (
            <>
              En <strong>Viaja por Colombia</strong> estamos comprometidos en
              ofrecerte un servicio completo y de calidad. Te invitamos a
              registrar tus datos en nuestra sección de
              <Link
                to="/contacto"
                className="text-blue-400 hover:underline hover:text-blue-500"
              >
                {" "}
                contacto{" "}
              </Link>
              para que podamos asesorarte de manera personalizada. Nuestros
              paquetes todo incluido garantizan que cada detalle de tu viaje
              esté cubierto: desde los tiquetes aéreos y el hospedaje hasta los
              tours y traslados, brindándote comodidad, confianza y una
              experiencia de viaje organizada de principio a fin.
            </>
          ),
          parrafo8: (
            <>
              Haz clic{" "}
              <Link
                to="/contacto"
                className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
              >
                {" "}
                aquí
              </Link>{" "}
              y contáctanos para que podamos asesorarte y acompañarte en tu
              próxima aventura.
            </>
          ),
        },
      ],
    },
    {
      imagen: "/React-Landing/imagenes/pacifico.webp",
      titulo: "Region Pacífica",
      slug: "pacifico",
      parrafo1: (
        <>
          La <strong>Región Pacífica</strong> de Colombia se distingue por su
          exuberante biodiversidad y una riqueza cultural única que combina la
          herencia afrodescendiente, indígena y mestiza. Es un territorio donde
          la selva tropical se encuentra con el océano, creando paisajes
          inolvidables y un ambiente lleno de vida que fascina a quienes lo
          visitan. Sus costas bañadas por el Pacífico, su clima húmedo y la
          presencia constante de lluvias hacen que cada rincón esté lleno de
          vegetación, generando un ecosistema que late con fuerza propia y que
          ha sido poco explorado, lo que aumenta su misticismo y atractivo para
          los viajeros.
        </>
      ),
      parrafo2: (
        <>
          Dentro de esta región, el{" "}
          <Link
            to="/destinos/pacifico/choco"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            Chocó
          </Link>{" "}
          se convierte en el corazón de la experiencia pacífica. Sus selvas
          lluviosas, bañadas por ríos caudalosos y cascadas imponentes,
          resguardan una biodiversidad inigualable. Esta tierra es considerada
          uno de los lugares con mayor número de especies por metro cuadrado en
          el planeta, lo que la convierte en un destino soñado para
          investigadores, ecoturistas y aventureros. Caminar por sus senderos es
          descubrir plantas medicinales, aves multicolores y un entorno natural
          que refleja la grandeza de la selva colombiana.
        </>
      ),
      parrafo3: (
        <>
          Uno de los espectáculos más famosos del{" "}
          <Link
            to="/destinos/pacifico/choco"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            Chocó
          </Link>{" "}
          es el avistamiento de ballenas jorobadas, que cada año llegan a estas
          aguas para aparearse y dar a luz. Este fenómeno, que ocurre entre
          julio y noviembre, permite observar de cerca a estos gigantes del
          océano en su entorno natural. Escuchar sus cantos, ver sus saltos y
          sentir la energía del mar en movimiento es una experiencia
          transformadora que conecta profundamente al viajero con la grandeza de
          la naturaleza. Muchos visitantes coinciden en que este momento se
          convierte en uno de los recuerdos más especiales de sus vidas.
        </>
      ),
      parrafo4: (
        <>
          Además de la riqueza natural, la <strong>Región Pacífica</strong> es
          un mosaico cultural donde la música, la danza y la gastronomía juegan
          un papel fundamental. El currulao, con el sonido de la marimba, y los
          cantos tradicionales transmiten la esencia de sus comunidades,
          mientras que platos típicos como el encocado de pescado o el tapao de
          bagre conquistan el paladar de quienes se atreven a probar nuevos
          sabores. Cada celebración, ya sea una fiesta patronal o una reunión
          comunitaria, está llena de ritmos que evocan la conexión con los
          ancestros, y la gastronomía se convierte en un puente que une
          generaciones al mantener vivas recetas tradicionales transmitidas de
          padres a hijos.
        </>
      ),
      parrafo5: (
        <>
          Para los amantes de la aventura, el{" "}
          <Link
            to="/destinos/pacifico/choco"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            Chocó
          </Link>{" "}
          ofrece actividades que van desde caminatas por selvas exuberantes
          hasta recorridos por manglares y ríos navegables. También se pueden
          practicar deportes como kayak, buceo o rafting, siempre en contacto
          con la naturaleza. Lo más especial es que estas experiencias suelen
          estar acompañadas por guías locales, que comparten con los visitantes
          su conocimiento y su visión de respeto hacia la tierra y el mar.
        </>
      ),
      parrafo6: (
        <>
          En definitiva, la <strong>Región Pacífica</strong> es un destino que
          combina la fuerza de la naturaleza con la calidez de sus comunidades.
          El{" "}
          <Link
            to="/destinos/pacifico/choco"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            Chocó
          </Link>{" "}
          es solo una muestra de la grandeza de esta región, un lugar que invita
          a descubrir playas solitarias, selvas infinitas, culturas vivas y una
          conexión profunda con el Pacífico colombiano.
        </>
      ),
      parrafo7: (
        <>
          En <strong>Viaja por Colombia</strong> estamos comprometidos en
          ofrecerte un servicio completo y de calidad. Te invitamos a registrar
          tus datos en nuestra sección de
          <Link
            to="/contacto"
            className="text-blue-400 hover:underline hover:text-blue-500"
          >
            {" "}
            contacto{" "}
          </Link>
          para que podamos asesorarte de manera personalizada. Nuestros paquetes
          todo incluido garantizan que cada detalle de tu viaje esté cubierto:
          desde los tiquetes aéreos y el hospedaje hasta los tours y traslados,
          brindándote comodidad, confianza y una experiencia de viaje organizada
          de principio a fin.
        </>
      ),
      parrafo8: (
        <>
          Haz clic{" "}
          <Link
            to="/contacto"
            className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
          >
            {" "}
            aquí
          </Link>{" "}
          y contáctanos para que podamos asesorarte y acompañarte en tu próxima
          aventura.
        </>
      ),
      lugares: [
        {
          imagen: "/React-Landing/imagenes/choco2.webp",
          imagen2: "/React-Landing/imagenes/choco-3.webp",
          titulo: "Chocó",
          slug: "choco",
          parrafo1:
            "El Chocó es uno de los departamentos más biodiversos y auténticos de Colombia, un rincón del Pacífico que combina selvas exuberantes, ríos caudalosos y playas vírgenes bañadas por el océano. Su riqueza natural y cultural lo convierten en un destino único para quienes buscan aventura, tranquilidad y experiencias diferentes lejos de lo convencional.",
          parrafo2:
            "Uno de los mayores atractivos del Chocó es su sorprendente biodiversidad. Aquí es posible encontrar una gran variedad de aves, reptiles, mamíferos y especies marinas que hacen de la región un paraíso para el ecoturismo y la observación de fauna. Cada recorrido es una oportunidad para descubrir la magia de un territorio aún poco explorado.",
          parrafo3:
            "Las playas del Chocó, como las de Nuquí y Bahía Solano, son escenarios perfectos para disfrutar de la naturaleza en su máxima expresión. Sus arenas oscuras, palmeras y aguas cristalinas crean un ambiente paradisíaco donde se puede nadar, practicar deportes acuáticos o simplemente relajarse frente al mar.",
          parrafo4:
            "Entre los meses de julio y octubre, el Chocó se convierte en uno de los mejores lugares del mundo para avistar ballenas jorobadas. Estos gigantes del océano llegan a las cálidas aguas del Pacífico colombiano para aparearse y dar a luz, ofreciendo un espectáculo natural inolvidable que atrae a viajeros de todo el planeta.",
          parrafo5:
            "Además de su riqueza natural, el Chocó destaca por su diversidad cultural. Sus comunidades afrodescendientes e indígenas comparten tradiciones ancestrales a través de la música, la danza, la gastronomía y la artesanía, enriqueciendo la experiencia de los visitantes con un contacto genuino y cercano con su gente.",
          parrafo6:
            "Visitar el Chocó es adentrarse en un mundo de contrastes donde la selva se une con el mar y la cultura se entrelaza con la naturaleza. Es un destino ideal para aventureros, amantes de la ecología y viajeros que desean descubrir un lado diferente y fascinante de Colombia.",
          parrafo7: (
            <>
              En <strong>Viaja por Colombia</strong> estamos comprometidos en
              ofrecerte un servicio completo y de calidad. Te invitamos a
              registrar tus datos en nuestra sección de
              <Link
                to="/contacto"
                className="text-blue-400 hover:underline hover:text-blue-500"
              >
                {" "}
                contacto{" "}
              </Link>
              para que podamos asesorarte de manera personalizada. Nuestros
              paquetes todo incluido garantizan que cada detalle de tu viaje
              esté cubierto: desde los tiquetes aéreos y el hospedaje hasta los
              tours y traslados, brindándote comodidad, confianza y una
              experiencia de viaje organizada de principio a fin.
            </>
          ),
          parrafo8: (
            <>
              Haz clic{" "}
              <Link
                to="/contacto"
                className="text-blue-400 font-semibold hover:underline hover:text-blue-500 transition"
              >
                {" "}
                aquí
              </Link>{" "}
              y contáctanos para que podamos asesorarte y acompañarte en tu
              próxima aventura.
            </>
          ),
        },
      ],
    },
  ],
  contacto: {
    titulo: " Haremos de tu decisión una experiencia inolvidable",
    parrafo:"¡Completa el siguiente formulario y un asesor especializado estara en contacto con usted muy pronto!",
    parrafo1: (
      <>
        En <strong>Viaja por Colombia</strong> contamos con convenios exclusivos
        con los mejores hoteles de Colombia, ubicados en todos los destinos
        turísticos del territorio nacional. Gracias a estas alianzas
        estratégicas, ofrecemos hospedajes de primera calidad que garantizan
        comodidad, seguridad y experiencias memorables para cada viajero.
      </>
    ),

    parrafo2:
      "Además, tenemos contratos vigentes con todas las agencias de turismo del país, lo que nos permite acceder a la mayor variedad de servicios y experiencias en cada región. Desde recorridos culturales hasta aventuras extremas, nuestros clientes disfrutan siempre de las mejores opciones disponibles.",
    parrafo3:
      "Una de nuestras principales ventajas es que manejamos precios altamente competitivos, resultado de nuestras alianzas y acuerdos comerciales. Esto nos permite brindar paquetes turísticos de excelente calidad a costos accesibles, ajustados a las necesidades y presupuestos de cada persona.",
    parrafo4:
      "Ofrecemos paquetes con todo incluido, diseñados para que nuestros clientes viajen sin preocupaciones. Estos planes contemplan hospedaje, alimentación, actividades turísticas, transporte terrestre y mucho más, garantizando una experiencia completa y organizada de principio a fin.",
    parrafo5:
      "Sabemos que el transporte aéreo es clave en cualquier viaje, por eso brindamos la posibilidad de incluir los tiquetes aéreos con la aerolínea que el cliente prefiera. Esto otorga flexibilidad y comodidad, permitiendo que cada viajero elija la opción que mejor se adapte a su itinerario y preferencias.",
    parrafo6:
      "Si estás listo para vivir la experiencia de tus sueños con las mejores condiciones del mercado, te invitamos a dejar tus datos en el formulario que aparece en esta página. Uno de nuestros asesores se pondrá en contacto contigo para diseñar el paquete turístico ideal, hecho a tu medida.",
      errorReq:"Debes llenar este campo",
      errorReq2:"Debes seleccionar un tipo de documento",
      errorReq3: "Debes seleccionar una región.",
      errorReq4:"Selecciona un destino de la región elegida",
      errorMin1: "El nombre debe tener minimo dos caracteres",
      errorMin2:"El nombre debe tener minimo 5 caracteres",
      errorMin3:"El telefono debe tener minimo 10 caracteres",
      errorMin4:"La contraseña debe tener minimo ocho caracteres",
      errorMin5:"El mensaje debe tener minimo 10 caracteres",
      errorMax1:"El nombre debe tener maximo cuarenta caracteres",
      errorMax2:"El nombre debe tener maximo doce caracteres",
      errorMax3:"El telefono debe tener maximo 35 caracteres",
      errorMax4:"La contraseña debe tener maximo veinte caracteres",
      errorMax5:"El mensaje debe tener maximo 200 caracteres",
      notAllowed1:"No se permiten < ni >",
      notAllowed2:"No se permiten números",
      notAllowed3:"No se permiten caracteres especiales",
      notAllowed4:"No se permiten más de un espacio seguido",
      notAllowed5:"No se permiten letras",
      notAllowed6:"No se permiten < ni >,solo letras y números",
      notAllowed7:"Solo se permiten números, letras, espacios y los símbolos ()+",
      notAllowed8:"El símbolo '+' solo puede aparecer una vez",
      notAllowed9:"Los paréntesis solo pueden aparecer una vez",
      notAllowed10:"La contraseña debe tener mínimo una minúscula",
      notAllowed11:"La contraseña debe tener mínimo una mayúscula",
      notAllowed12:"La contraseña debe tener mínimo un número",
      notAllowed13:"La contraseña debe tener mínimo un caracter especial",
      notAllowed14:"Debe contener exactamente un '@'",
      notAllowed15:"La parte antes del '@' solo permite letras, números, punto, guion y guion bajo",
      notAllowed16:"La parte antes del '@' no puede iniciar o terminar con punto",
      notAllowed17:"El dominio no es válido (ej: ejemplo.com)",
      option1:"-- Selecciona un tipo de documento --",
      option2:"Cédula de ciudadanía",
      option3:"Tarjeta de identidad",
      option4:"Registro civil",
      option5:"Pasaporte",
      option6:"Cédula de extranjería",
      option7:"Número Único de Identificación (NUIP)",
      option8:"  -- Selecciona una Región destino --",
      option9:"Región Andina",
      option10:"Región Caribe",
      option11:"Región Insular",
      option12:"Región Amazónica",
      option13:"Región Orinoquía",
      option14:"Región Pacífica",
      option15:" -- Selecciona un destino -- ",
      button:"Enviar"
  },
  fotterTexto: [
    {
      texto1: "Atención en:",
      texto2: "Cl 38 No 15A-15 P-32",
      texto3: "Bogotá - Colombia",
      texto4: "+57 601 5600800",
      texto5: "300 829 2514",
      texto6: "Lun-Vi 8:30 A.M.-5:30 P.M",
      texto7: "Redes sociales",
      texto8: " Copyright©2025 Viaja por Colombia.🇨🇴",
    },
  ],
  fotterIconos: [
    {
      icono: "/React-Landing/icons/instagram.svg",
      nombre: "Instagram",
    },
    {
      icono: "/React-Landing/icons/facebook.svg",
      nombre: "Facebook",
    },
    {
      icono: "/React-Landing/icons/twitter-x.svg",
      nombre: "X",
    },
    {
      icono: "/React-Landing/icons/youtube.svg",
      nombre: "YouTube",
    },
  ],
};

export default datos;
