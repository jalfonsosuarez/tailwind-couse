
export default function FlexBox() {
  return (
    <div className="bg-blue-400 w-full h-screen">

      {/* 
        Ponemos el título (algo feo, pero es un ejemplo ;-) 
      */}
      <h1 className="bg-red-400 text-3xl font-bold underline text-center">Flexbox (1) - Responsive Design - Tailwind.</h1>

      {/* 
        La clase card está creada con todos los estilos Tailwind necesarios en el archivo globals.css.
        El uso de clases que agrupan estilos es usado para darle aspectos globales a tu diseño y reducir
        el código repetitivo dentro del html.
      */}

      {/* 
        El uso de flex hace que los elementos se alineen en la misma dirección.
        Con place-content-between se separan los componentes repatiendo el espacio del ancho de la 
        pantalla entre ellos. 
      */}
      <div className="flex place-content-between">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
      </div>

      {/* 
        Con place-content-around, se separan manteniendo el mismo espacio al rededor de cada item.
        El mt-2 es para que se separen los contenidos.
      */}
      <div className="mt-2 flex place-content-around">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
      </div>

      {/* 
        Con flex-col ponemos los elementos en columna.
        Con flex-col-reverse, se invierte el orden de los items.
      */}
      <div className="mt-2 flex flex-col-reverse">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
      </div>

      {/* 
        Con flex-row ponemos los elementos en fila.
        Con flex-row-reverse, se invierte el orden de los items.
      */}
      <div className="mt-2 flex flex-row-reverse">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
      </div>

      {/* 
        La opción por defecto de flex es en fila. 

        Al establecer un borde se ve que se acomoda al ancho de la página.
        Si establecemos una altura, se pueden aliniear los elementos verticalmente:

        items-start   -> en el inicio (por defecto)
        items-center  -> en el centro
        items-end     -> los pondrá al final

        También podemos colocar cada item de forma independiente con self:

          self-start    -> al inicio (por defecto)
          self-center   -> al centro
          self-end      -> al final
        
        Se puede combinar con el place-holder-between.

      */}

      <div className="mt-2 flex place-content-between border-2 border-blue-800 h-[200px] items-start">
        <div className="card">1</div>
        <div className="card self-center">2</div>
        <div className="card self-end">3</div>
      </div>

    </div>
  )
}
