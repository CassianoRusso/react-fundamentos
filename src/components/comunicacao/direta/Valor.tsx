interface ValorProps{
    texto: string
}

export default function Valor(props: ValorProps){
    return(
        <div className="text-8xl font-black bg-yellow-800 p-2">
            {props.texto}
        </div>
    )
}