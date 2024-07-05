export default function ContentGrid() {
  return (
    <div className="bg-blue-400 w-full h-screen">

      {/* 
        Ponemos el título (algo feo, pero es un ejemplo ;-) 
      */}
      <h1 className="bg-red-400 text-3xl font-bold underline text-center mb-2">Grid con Tailwind - Reparto de contendo.</h1>

      {/* 
        Partimos de este diseño y queremos situarlos de forma ordenada como si una página real fuese.
        Podemos observar como todos los componentes contenedores se acomodaton el su lugar obteniendo la
        maquetación básica de una web.
      */}
      <div className="mt-4 grid grid-cols-2 gap-1 h-screen">
        <div className="gridcard col-span-2">header</div>
        <div className="gridcard col-span-2">nav</div>
        <div className="gridcard row-[3/5] col-start-2">section</div>
        <div className="gridcard">article</div>
        <div className="gridcard">aside</div>
        <div className="gridcard col-span-2">footer</div>
      </div>

    </div>
  );
}
