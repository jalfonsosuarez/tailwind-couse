import Link from "next/link";

export default function GridPage() {
  return (
    <div className="bg-blue-400 w-full h-screen">

      {/* 
        Ponemos el título (algo feo, pero es un ejemplo ;-) 
      */}
      <h1 className="bg-red-400 text-3xl font-bold underline text-center mb-2">Grid con  Tailwind.</h1>


      {/* 
        Nota: La clase gridcard la he deinido en el archivo globals.css.

        Para usar grid cond Tailwind especificamos la clase grid seguida de otra vez grid-(numero de columnas) 
        Definimos una separación de 16px entre cada item (gap-4).
        Con col-span-X hacemos que el item indiacado se expanda X columnas desde la posición en que está.
        Con col-start-X y col-end-Y, indicaremos al item que se expandada desde la posición X hasta la Y. Tambien 
        se puede expecificar con col-[X/Y].

        Con row-span-X indicamos el numero de filas X que queremos que se expnda en vertical determinado item.

      */}
      <div className="grid grid-cols-4 gap-4">
        <div className="gridcard col-span-2">1</div>
        <div className="gridcard">2</div>
        <div className="gridcard">3</div>
        {/* <div className="gridcard row-span-2">4</div> */}
        <div className="gridcard row-span-3">4</div>
        <div className="gridcard col-span-2">5</div>
        <div className="gridcard">6</div>
        {/* <div className="gridcard col-start-2 col-end-4">7</div> */}
        <div className="gridcard col-[2/4]">7</div>
        <div className="gridcard">8</div>
        <div className="gridcard">9</div>
      </div>

      {/* 
        Partimos de este diseño y queremos situarlos de forma ordenada como si HTML identado fuese.
      */}
      <div className="mt-2">
        <div className="gridcard">header</div>
        <div className="gridcard">nav</div>
        <div className="gridcard">section</div>
        <div className="gridcard">article</div>
        <div className="gridcard">aside</div>
        <div className="gridcard">footer</div>
      </div>

      <div className="mt-6 text-center">
        <p>Ver el resultado de ordenar los items anteriores y que ocupen toda la página.</p>
        <Link href={"./grid/content"}>Grid. Reparto de contenido en una página con grid.</Link>
      </div>

    </div>
  );
}
