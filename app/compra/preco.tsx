import { CounterContext, CounterProvider } from "./counterContext";
import { Doces } from "./doces";
import { useContext } from "react";
import Pix from "./pix";

export default function Preco(){
  
  const { total } = useContext(CounterContext);
  console.log(total);
  return(
    <>
    <CounterProvider>
        <div className="align-bottom justify-items-center self-center content-center z-50">
            <Doces/>
          </div>
          <div className="justify-center self-center content-center z-50">
            <Pix/>
        </div>
    </CounterProvider>
    </>
    );
}
