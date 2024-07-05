
export default function FlexBox() {
  return (
    <div className="bg-blue-400 w-full h-screen">

      {/* 
        Ponemos el título (algo feo, pero es un ejemplo ;-) 
      */}
      <h1 className="bg-red-400 text-3xl font-bold underline text-center">Flexbox (2)- Responsive Design - Tailwind.</h1>

      {/* 
        La clase card está creada con todos los estilos Tailwind necesarios en el archivo globals.css.
        El uso de clases que agrupan estilos es usado para darle aspectos globales a tu diseño y reducir
        el código repetitivo dentro del html.
      */}

      {/* 
        El uso de flex hace que los elementos se alineen en la misma dirección.
        
        Cuando hay muchos elementos, se divide el ancho de cada uno entre la anchura disponible,
        reduciendose.
        
      */}
      <div className="flex w-[300px]">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
        <div className="card">4</div>
        <div className="card">5</div>
        <div className="card">6</div>
      </div>

      {/* 
        Con flex-wrap para que mantengan el ancho cada uno y se repartan hacia abajo.
        mt-2, dejo un margen arriba para que se separe del anterior.
        Con un gap-4, dejamos un espacio entre los elementos de 16px.
      */}
      <div className="mt-2 flex flex-wrap w-[300px] gap-4">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
        <div className="card">4</div>
        <div className="card">5</div>
        <div className="card">6</div>
      </div>

      {/* 
        Al indicar a cada elemento la propiedad grow, hacemos que crezcan si pueden hacerlo.
        Con shrink-0 los elementos mantendran su anchura mínima sin contraerse (aunque si podran crecer),
        ajustandose como una columna, manteniendo su relación ancho/alto.
      */}
      <div className="mt-2 flex flex-wrap w-[268px] gap-4">
        <div className="card grow shrink-0">1</div>
        <div className="card grow shrink-0">2</div>
        <div className="card grow shrink-0">3</div>
        <div className="card grow shrink-0">4</div>
        <div className="card grow shrink-0">5</div>
        <div className="card grow shrink-0">6</div>
      </div>

      {/* 
        Podemos indicar el espacio que ocupará cada item usando basis-(valor).
        También se puede indicar que según el ancho de la pantalla, el basis sea distinto, en el ejemplo,
        para pantallas sm (640px), cada uno ocupará 1/3. Para pantallas menores se aplicará el otro 
        valor (recordemos que Tailwind es mobile first).
      */}
      <div className="mt-2 flex gap-4">
        <div className="card basis-1/4 sm:basis-1/3">1</div>
        <div className="card basis-1/4 sm:basis-1/3">2</div>
        <div className="card basis-1/2 sm:basis-1/3">3</div>
      </div>


    </div>
  )
}
