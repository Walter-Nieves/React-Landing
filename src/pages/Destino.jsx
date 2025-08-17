//Importa el hook useLocation de React Router, que te da acceso a la URL actual del navegador (como /regiones/caribe/cartagena).
import { useLocation } from "react-router-dom";

function Destino() {
    //pathname extrae la URL actual.
  const { pathname } = useLocation();

//pathname.split("/"): divide la cadena en partes por cada /.
//Resultado: ["", "regiones", "caribe", "cartagena"]
//.filter(Boolean): elimina los elementos vacíos (como el primero), dejándote:
//["regiones", "caribe", "cartagena"]

  const partes = pathname.split("/").filter(Boolean); // elimina elementos vacíos

//partes.at(-1): obtiene el último segmento, es decir, el lugar (ej. "cartagena").
//.replace("-", " "): convierte guiones en espacios. Ej: "santa-marta" → "santa marta".
  const lugar = partes.at(-1)?.replace("-", " ");

//Si hay más de dos partes en la URL (por ejemplo, hay región y lugar):
//partes.at(-2): toma la penúltima parte (la región).
//Si no, se asume que la región es igual al lugar (para rutas como /caribe sin lugar específico).
  const region = partes.length > 2 ? partes.at(-2)?.replace("-", " ") : lugar;

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-black to-gray-900 p-6 text-center">
      <h1 className="text-4xl font-bold mb-4 capitalize">
        {lugar} {region !== lugar ? `– Región ${region}` : ""}
      </h1>
      <p className="text-lg">
        Bienvenido a <strong>{lugar}</strong>{region !== lugar ? ` en la región ${region}` : ""}.
      </p>
    </div>
  );
}

export default Destino;
