import { BackgroundGradientAnimation } from "@/app/gradient";
import { SparklesCore } from "@/app/sparkles";
import { BackgroundBeamsDemo } from "./form";
import { Doces } from "./doces";
import Pix from "./pix";

export default function Compra(){
    return(
        <>
        <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(217, 119, 6)"
      gradientBackgroundEnd="rgb(234, 179, 8)"
      firstColor="234, 179, 8"
      secondColor="202, 138, 4"
      thirdColor="rgb(251, 146, 60)"
      fourthColor="rgb(252, 211, 77)"
      interactive= {true}
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
      <BackgroundBeamsDemo/>
      <div>
<Pix/>
      </div>
      <Doces/>

      

      </BackgroundGradientAnimation>
        </>
    );
}