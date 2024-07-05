import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <main className="bg-white"> */}
      <h1 className="text-3xl font-bold underline text-white">Hola mundo. Usando el color en Tailwind.</h1>
      <p className="text-3xl font-bold underline bg-lime-600 text-[#d2d255]">Personalizando el color</p>
      <p className="bg-azul-claro text-azul-oscuro">Creando colores personalizados en el archivo de configuración de tailwind (tailwind.config.ts)</p>

      {/* 
        Creamos un botón con fondo azul claro, texto en blanco, un padding de 2, bordes redondeados, 
        anchura de 48, margen horizontal centrado y block para que lo indique como bloque, ya que el 
        botón es un componente de línea. Definimos el hover que cambie a azul oscuro al pasar el ratón.
      */}
      <button className="bg-azul-claro text-white p-2 rounded
        w-48 mx-auto block hover:bg-azul-oscuro">Esto es un botón</button>

      {/* 
        Aplicando gradientes. 
      */}
      <div className="bg-gradient-to-r from-azul-claro to-azul-oscuro border-red-500 border-2">
        <p>Esto es un gradiente desde azul claro hasta azul oscuro con un border rojo 500 de 2 px.</p>
      </div>

      {/* 
        Al mismo botón de antes le podemos poner opacidad añadiendo /x, donde x es el % de opacidad. 
        Para que se vea mejor he aplicado color blanco de fondo a todo el ancho de la línea.
      */}
      <div className="bg-white w-full">
        <button className="bg-azul-claro/50 text-white p-2 rounded
        w-48 mx-auto block hover:bg-azul-oscuro">Esto es un botón</button>
      </div>

      {/* 
        Definimos un texto de 4xl y extra negrita.
        Hacemos que el fondo del texto tenga un gradiente.
        Aplicamos el gradiente al texto y lo hacemos transparente para ver el efecto.
      */}
      <div className="text-4xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Aplicando el gradiente al texto.</span>
      </div>

      <h2 className="text-2xl font-bold">Enlaces a otras lecciones.</h2>
      <Link href={'./heightandwidth'}>1. Ancho y alto en Tailwind css</Link>
      <Link href={'./states'}>2. Estados de campos input en Tailwind css</Link>
      <Link href={'./pseudoclases'}>3. Pseudoclases en Tailwind css</Link>
      <Link href={'./breakpoint'}>3. Breakpoint para dieño responsive en Tailwind css</Link>
      <Link href={'./flexbox'}>3. Flexbox para dieño responsive en Tailwind css (part. 1)</Link>
      <Link href={'./flexbox2'}>4. Flexbox para dieño responsive en Tailwind css (part. 2)</Link>
      <Link href={'./grid'}>5. Grid para dieño responsive en Tailwind css.</Link>
      <Link href={'./dark'}>6. Dark mode en Tailwind css.</Link>
      <Link href={'./component'}>7. Crear un componente en Tailwind css.</Link>

    </main>
  );
}
