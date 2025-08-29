// Importamos useState para manejar estados locales, useRef para referencias mutables y useEffect para efectos secundarios.
import { useState, useRef, useEffect } from "react";
// Importamos Link y useLocation de react-router-dom para manejar navegación y obtener la ruta actual.
import { Link, useLocation } from "react-router-dom"; 
// Importamos el objeto de datos con el contenido del menú y el logo.
import datos from "../data/info.jsx";
import hamburguesa from "/icons/hamburguesa.svg"

function Header() {
  // Estado que controla si el menú hamburguesa está abierto o cerrado.
  const [menu, setMenu] = useState(false); 
  // Estado que guarda cuál submenú está activo al hacer hover.
  const [submenuActivo, setSubmenuActivo] = useState(null); 
  // Estado que bloquea temporalmente el hover de los submenús (para evitar reabrir al instante).
  const [submenuBlocked, setSubmenuBlocked] = useState(false); 
  // useRef para guardar el id del temporizador setTimeout y poder limpiarlo después.
  const unblockTimerRef = useRef(null); 
  // Obtenemos la ruta actual para detectar cambios de navegación.
  const location = useLocation();
  // useEffect que limpia el temporizador al desmontar el componente para evitar fugas de memoria.
  useEffect(() => {
    return () => {
      // Si existe un temporizador activo, lo limpiamos.
      if (unblockTimerRef.current) clearTimeout(unblockTimerRef.current);
    };
  }, []);

  // useEffect que se ejecuta cada vez que cambia la ruta → cierra el menú hamburguesa.
  useEffect(() => {
    setMenu(false);
  }, [location.pathname]);

  // Función que cierra TODO cuando se hace click en cualquier Link.
  const cerrarTodo = () => {
    // Cierra el menú hamburguesa en móviles.
    setMenu(false); 
    // Cierra cualquier submenú activo.
    setSubmenuActivo(null); 
    // Activa el bloqueo temporal para evitar que el hover vuelva a abrir inmediatamente.
    setSubmenuBlocked(true); 
    // Si existe un temporizador previo, lo limpiamos para no acumular varios.
    if (unblockTimerRef.current) clearTimeout(unblockTimerRef.current);
    // Creamos un nuevo temporizador de 100ms para desbloquear el hover.
    unblockTimerRef.current = setTimeout(() => {
      // Pasados los 100ms, permitimos otra vez abrir los submenús con hover.
      setSubmenuBlocked(false);
      // Limpiamos la referencia porque ya no hay temporizador activo.
      unblockTimerRef.current = null;
    }, 100);
  };

  // Función que devuelve las clases CSS de cada lista <ul> dependiendo de su nivel (depth).
  const getUlClasses = (depth) => {
    switch (depth) {
      // Menú principal (nivel 0)
      case 0:
        return " absolute left-0 top-full hidden group-hover/a:block rounded-md shadow-lg z-50";
      // Submenú de primer nivel (nivel 1)
      case 1:
        return " absolute right-full top-0 hidden group-hover/b:block rounded-md shadow-lg z-50 flex justify-center items-center";
      // Submenús más profundos (nivel 2+)
      default:
        return " absolute right-full top-0 hidden group-hover/c:block rounded-md shadow-lg z-50";
    }
  };

  // Función recursiva que genera los elementos del menú a partir de los datos.
  const renderMenu = (items = [], basePath = "", depth = 0, parentKey = "") =>
    // Recorremos cada item del menú.
    items.map((item, index) => {
      // Verificamos si el item tiene submenú.
      const hasSubmenu = item.subNav || item.subMenu;
      // Guardamos los sub-items (si existen).
      const subItems = item.subNav || item.subMenu;
      // Concatenamos la ruta completa del item.
      const fullPath = `${basePath}${item.link}`;
      // Creamos una key única para cada item.
      const uniqueKey = parentKey ? `${parentKey}-${index}` : `${index}`;

      // Clases dinámicas para los <li> dependiendo de la profundidad.
      const liClasses =
        depth === 0
          ? "relative group/a"
          : depth === 1
          ? "relative group/b"
          : "relative group/c w-52 flex justify-center w-[18rem]";

      // Clases dinámicas para los <Link> dependiendo de la profundidad.
      const linkClasses =
        depth === 0
          ? "text-[1.5rem]  flex items-center justify-center px-2 h-8 text-white text-xl hover:bg-black/25 transition-colors hover:underline"
          : "text-[1.5rem]  flex items-center justify-center px-2 h-8 text-white text-lg hover:bg-black/25 transition-colors hover:underline";

      // Si el item tiene submenú:
      if (hasSubmenu) {
        return (
          <li
            key={uniqueKey}
            // Clases dinámicas y responsive (oculta en móvil si el menú hamburguesa no está activo).
            className={` relative group transition-transform duration-400 ${liClasses} ${
              menu ? "max-md:block" : "max-md:hidden"
            } text-xl font-bold`}
            // Al hacer hover sobre el item, activamos su submenú (si no está bloqueado).
            onMouseEnter={() => {
              if (!submenuBlocked) setSubmenuActivo(uniqueKey);
            }}
            // Al salir del hover, cerramos el submenú (si no está bloqueado).
            onMouseLeave={() => {
              if (!submenuBlocked) setSubmenuActivo(null);
            }}
          >
            {/* Link del menú con evento para cerrar todo al hacer click */}
            <Link to={fullPath} className={linkClasses} onClick={cerrarTodo}>
              {item.nombre}
            </Link>
            {/* Renderizamos el submenú */}
            <ul
              className={`${getUlClasses(depth)} ${
                submenuBlocked ? "!hidden" : submenuActivo === uniqueKey ? "block" : ""
              }`}
            >
              {/* Llamada recursiva para renderizar sub-items */}
              {renderMenu(subItems, fullPath, depth + 1, uniqueKey)}
            </ul>
          </li>
        );
      }

      // Si el item NO tiene submenú:
      return (
        <li
          key={uniqueKey}
          className={` relative group transition-transform duration-400 ${liClasses} ${
            menu ? "max-md:block" : "max-md:hidden"
          } text-xl font-bold`}
        >
          {/* Link normal sin submenú */}
          <Link to={fullPath} className={linkClasses} onClick={cerrarTodo}>
            {item.nombre}
          </Link>
        </li>
      );
    });

  return (
    // Header principal fijo en la parte superior, con logo y navegación.
    <header className="bg-transparent flex justify-between fixed z-30 w-screen items-center select-none pr-24">
      {/* Contenedor del logo y título */}
      <div className="flex space-x-2 items-center">
        {/* Imagen del logo */}
        <img
          className="w-16 h-18 ml-4 mt-4"
          src={datos.header.logo}
          alt="Mapa de Colombia"
        />
        {/* Título del header */}
        <h1 className="font-bold font-mono text-4xl text-white max-sm:w-36 max-md:text-3xl ">
          {datos.header.titulo}
        </h1>
      </div>

      {/* Menú de navegación */}
      <nav className="relative">
        {/* Icono del menú hamburguesa (solo visible en móvil) */}
        <img
          className="h-8 flex md:hidden relative right-14 hover:bg-black/20 hover:rounded-md"
          src={hamburguesa}
          alt="Menú"
          onClick={() => setMenu(!menu)}
        />
        {/* Lista principal del menú */}
        <ul className="relative flex max-md:flex-col max-md:absolute max-md:top-full max-md:right-1">
          {renderMenu(datos.header.nav)}
        </ul>
      </nav>
    </header>
  );
}

export default Header;