import { TextGenerateEffect } from "./text_gen";

export function BackgroundBeamsDemo() {
    let words: string = "Adicione seu email abaixo para ser convidado a ter uma experiência mágica com nossos doces, feitos com muito cuidado e prontos para te levar diretamente para a fábrica do grande Willy Wonka!"
    return (
      <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl mb-10 bg-clip-text text-transparent bg-gradient-to-b from-orange-600 to-amber-800  text-center font-sans font-bold drop-shadow-xl">
            Saboreie o Inimaginável
          </h1>
          <p></p>
          <div className="text-neutral-700 max-w-lg mx-auto my-2 drop-shadow-lg text-sm text-center relative z-10">
            <TextGenerateEffect words={words} />
          </div>
          <input
            type="email"
            placeholder="oompaloompa@wonka.com"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 focus:drop-shadow-md focus:placeholder:text-neutral-600  w-full relative z-10 mt-4 placeholder:text-neutral-700 bg-transparent text-neutral-700"
          />
        </div>
      </div>
    );
  }