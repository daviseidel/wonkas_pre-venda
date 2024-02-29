import { useContext } from "react";
import { HoverEffect } from "./card";
import { CounterProvider } from "./counterContext";


export function Doces() {
    return (
      <CounterProvider>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </CounterProvider>
    );
  }

export const projects = [
    {
      title: "Tradicional",
      description:
        "O Clássico! Não há como não amar a delícia de chocolate.",
      link: "",
    },
    {
      title: "Caramelo Salgado",
      description:
        "Trazido das viagens de Wonka a frança, perfeito para os paladares refinados.",
      link: "",
    },
    {
      title: "Brownie",
      description:
        "Coberto pelos aclamados chocolates da fábrica de Wonka, esse doce vai te supreender!",
      link: "",
    },
  ];