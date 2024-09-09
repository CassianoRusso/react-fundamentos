interface ConteudoProps {
    children: any
}

export default function Conteudo(props: ConteudoProps){
    
    return (
        <div className={`
            flex items-start flex-1 p-4
            text-3xl
            bg-zinc-900
        `}>
            {props.children}
        </div>
    )
}