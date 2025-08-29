import Footer from "./Footer";
import datos from "../data/info.jsx";
import { useForm } from "react-hook-form";
import { useState,useEffect } from "react";
import closedeye from "/icons/eye-slash.svg";
import openedeye from "/icons/eye.svg";

function Contacto() {

    useEffect(() => {
        window.scrollTo(0,0);
      }, []);

  const {
    register,
    handleSubmit,
    reset,
    // getValues,
    // setValue,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  const [mostrarClave, setMostrarClave] = useState(false);

  const toggleVisibilidad = () => {
    setMostrarClave(!mostrarClave);
  };

  const enviarInformacion = handleSubmit((datos) => {
    alert(`la información ingresada fué:
    Nombre:${datos.nombre}
    Tipo de documento:${datos.tipo}
    Numero de documento: ${datos.identidad}
    Correo: ${datos.correo}
    Numero de contacto: ${datos.contacto}
    muy pronto estaras recibiendo toda la informacion que necesitas
    saber sobre ${datos.destino}
    Mensaje: ${datos.asunto}
    contraseña:${"*".repeat(datos.contraseña.length)}
  `);

    reset();
  });

  // genera una cadena de asteriscos con la misma longitud.
  // contraseña:${"*".repeat(datos.contraseña.length)}

  // Función de validación paso a paso
  const validarCorreo = (campo) => {
    const valor = String(campo ?? "").trim();

    if (!valor) return datos.contacto.errorReq ;

    // 1. Debe tener exactamente un "@"
    const partes = valor.split("@");
    if (partes.length !== 2) return datos.contacto.notAllowed14 ;

    const [local, dominio] = partes;

    // 2. Local-part (antes del @)
    if (/[^a-zA-Z0-9._-]+$/.test(local)) {
      return datos.contacto.notAllowed15 ;
    }
    if (local.startsWith(".") || local.endsWith(".")) {
      return datos.contacto.notAllowed16 ;
    }

    // 3. Dominio
    if (!/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(dominio)) {
      return datos.contacto.notAllowed17 ;
    }

    return true; //válido
  };

  // Observar el valor del select "region"
  const regionSeleccionada = watch("region");

  // Opciones de regiones y destinos
  const destinosPorRegion = {
    "R.Andina": [
      "Cali",
      "Bogotá",
      "Santander",
      "Eje Cafetero",
      "Nevado de Santa Isabel",
    ],
    "R.Caribe": ["Barranquilla", "Cartagena", "Santa Marta", "La Guajira"],
    "R.Insular": ["San Andrés", "Islas del Rosario"],
    "R.Amazónica": ["Amazonas"],
    "R.Orinoquía": ["Caño Cristales"],
    "R.Pacífica": ["Chocó"],
  };

  return (
    <section className="bg-gray-300 w-screen max-w-[2000px] h-full flex flex-col justify-center items-center ">
      <div className=" w-[84%] flex flex-col flex-wrap items-center ">
        <h2 className="text-6xl text-center  mt-64 w-[80%] font-extrabold  text-blue-600 mb-10">
          {datos.contacto.titulo}
        </h2>

        <p className="text-justify text-3xl w-[80%] my-10 justify-center max-md:text-5xl">
          {datos.contacto.parrafo1}
        </p>
        <p className="text-justify text-3xl w-[80%] my-10 justify-center max-md:text-5xl">
          {datos.contacto.parrafo2}
        </p>
        <p className="text-justify text-3xl w-[80%] my-10 justify-center max-md:text-5xl">
          {datos.contacto.parrafo3}
        </p>
        <form
          onSubmit={enviarInformacion}
          className="border border-black w-[70%] max-md:w-[100%] rounded-lg px-6 flex flex-col bg-black  items-center justify-center"
        >
          <p className="text-xl text-center text-white mt-5 max-md:text-4xl w-[64%] max-w:[63%]">
            {datos.contacto.parrafo}
          </p>
          <input
            className={`placeholder:max-md:text-3xl border rounded-lg p-4 w-full border-black mt-5 ${
              errors.nombre
                ? "outline outline-2 outline-red-600 border-red-600"
                : "border-black"
            } `}
            type="text"
            placeholder  ="Nombre completo"
            {...register("nombre", {
              required: {
                value: true,
                message: datos.contacto.errorReq ,
              },
              minLength: {
                value: 2,
                message: datos.contacto.errorMin1 ,
              },
              maxLength: {
                value: 40,
                message: datos.contacto.errorMax1 ,
              },

              validate: (valor) => {
                if (/[<>]/.test(valor)) {
                  return datos.contacto.notAllowed1 ;
                }

                if (/\d/.test(valor)) {
                  return datos.contacto.notAllowed2 ;
                }

                // if (/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(valor)) {
                //   return "No se permiten letras";
                // }

                if (/[^0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(valor)) {
                  return datos.contacto.notAllowed3 ;
                }

                if (/ {2,}/.test(valor)) {
                  return datos.contacto.notAllowed4 ;
                }

                return true;
              },

              // setValueAs es una función de react-hook-form que recibe el valor que el usuario escribió en el input (value).
              // Tú decides qué hacer con ese valor antes de guardarlo en el formulario.
              // Si transformas el valor (ejemplo: eliminar caracteres), el formulario guardará la versión transformada, no la original.

              // con esta opcion deja escribir numeros ,< y > , y caracteres especiales, deja colocar todos los espacios que quieras
              // y al darle enviar los elimina pero no muestra los mensajes de error en la medida que se van dando
              // setValueAs: (value) => {
              //   if (!value) return "";

              //   let limpio = value;

              //   // 1. Quitar más de un espacio seguido
              //   limpio = limpio.replace(/ {2,}/g, " ");

              //   // 2. Quitar signos < y >
              //   limpio = limpio.replace(/[<>]/g, "");

              //   // 3. Quitar números
              //   limpio = limpio.replace(/\d/g, "");

              //   // 4. Quitar caracteres especiales (solo letras y espacios)
              //   limpio = limpio.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");

              //   return limpio.trim(); // quitar espacios al inicio/final
              // },
            })}

            // onchange no deja escribir escribir numeros ,< y > , caracteres especiales, ni deja colocar todos los espacios que quieras
            // pq enseguida los elimina pero tampoco muestra los mensajes que uno quiere

            // // onChange={(e) => {
            //   let value = e.target.value;

            //   // 1. Eliminar más de un espacio seguido
            //   value = value.replace(/ {2,}/g, " ");

            //   // 2. Eliminar signos < o >
            //   value = value.replace(/[<>]/g, "");

            //   // 3. Eliminar números
            //   value = value.replace(/\d/g, "");

            //   // 4. Eliminar caracteres especiales (solo dejar letras, acentos y espacios)
            //   value = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");

            //   e.target.value = value.trimStart();
            // }}
          />
          {errors.nombre && (
            <span className="text-red-600 text-2xl max-md:text-4xl">{errors.nombre.message}</span>
          )}
          <select
            className={`border rounded-lg p-4 w-full border-black mt-5 ${
              errors.tipo
                ? "outline outline-2 outline-red-600 border-red-600"
                : "border-black"
            }`}
             defaultValue=""
            {...register("tipo", {
              required: {
                value: true,
                message: datos.contacto.errorReq2 ,
              },
            })}
          >
            <option value="" disabled hidden>
              {datos.contacto.option1}
            </option>
            <option value="Cédula de ciudadanía">{datos.contacto.option2}</option>
            <option value="Tarjeta de identidad">{datos.contacto.option3}</option>
            <option value="Registro civil">{datos.contacto.option4}</option>
            <option value="Pasaporte">{datos.contacto.option5}</option>
            <option value="Cédula de extranjería">{datos.contacto.option6}</option>
            <option value="NUIP">{datos.contacto.option7}</option>
          </select>
          {errors.tipo && (
            <span className="text-red-600 text-2xl max-md:text-4xl">{errors.tipo.message}</span>
          )}
          <input
            className={`placeholder:max-md:text-3xl border rounded-lg p-4 w-full border-black mt-5 ${
              errors.identidad
                ? "outline outline-2 outline-red-600 border-red-600"
                : "border-black"
            } `}
            type="text"
            placeholder="Numero de documento"
            {...register("identidad", {
              required: {
                value: true,
                message: datos.contacto.errorReq ,
              },
              minLength: {
                value: 5,
                message: datos.contacto.errorMin2 ,
              },
              maxLength: {
                value: 12,
                message: datos.contacto.errorMax2,
              },

              validate: (valor) => {
                if (/[<>]/.test(valor)) {
                  return datos.contacto.notAllowed1 ;
                }

                // if (/\d/.test(valor)) {
                //   return "No se permiten números";
                // }

                if (/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(valor)) {
                  return datos.contacto.notAllowed5 ;
                }

                if (/[^0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(valor)) {
                  return datos.contacto.notAllowed3 ;
                }

                if (/ {2,}/.test(valor)) {
                  return datos.contacto.notAllowed4 ;
                }

                return true;
              },

              // setValueAs es una función de react-hook-form que recibe el valor que el usuario escribió en el input (value).
              // Tú decides qué hacer con ese valor antes de guardarlo en el formulario.
              // Si transformas el valor (ejemplo: eliminar caracteres), el formulario guardará la versión transformada, no la original.

              // setValueAs: (value) => {
              //   if (!value) return "";

              //   let limpio = value;

              //   // 1. Quitar espacios
              //   limpio = limpio.replace(/\s+/g, "");

              //   // 2. Quitar signos < y >
              //   limpio = limpio.replace(/[<>]/g, "");

              //   // 3. Solo permitir letras (incluye tildes) y números
              //   limpio = limpio.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]/g, "");

              //   return limpio.trim();
              // },
            })}
          />
          {errors.identidad && (
            <span className="text-red-600 text-2xl max-md:text-4xl">{errors.identidad.message}</span>
          )}{" "}
          <input
            className={`placeholder:max-md:text-3xl border rounded-lg p-4 w-full mt-5 border-black  ${
              errors.contacto
                ? "outline outline-2 outline-red-600 border-red-600"
                : "border-black"
            } `}
            type="text"
            placeholder="Numero de contacto"
            {...register("contacto", {
              required: {
                value: true,
                message: datos.contacto.errorReq ,
              },
              minLength: {
                value: 10,
                message: datos.contacto.errorMin3 ,
              },
              maxLength: {
                value: 35,
                message: datos.contacto.errorMax3 ,
              },

              validate: (valor) => {
                if (/[<>]/.test(valor)) {
                  return datos.contacto.notAllowed6 ;
                }

                // if (/\d/.test(valor)) {
                //   return "No se permiten números";
                // }

                // if (/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(valor)) {
                //   return "No se permiten letras";
                // }

                // if (/[^0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(valor)) {
                //   return "No se permiten caracteres especiales, solo letras y números";
                // }
                // Solo permitir números, letras, espacios y una sola vez (), +
                if (/[^0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s()+]/.test(valor)) {
                  return datos.contacto.notAllowed7 ;
                }

                // Validar que () y + no se repitan más de una vez
                if ((valor.match(/\+/g) || []).length > 1) {
                  return datos.contacto.notAllowed8 ;
                }
                if (
                  (valor.match(/\(/g) || []).length > 1 ||
                  (valor.match(/\)/g) || []).length > 1
                ) {
                  return datos.contacto.notAllowed9 ;
                }

                if (/ {2,}/.test(valor)) {
                  return datos.contacto.notAllowed4 ;
                }

                return true;
              },

              // validate: (valor) => {
              //   // quitar espacios iniciales/finales
              //   valor = valor.trim();

              //   // // regla: max 20 caracteres
              //   // if (valor.length < 21) {
              //   //   return "Máximo 20 caracteres";
              //   // }

              //   // regla: no < ni >
              //   if (/[<>]/.test(valor)) {
              //     return "No se permiten < ni >";
              //   }

              //   // regla: solo números, espacios y 'ext.'
              //   if (/[^0-9ext\s.]/i.test(valor)) {
              //     return "Solo se permiten números, espacios y 'ext.'";
              //   }

              //   // regla: no más de un espacio seguido
              //   if (/ {2,}/.test(valor)) {
              //     return "No se permiten más de un espacio seguido";
              //   }

              //   // celulares: 10 dígitos exactos
              //   const soloNumeros = valor.replace(/\D/g, "");
              //   if (/^\d{10}$/.test(soloNumeros)) {
              //     return true;
              //   }

              //   // fijo: 7–8 dígitos + opcional ext.
              //   if (/^\d{7,8}(\s*ext\.?\s*\d+)?$/i.test(valor)) {
              //     return true;
              //   }

              //   return "Número inválido (celular de 10 dígitos o fijo con extensión)";
              // },
              // onChange: () => {
              //   // Inicializa la variable 'valor' como un string vacío
              //   let valor = "";

              //   // Obtiene el valor actual del input llamado "contacto"
              //   valor = getValues("contacto");

              //   // Elimina todo lo que NO sea número (solo deja dígitos del 0 al 9)
              //   valor = valor.replace(/[^0-9]/g, "");

              //   // Limita la longitud del número a un máximo de 10 caracteres
              //   valor = valor.slice(0, 10);

              //   // Da formato al número: divide en 3-3-4 dígitos y los separa con espacios
              //   // Ejemplo: "3001234567" → "300 123 4567"
              //   valor = valor.replace(/(.{3})(.{3})(.{4})/g, "$1 $2 $3");

              //   // Actualiza el campo "contacto" en el formulario con el valor ya formateado
              //   setValue("contacto", valor);
              // },
            })}
          />
          {errors.contacto && (
            <span className="text-red-600 text-2xl max-md:text-4xl">{errors.contacto.message}</span>
          )}
          <input
            className={`placeholder:max-md:text-3xl border rounded-lg p-4 w-full border-black mt-5 ${
              errors.correo
                ? "outline outline-2 outline-red-600 border-red-600"
                : "border-black"
            } `}
            type="text"
            placeholder="Correo electronico"
            {...register("correo", {
              required: {
                value: true,
                message: datos.contacto.errorReq ,
              },
              validate: (campo) => {
                // Aquí llamas tu función validarCorreo paso a paso
                const resultado = validarCorreo(campo);
                return resultado === true ? true : resultado;
              },
              // validate: (campo) => {
              //   //[a-zA-Z0-9.-] correo empieza con letras,numeros,punto o guion
              //   //el correo debe tener @
              //   //[a-zA-Z0-9.-] lo que sigue al arroba debe tener letras,numeros,punto o guion
              //   //\. lo que sigue debe tener punto
              //   //[a-zA-Z]{2,} finalmente debe tener minimo dos letras
              //   //test(algo) verificar si un texto cumple con nuestro regex

              //   const esCorreo =
              //     /[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(campo);
              //   if (!esCorreo) {
              //     return "El correo ingresado no es valido";
              //   }
              // },
            })}
          />
          {errors.correo && (
            <span className="text-red-600 text-2xl max-md:text-4xl">{errors.correo.message}</span>
          )}
          <div className="flex flex-col items-center relative w-full">
            <img
              className="pl-1 cursor-pointer absolute top-1/2 right-1"
              onClick={toggleVisibilidad}
              src={
                mostrarClave
                  ? closedeye
                  : openedeye
              }
              alt=""
            />

            <input
              className={`placeholder:max-md:text-3xl border rounded-lg p-4 w-full border-black mt-5 ${
                errors.contraseña
                  ? "outline outline-2 outline-red-600 border-red-600"
                  : "border-black"
              } `}
              type={mostrarClave ? "text" : "password"} //  aquí el cambio
              placeholder="Contraseña opcional, se recomienda gestionar para futuras consultas"
              {...register("contraseña", {
                minLength: {
                  value: 8,
                  message: datos.contacto.errorMin4 ,
                },
                maxLength: {
                  value: 20,
                  message: datos.contacto.errorMax4 ,
                },
                validate: (campo) => {
                  //Si está vacío, es válido (opcional)
                  if (!campo) return true;

                  const hayMinuscula = /[a-z]/.test(campo);
                  if (!hayMinuscula) {
                    return datos.contacto.notAllowed10 ;
                  }

                  const hayMayuscula = /[A-Z]/.test(campo);
                  if (!hayMayuscula) {
                    return datos.contacto.notAllowed11 ;
                  }

                  const hayNumero = /[0-9]/.test(campo);
                  if (!hayNumero) {
                    return datos.contacto.notAllowed12 ;
                  }

                  const hayCaracterEspecial = /[^0-9A-Za-z]/.test(campo);
                  if (!hayCaracterEspecial) {
                    return datos.contacto.notAllowed13 ;
                  }
                  if (/[<>]/.test(campo)) {
                    return datos.contacto.notAllowed1 ;
                  }

                  //Si pasa todas las validaciones
                  return true;
                },
              })}
            />
            {errors.contraseña && (
              <span className="text-red-600 text-2xl max-md:text-4xl">{errors.contraseña.message}</span>
            )}
          </div>
          <select
            className={` border rounded-lg p-4 w-full border-black mt-5 ${
              errors.region
                ? "outline outline-2 outline-red-600 border-red-600"
                : "border-black"
            }`}
            defaultValue=""
            {...register("region", {
              required: {
                value: true,
                message:
                 datos.contacto.errorReq3,
              },
            })}
          >
            <option value="" disabled hidden >
              {datos.contacto.option8}
            </option>
            <option value="R.Andina">{datos.contacto.option9}</option>
            <option value="R.Caribe">{datos.contacto.option10}</option>
            <option value="R.Insular">{datos.contacto.option11}</option>
            <option value="R.Amazónica">{datos.contacto.option12}</option>
            <option value="R.Orinoquía">{datos.contacto.option13}</option>
            <option value="R.Pacífica">{datos.contacto.option14}</option>
          </select>
          {errors.region && (
            <span className="text-red-600 text-2xl max-md:text-4xl ">{errors.region.message}</span>
          )}
          {/* SELECT DESTINO */}
          { regionSeleccionada && (
            <>
            <select
              className={` border rounded-lg p-4 w-full border-black mt-5 ${
                errors.destino
                  ? "outline outline-2 outline-red-600 border-red-600"
                  : "border-black"
              }`}
              defaultValue=""
              {...register("destino", {
                required: {
                  value: true,
                  message: datos.contacto.errorReq4 ,
                },
              })}
              // disabled={!regionSeleccionada} // deshabilitado hasta que se escoja región
            >
              <option value="" disabled hidden>
                 {datos.contacto.option15}
              </option>
                {destinosPorRegion[regionSeleccionada].map((destino) => (
                  <option key={destino} value={destino}>
                    {destino}
                  </option>
                ))}
            </select>
            {errors.destino && (
              <span className="text-red-600 text-2xl max-md:text-4xl">{errors.destino.message}</span>
            )}
            </>
          )}
          <textarea
            className={`placeholder:max-md:text-2xl  border rounded-lg p-4 w-full border-black my-10 ${
              errors.asunto
                ? "outline outline-2 outline-red-600 border-red-600"
                : "border-black"
            } `}
            type="text"
            placeholder="Asunto: deja tus comentarios sobre la informacion que deseas obtener"
            {...register("asunto", {
              required: {
                value: false,
                message: datos.contacto.errorReq ,
              },
              minLength: {
                value: 10,
                message: datos.contacto.errorMin5 ,
              },
              maxLength: {
                value: 200,
                message: datos.contacto.errorMax5 ,
              },
              validate: (valor) => {
                if (/[<>]/.test(valor)) {
                  return datos.contacto.notAllowed1 ;
                }

                // if (/\d/.test(valor)) {
                //   return "No se permiten números";
                // }

                // if (/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(valor)) {
                //   return "No se permiten letras";
                // }

                // if (/[^0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(valor)) {
                //   return "No se permiten caracteres especiales";
                // }

                if (/ {2,}/.test(valor)) {
                  return datos.contacto.notAllowed4 ;
                }

                return true;
              },
              // setValueAs: (value) => {
              //   if (!value) return "";

              //   let limpio = value;

              //   // 1. Quitar más de un espacio seguido
              //   limpio = limpio.replace(/ {2,}/g, " ");

              //   // 2. Quitar signos < y >
              //   limpio = limpio.replace(/[<>]/g, "");

              //   return limpio.trim(); // quitar espacios al inicio/final
              // },
            })}
          />
          {errors.asunto && (
            <span className="text-red-600 text-2xl max-md:text-4xl">{errors.asunto.message}</span>
          )}
          <button className="bg-[#FFD700] w-1/4 rounded-lg m-10 py-2 hover:shadow-yellow-200  hover:shadow-[1px_1px_15px_rgba(255,215,0,0.8)]">
            <p className="transition-transform duration-500 hover:scale-125 text-xl max-md:text-3xl">
              {" "}
              {datos.contacto.button}{" "}
            </p>
          </button>
        </form>
        <p className="text-justify text-3xl w-[80%] my-10 justify-center max-md:text-5xl">
          {datos.contacto.parrafo4}
        </p>
        <p className="text-justify text-3xl w-[80%] my-10 justify-center max-md:text-5xl">
          {datos.contacto.parrafo5}
        </p>
        <p className="text-justify text-3xl w-[80%] my-10 justify-center max-md:text-5xl">
          {datos.contacto.parrafo6}
        </p>
      </div>
      <Footer />
    </section>
  );
}

export default Contacto;


