import config from '../../../tailwind.config';


export default function States() {
  return (
    // Establecer el color del fondo. No funcionará en modo oscuro.
    <div className="bg-blue-400 w-full h-screen">

      {/* 
        Ponemos el título (algo feo, pero es un ejemplo ;-) 
      */}
      <h1 className="bg-red-400 text-3xl font-bold underline text-center">Estados en campos input con Tailwind.</h1>

      {/* 
        Establecer color de fondo del formulario y un ancho de 320px y lo centramos autmáticamente.
        Margen superior de 32px. (mt-8)
        Redondeamos los bordes. (rounded-lg)
        Establecemos un padding de 24px. (p-6)
      */}
      <form action="" className="bg-white w-80 mx-auto mt-8 rounded-lg p-6">

        {/* 
          Estilo de los inputs.
          ---------------------
          Le decimos que el color del texto va a ser negro.
          Establecemos el borde y le damos un color gris.
          Hacemos que llenen todo el espacio del contenedor (w-full).
          Le damos una separacion horizontal de 12px (px-3) y vertical de 8px (py-8).
          Finalmente le damos un margen inferor de 16px (mb-4) y 
          redondeamos los bordes con rounded-md.
          Podemos indicar un color para el estado 'disabled", por ejemplo un rojo claro.
        */}
        <input className="text-black border border-gray-300 w-full px-3 py-2 mb-4 rounded-md disabled:bg-red-200"
          type="text"
          placeholder="Nombre"
          disabled />

        {/* 
          Vamos a cambiar el color del border cuando el campo input recibe el foco.
          Primero desactivaremoe el color por defecto con focus:outline-none.
          Después le damos un ancho al borde con focus:ring-1 (prueba otros valores).
          Y le damos el color con focus:ring-purple-600 (u otro color). 
          Con el estado 'invalid' (en este caso el email), podemos establecer el focus:ring
          que queramos (ver ejemplo).
        */}
        <input className="text-black border border-gray-300 w-full px-3 py-2 rounded-md
                focus:outline-none focus:ring-1 focus:ring-purple-600
                invalid:focus:ring-red-700 peer"
          type="email"
          placeholder="Correo" />
        {/* 
            Vamos a poner un mensaje de error cuando el correo no sea correcto.
            Quitamos el mb-4 del input de email y ponemor un mt-4 en el boton para que se separen, 
            dejando el texto jusro debajo del campo del correo.
            El párrafo se mantendrá oculto (hidden) y se mostrará cuando el correo sea incorrecto.
            Usaremos la propiedad 'peer' en el correo y en el mensaje, indicaremos que  se muestrs
            si es incorrecto (peer-invalid:block).
          */}
        <p className='text-red-500 hidden peer-invalid:block'>El email introducido no es correcto.</p>


        <input className="text-black border border-gray-300 w-full px-3 py-2 mt-4 mb-4 rounded-md"
          type="password"
          placeholder="Contraseña" />

        {/* 
          Estilo del botón.
          -----------------
          Establecemos un fondo azul.
          Hacemos que ocupe todo el ancho disponible.
          Le damos una separacion vertical de 8px arriba y abajo.
          El texto lo ponemos en blanco.
          Redondeamos los bordes.
          Hacemos que cambie el cursor cuando pasa por encima.
          Establecemos un color para cuando el cursor pasa por encima.
        */}
        <input className="bg-blue-500 w-full py-2 text-white rounded-md cursor-pointer hover:bg-blue-400"
          type="submit"
          value="Ingresar" />

      </form>

    </div>
  )
}
