import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (

    
    <div className="bg-white text-black w-full h-screen">

      {/* En este ejercicio vamos a realizar el reto 
        https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV
        
        Con la ayuda de David Ruiz: https://www.youtube.com/watch?v=VY-ENSwwIiU&t=1381s

        Hay que tener en cuenta que para usar colores personalizados, se han realizado cambios
        en el archivo tailwind.config.ts.
      */}

      {/* 
        Ponemos el título (algo feo, pero es un ejemplo ;-) 
      */}
      <h1 className="bg-red-400 text-3xl font-bold underline text-center mb-2">Crear un componente en Tailwind.</h1>

      <section className="font-Hanken-Grotesk w-[375px] mx-auto 
        bg-white mb-10 shadow-lg shadow-Dark-gray-blue-alfa 
        md:flex md:mt-6 md:w-[740px] md:h-[512px] md:rounded-3xl">

        {/* Parte azul */}
        <div className="bg-gradient-to-b from-Light-slate-blue to-Light-royal-blue 
          h-[356px] pt-8 px-10 text-center rounded-b-3xl
          md:w-[370px] md:h-full md:rounded-3xl m:pt-12">
          <h2 className="mb-6 text-Light-lavender text-[18px]
            md:mb-10">Your Result</h2>

          <div className="bg-gradient-to-t from-Light-slate-blue to-Light-royal-blue 
            rounded-full h-[140px] w-[140px] mx-auto grid place-content-center mb-6 text-[18px] md:mb-10">
            <p className="text-white text-4xl font-bold md:text-5xl">76</p>
            <p className="text-Light-lavender">of 100</p>
          </div>

          <p className="text-white text-[18px] md:text-3xl md:mb-6">Great</p>
          <p className="text-Light-lavender md:text-xl ">Your scored highter than 65% of the people who have taken these tests.</p>

        </div>

        {/* Parte blanca */}
        <div className="p-8 h-[454px] md:w-[370px] md:py-14 md:px-10">

          <h2 className="text-[18px] mb-6 font-bold md:text-2xl">Summary</h2>

          <div className="bg-Lightred-alfa flex place-content-between p-3 rounded-lg mb-4 h-[54px] items-center
            md:text-xl md:px-4">
            <p className="text-Lightred flex w-24 gap-2">
              <Image src={'assets/images/icon-reaction.svg'}
                width={20}
                height={20}
                alt="Reaction"
              />
              <span>Reaction</span>
            </p>
            <p>
              80 <span className="text-Dark-gray-blue-alfa">/100</span>
            </p>
          </div>

          <div  className="bg-Orangeyellow-alfa flex place-content-between p-3 rounded-lg mb-4 h-[54px] items-center
            md:text-xl md:px-4">
            <p className="text-Orangeyellow flex w-24 gap-2">
              <Image src={'assets/images/icon-memory.svg'}
                width={20}
                height={20}
                alt="Memory"
              />
              <span className="text-Dark-gray-blue-alfa">Memory</span>
            </p>
            <p>
              61 <span>/100</span>
            </p>
          </div>

          <div  className="bg-Greenteal-alfa flex place-content-between p-3 rounded-lg mb-4 h-[54px] items-center
            md:text-xl md:px-4">
            <p className="text-Greenteal flex w-24 gap-2">
              <Image src={'assets/images/icon-verbal.svg'}
                width={20}
                height={20}
                alt="Verbal"
              />
              <span>Verbal</span>
            </p>
            <p>
              61 <span className="text-Dark-gray-blue-alfa">/100</span>
            </p>
          </div>

      
          <div  className="bg-Cobaltblue-alfa flex place-content-between p-3 rounded-lg mb-4 h-[54px] items-center
            md:text-xl md:px-4">
            <p className="text-Cobaltblue flex w-24 gap-2">
              <Image src={'assets/images/icon-visual.svg'}
                width={20}
                height={20}
                alt="Visual"
              />
              <span>Visual</span>
            </p>
            <p>
              72 <span className="text-Dark-gray-blue-alfa">/100</span>
            </p>
          </div>

          <button className="bg-Dark-gray-blue text-white w-full h-14 rounded-3xl text-[18px] 
            hover:bg-gradient-to-b from-Light-slate-blue to-Light-royal-blue md:mt-10">Continue</button>
          
        </div>

      </section>

      <div className="text-center">
        Challenge by  
        <Link className="text-Violet-blue font-bold"
          href={'https://www.frontendmentor.io?ref=challenge'}
          target="_blank"> Frontend Mentor </Link>
          Code by <Link className="text-Violet-blue font-bold" href={'#'}>José A. Suárez</Link>
      </div>

    </div>
  )
}
