import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function PaginaCampoTexto(){
    const [valor, setValor] = useState('')

    function alterar(){
        setValor('Texto alterado');
    }

    function alterarValor(e: any){
        setValor(e.target.value)
    }

    return (
        <Pagina titulo="Campo de Texto" subtitulo="Capítulo Estado">
            <div className="flex flex-col gap-5">
                <div className="flex justify-center gap-5">
                    <input type="text" className="campo" value={valor} onChange={alterarValor} />
                    <button className="botao" onClick={alterar}>Alterar</button>
                </div>
                <span>{valor}</span>
            </div>
        </Pagina>
    )
}