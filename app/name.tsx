import Button_Buy from "./botao_compre";
import { BackgroundGradientAnimation } from "./gradient";
import { SparklesCore } from "./sparkles";


export default function Name(){
  return(
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(217, 119, 6)"
      gradientBackgroundEnd="rgb(234, 179, 8)"
      firstColor="234, 179, 8"
      secondColor="202, 138, 4"
      thirdColor="rgb(251, 146, 60)"
      fourthColor="rgb(252, 211, 77)"
      interactive= {false}
      >
       <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={2}
        particleDensity={120}
        className="w-full h-full"
        particleColor="#eab308"
        />
      </div>
       
      <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          Wonka's Boutique
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */} 
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-700 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-700 to-transparent h-px w-1/4" />

          {/* Core component */}
          {/* <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#eab308"
          /> */}

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          <div className="absolute w-full h-full flex content-center justify-center mt-10 z-50">
            <Button_Buy/>
          </div>
          
        </div>
      </div>
    </BackgroundGradientAnimation>
  
  );
}
