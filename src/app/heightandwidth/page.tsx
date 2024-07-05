
export default function HeightAndWidth() {
  return (
    <div>
      {/* 
        Establecer el ancho del componente h1 a 357px.
        Las medidas especídicas las podemos poner entre [].
      */}
      <h1 className="bg-red-400 text-3xl font-bold underline w-[357px]">Alto y ancho en Tailwind</h1>

      {/* 
        He definido un 98 de 357px en el bloque spacing del tailwind.config.ts 
      */}
      <h2 className="mt-5 bg-gray-600 text-2xl w-98">Usando un ancho establecido en el archivo de configuración de tailwind.</h2>

      {/* 
        Se puede usar el mismo valor definifido en configuración de tailwind para la altura 98 de 357px. 
      */}
      <h2 className="mt-5 bg-gray-600 text-2xl w-98 h-98">Usando el mismo valor de ancho y alto establecido en el archivo de configuración de tailwind.</h2>

      {/* 
        h-screen ocupará el 100% de la vista disponible, haciendo scroll hacia abajo para ocuparlo 
        si fuera necesario. 
      */}
      {/* <div className="bg-red-400 h-screen"></div> */}

      {/* 
        h-screen ocupará el 100% de su contenedor, haciendo scroll hacia abajo para ocuparlo 
        si fuera necesario. ¡¡No es compatible con h-screen!! 
      */}
      <div className="mt-5 bg-red-400 h-full">Este es su contenedor.</div>
    </div>
  )
}
