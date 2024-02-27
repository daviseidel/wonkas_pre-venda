import { HoverEffect } from "./efeito_hover";

export function Doces() {
    return (
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    );
  }

export const projects = [
    {
      title: "Tradicional",
      description:
        "O Clássico! Não há como não amar a delícia de chocolate.",
      link: "https://stripe.com",
    },
    {
      title: "Caramelo Salgado",
      description:
        "Trazido das viagens de Wonka a frança, perfeito para os paladares refinados.",
      link: "https://netflix.com",
    },
    {
      title: "Brownie",
      description:
        "Coberto pelos aclamados chocolates da fábrica de Wonka, esse doce vai te supreender!",
      link: "https://google.com",
    },
  ];