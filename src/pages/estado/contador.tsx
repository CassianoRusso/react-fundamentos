import { useState } from 'react'
import Pagina from "@/components/Pagina"
import { IconMinus, IconPlus } from '@tabler/icons-react'

export default function PaginaContador(){
    const [numero, setNumero] = useState(0)
    const [delta, setDelta] = useState(1)

    function incrementar(){
        setNumero(numero + delta)
    }

    function decrementar(){
        setNumero(numero - delta)
    }

    function incrementarDelta(){
        setDelta(delta + 1)
    }

    function decrementarDelta(){
        setDelta(delta - 1)
    }

    return (
        <Pagina titulo="Contador" subtitulo="Capítulo Estado">
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='text-7xl font-black'>
                    {numero}
                </div>

                <div className='flex gap-5'>
                    <button onClick={decrementar} className='bg-blue-500 p-4 rounded-full'>
                        <IconMinus size={30} />
                    </button>
                    <button onClick={incrementar} className='bg-blue-700 p-4 rounded-full'>
                        <IconPlus size={30} />
                    </button>
                </div>

                <div className='flex gap-5'>
                    <button onClick={decrementarDelta} className='flex justify-center items-center bg-purple-500 p-2 rounded-full'>
                        <IconMinus size={16} />
                    </button>
                    <span>{delta}</span>
                    <button onClick={incrementarDelta} className='flex justify-center items-center bg-purple-700 p-2 rounded-full'>
                        <IconPlus size={16} />
                    </button>
                </div>
                
            </div>
        </Pagina>
    )
}