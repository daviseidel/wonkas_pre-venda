import Image from "next/image";
import { SparklesCore } from "./sparkles";
import { BackgroundGradientAnimation } from "./gradient";
import Name from "./name";
import Button_Buy from "./botao_compre";

export default function Home() {
  return (
    <>
    <Name />
    <Button_Buy/>
    </>
    
  );
}
