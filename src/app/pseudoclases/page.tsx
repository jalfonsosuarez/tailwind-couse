

export default function Pseudoclases
  () {
  return (
    <div className="bg-blue-400 w-full h-screen">

      {/* 
        Ponemos el título (algo feo, pero es un ejemplo ;-) 
      */}
      <h1 className="bg-red-400 text-3xl font-bold underline text-center">Pseudoclases Tailwind.</h1>

      {/* Pseudoclase 'after' */}
      <div className="p-4">

        <p className="text-xl mb-2">Pseudoclase after</p>

        {/* 
          La pseudoclase 'after' permite añadir contenido después de algo.
          En este caso ponemos un 'Hola' después de lo que hay en el botón. 
          Al añadirse contenido dentro del botón, cambia su altura.
        */}
        <button
          className="bg-orange-600 w-36 p-3 rounded-md after:content-['Hola']">
          Haz click aqui
        </button>

        {/* 
          He duplicado el botón y lo he separado del anterior con un margen a la izquierda de 24px (ml-6).
          Le indicamos al 'after' que su posición es abosuluta. 
        */}
        <button
          className="ml-6 bg-orange-600 w-36 p-3 rounded-md after:content-['Hola'] after:absolute">
          Haz click aqui
        </button>

        {/* 
          He duplicado el botón y lo he separado del anterior con un margen a la izquierda de 24px (ml-6).
          Le indicamos al 'after' que su posición superior es 0 y el 'Hola' se desplaza hacia arriba 
          a la posición 0 de la página. 
        */}
        <button
          className="ml-6 bg-orange-600 w-36 p-3 rounded-md 
            after:content-['Hola'] after:absolute after:top-0">
          Haz click aqui
        </button>

        {/* 
          He duplicado el botón y lo he separado del anterior con un margen a la izquierda de 24px (ml-6).
          Le indicamos al 'after' que su posición superior es 0 y el 'Hola' se desplaza hacia arriba 
          a la posición 0 de la página. 
          Si indicamos 'relative', el after se aplica al contenedor, en este caso el botón.
        */}
        <button
          className="ml-6 bg-orange-600 w-36 p-3 rounded-md 
            relative after:content-['Hola'] after:absolute after:top-0">
          Haz click aqui
        </button>

        {/* 
          He duplicado el botón y lo he separado del anterior con un margen a la izquierda de 24px (ml-6).
          Si indicamos 'relative', el after se aplica al contenedor, en este caso el botón.
          Ahora la indicamos que se mueva desde la izquierda 144px (after:left-36) que es el ancho del botón.
        */}
        <button
          className="ml-6 bg-orange-600 w-36 p-3 rounded-md 
            relative after:content-['Hola'] after:absolute after:left-36">
          Haz click aqui
        </button>

        {/* 
          He duplicado el botón y lo he separado del anterior con un margen a la izquierda de 24px (ml-6).
          Si indicamos 'relative', el after se aplica al contenedor, en este caso el botón.
          Ahora la indicamos que se mueva desde la izquierda 144px (after:left-36) que es el ancho del botón.
          Borramos el contenido del after-content e indicamos un borde de 8px con after:border-8.
          Se ve un cuadrado que es el espacio que ocupa con el borde muy ancho.
        */}
        <button
          className="ml-6 bg-orange-600 w-36 p-3 rounded-md 
            relative after:content-[''] after:absolute after:left-36 after:border-8">
          Haz click aqui
        </button>

        {/* 
          He duplicado el botón y lo he separado del anterior con un margen a la izquierda de 24px (ml-6).
          Si indicamos 'relative', el after se aplica al contenedor, en este caso el botón.
          Ahora la indicamos que se mueva desde la izquierda 144px (after:left-36) que es el ancho del botón.
          Borramos el contenido del after-content e indicamos un borde de 8px con after:border-8.
          Se ve un cuadrado que es el espacio que ocupa con el borde muy ancho.
          Indicamos que el color del borde izquierdo del after es del mismo color del botón y aparece un triangulo.
        */}
        <button
          className="ml-6 bg-orange-600 w-36 p-3 rounded-md 
            relative after:content-[''] after:absolute after:left-36 after:border-8 after:border-l-orange-600">
          Haz click aqui
        </button>

        {/* 
          He duplicado el botón y lo he separado del anterior con un margen a la izquierda de 24px (ml-6).
          Si indicamos 'relative', el after se aplica al contenedor, en este caso el botón.
          Ahora la indicamos que se mueva desde la izquierda 144px (after:left-36) que es el ancho del botón.
          Borramos el contenido del after-content e indicamos un borde de 8px con after:border-8.
          Se ve un cuadrado que es el espacio que ocupa con el borde muy ancho.
          Indicamos que el color del borde izquierdo del after es del mismo color del botón y aparece un triangulo.
          Para quitar el color gris del resto de bordes que no son necesarios, indicaremos, antes de establecer el
          color del borde izquierdo, el color transparente.
          Observa que se ha formado como una flecha indicadora en el botón.
        */}
        <button
          className="ml-6 bg-orange-600 w-36 p-3 rounded-md 
            relative after:content-[''] after:absolute after:left-36 after:border-8 
            after:border-transparent after:border-l-orange-600">
          Haz click aqui
        </button>

        {/* 
          He duplicado el botón y lo he separado del anterior con un margen a la izquierda de 24px (ml-6).
          Si indicamos 'relative', el after se aplica al contenedor, en este caso el botón.
          Ahora la indicamos que se mueva desde la izquierda 144px (after:left-36) que es el ancho del botón.
          Borramos el contenido del after-content e indicamos un borde de 8px con after:border-8.
          Se ve un cuadrado que es el espacio que ocupa con el borde muy ancho.
          Indicamos que el color del borde izquierdo del after es del mismo color del botón y aparece un triangulo.
          Para quitar el color gris del resto de bordes que no son necesarios, indicaremos, antes de establecer el
          color del borde izquierdo, el color transparente.
          Observa que se ha formado como una flecha indicadora en el botón.
          Ajustamos la posición de la flecha con after:top-4.
        */}
        <button
          className="ml-6 bg-orange-600 w-36 p-3 rounded-md 
            relative after:content-[''] after:absolute after:left-36 after:border-8 
            after:border-transparent after:border-l-orange-600 after:top-4">
          Haz click aqui
        </button>
      </div>

      {/* Pseudoclase placehorder */}
      <div className="p-4">
        <p className="text-xl mb-2">Pseudoclase placehorder</p>

        {/* 
          Creamos un input y le establecemos la propiedades por defecto.
          Como podemos ver, con la pseudoclase placeholder podemos dar efectos al placeholder
          que se muestra en el control. 
          */}
        <input
          className="border ml-2 px-2 placeholder:text-orange-600 placeholder:italic"
          type="text" placeholder="Nombre:" />
      </div>

      {/* Pseudoclase file expecífica de los input */}
      <div className="p-4">
        <p className="text-xl mb-2">Pseudoclase file</p>

        {/* 
          Creamos un input de tipo 'file' y le establecemos propiedades con la pseudoclase 'file:'.
          Todas las clases telwind pueden ser aplicadas a esta 'file:', incluso 'hover:'.
        */}
        <input
          className="file:bg-violet-100 file:border-0 file:rounded-lg file:text-violet-700
            file:font-semibold file:px:3 hover:file:bg-violet-300"
          type="file" />
      </div>

      {/* Pseudoclase marker para dar estilos a las listas */}
      <div className="p-4">
        <p className="text-xl mb-2">Pseudoclase marker</p>

        {/* Pongo el contenido de este div en la misma linea. Más adelante entederemos el uso de flex. */}
        <div className="flex flex-row px-4">
          {/* 
          Creamos una lista y le establecemos propiedades con la pseudoclase 'file:'.
          Con list-disk se muestran las viñetas de las listas.
          Podemos cambiar el color de las viñetas, por ejemplo: 'marker:text-red-500'.
          Todas las clases telwind pueden ser aplicadas a esta 'marker:', incluso 'hover:'.
        */}
          <ul className="list-disc ml-6 marker:text-red-500">
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
            <li>Elemento 4</li>
            <li>Elemento 5</li>
          </ul>
          <br /><br />
          {/* 
          Podemos cambiar los puntos por números en una lista ordenada.
          También podemos establecer el peso del texto de los números.
        */}
          <ol className="list-decimal ml-6 marker:text-red-500 font-bold">
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
            <li>Elemento 4</li>
            <li>Elemento 5</li>
          </ol>
        </div>
      </div>

      {/* Pseudoclase selection para dar estilos a la selección de un texto */}
      <div className="p-4">
        <p className="text-xl mb-2">Pseudoclase select</p>

        {/* 
          Creamos un parrafo y heremos una seleccion en la página.'.
        */}
        <p className="selection:bg-green-500 selecction:text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, quibusdam aliquam deleniti fuga laborum esse sit ipsam sequi. Laboriosam aliquid cumque officia vitae doloremque, impedit nostrum id autem cum asperiores?
          Ipsa voluptates dolore similique tempore inventore recusandae, animi, voluptate necessitatibus iure labore maiores deleniti voluptas totam dolores! Id nemo fuga libero impedit doloribus ad, ratione quia ab tenetur fugit dolorem?
          Deleniti eius atque quasi consequuntur ducimus, esse illo nemo rem suscipit consectetur laudantium mollitia corrupti dolor ipsa aperiam aliquam veritatis dignissimos ipsum. Modi nesciunt illum fugit voluptatum sunt earum saepe?
        </p>

      </div>

      {/* Pseudoclases first-line y first-letter para dar estilos en un texto.*/}
      <div className="p-4">
        <p className="text-xl mb-2">Pseudoclases first-line y firsr-letter</p>

        {/* 
          En este div he querido poner el párrafo en columna. 
        */}
        <div className="flex flex-row w-[800px]">
          {/* 
          Creamos un parrafo y con first-line vamos a poner la primera linea en mayúsculas.
          Con first-letter poidemos cambiar el aspecto de la primera letra del párrafo, aplicando las clases
          taildwind que queramos.
        */}
          <p className="first-line:uppercase first-line:tracking-widest 
              first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, quibusdam aliquam deleniti fuga laborum esse sit ipsam sequi. Laboriosam aliquid cumque officia vitae doloremque, impedit nostrum id autem cum asperiores?
            Ipsa voluptates dolore similique tempore inventore recusandae, animi, voluptate necessitatibus iure labore maiores deleniti voluptas totam dolores! Id nemo fuga libero impedit doloribus ad, ratione quia ab tenetur fugit dolorem?
            Deleniti eius atque quasi consequuntur ducimus, esse illo nemo rem suscipit consectetur laudantium mollitia corrupti dolor ipsa aperiam aliquam veritatis dignissimos ipsum. Modi nesciunt illum fugit voluptatum sunt earum saepe?
          </p>

        </div>

      </div>
    </div>
  )
}
