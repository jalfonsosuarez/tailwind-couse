
export default function BreakPointPage() {
  return (
    <div className="bg-blue-400 w-full h-screen sm:bg-amber-200">

      {/* 
        Ponemos el título (algo feo, pero es un ejemplo ;-) 
      */}
      <h1 className="bg-red-400 text-3xl font-bold underline text-center">Breakpoints - Responsive Design - Tailwind.</h1>

      {/* 
        Estamos creando una terjeta que queremos sea responsive.
        Todas las clases de Tailwind que se han indicado, han sido explicadas anteriormente.
        Documentación de Taliwind donde se explican los puntos de corte para los distintos
        tamaños de pantalla https://tailwindcss.com/docs/responsive-design, hay que tener en
        cuenta que por defecto, Tailwind es 'mobile first', es decir, las clases se aplican a
        diseño mobile y para otro tipo de pantallas hay que indicarlo con los 'breakpoint prefix',
        que es tamaño donde empezará a mostrarse para navegadores.

        En el primer div se indica un sm:bg-amber-200, significa que para pantallas superiores a
        640px de ancho, se mostrará el color de fondo amber-200, mientras que para pantallas menores se aplicará el
        blue-200.

        Se cambia el tamaño de la tarjeta a 384px y el titulo a 3xl cuando el ancho de la pantalla 
        sobrepase los 1024px.

        Los puntos de cambio de anchura de la pantalla se pueden personalizar en el archivo
        tailwind.config.ts tal y como se indica en la documentación. Hay que tener en cuenta que al 
        hacer estos cambios, se pierden los valores establecidos por defecto en Tailwind.

        Al llegar a 1280px de anchura, las tarjetas se pondran en horizontal.
      */}
      <section className="xl:flex">
        <div className="border-2 border-black p-6 w-80 mx-auto mt-10 lg:w-96 bg-white text-black">
          {/* 
          Cambiamos el tamaño del texto cuando la pantalla sobrepase los 640px de anchura.
        */}
          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">Aprendiendo Tailwind CSS</h2>
          {/* 
          Cambiamoe el tamaño del texto al sobrepasar la pantalla los 768px de anchura. 
        */}
          <p className="mt-16 md:text-2xl">Aprendiedo de forma simple y práctica a usar Tailwind CSS</p>
        </div>

        <div className="border-2 border-black p-6 w-80 mx-auto mt-10 lg:w-96 bg-white text-black">
          {/* 
          Cambiamos el tamaño del texto cuando la pantalla sobrepase los 640px de anchura.
        */}
          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">Aprendiendo Tailwind CSS</h2>
          {/* 
          Cambiamoe el tamaño del texto al sobrepasar la pantalla los 768px de anchura. 
        */}
          <p className="mt-16 md:text-2xl">Aprendiedo de forma simple y práctica a usar Tailwind CSS</p>
        </div>

        <div className="border-2 border-black p-6 w-80 mx-auto mt-10 lg:w-96 bg-white text-black">
          {/* 
          Cambiamos el tamaño del texto cuando la pantalla sobrepase los 640px de anchura.
        */}
          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">Aprendiendo Tailwind CSS</h2>
          {/* 
          Cambiamoe el tamaño del texto al sobrepasar la pantalla los 768px de anchura. 
        */}
          <p className="mt-16 md:text-2xl">Aprendiedo de forma simple y práctica a usar Tailwind CSS</p>
        </div>
      </section>
    </div>
  );
}