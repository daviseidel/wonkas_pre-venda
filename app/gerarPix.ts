import { createStaticPix, hasError } from 'pix-utils';
export function gerarPix(valor: number, nome?: string){
    const pix = createStaticPix({
    merchantName: "Wonka's Boutique",
    merchantCity: 'Brasília',
    pixKey: '09278809110',
    infoAdicional: 'Wonka-PreVenda'+nome,
    transactionAmount: (valor * 4),
    });

    if (!hasError(pix)) {
    const brCode = pix.toBRCode();
    navigator.clipboard.writeText(brCode);
    alert("Código pix copiado, pague com o aplicativo do seu banco.")
    }

    
}
