interface BotoesProps{
    alterarNome(nome: string): void
}

export default function Botoes(props: BotoesProps){
    return(
        <div className="flex gap-5">
            <button className="botao" onClick={() => props.alterarNome('Maria')}>Maria</button>
            <button className="botao" onClick={() => props.alterarNome('João')}>João</button>
            <button className="botao" onClick={() => props.alterarNome('Pedro')}>Pedro</button>
        </div>
    )
}