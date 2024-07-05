import Link from "next/link";

export default function DarkMode() {
  return (
    <div className="dark:bg-slate-900 w-full h-screen">

      {/* 
        Ponemos el título (algo feo, pero es un ejemplo ;-) 
      */}
      <h1 className="bg-red-400 text-3xl font-bold underline text-center mb-2">Dark mode en Tailwind.</h1>

      {/* 
          En NextJs ya viene el modo dark establecido por defecto. 
          Por lo que no voy a hacer nada aquí.
          Sugiero ver el vídeo de CodingTube https://www.youtube.com/watch?v=2e4NOC9IPZ4
        */}

      <div className="mt-10 text-3xl text-center">
        <Link href={'https://www.youtube.com/watch?v=2e4NOC9IPZ4'}>Ver el vídeo de CodingTube</Link>
      </div>

    </div>
  )
}
