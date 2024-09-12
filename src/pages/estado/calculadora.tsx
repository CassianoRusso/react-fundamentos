import Pagina from "@/components/Pagina";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";

export default function PaginaCalculadora(){
    const [numb1, setNumb1] = useState(0)
    const [numb2, setNumb2] = useState(0)

    return (
        <Pagina titulo="Calculadora" subtitulo="Capítulo Estado">
            <div className="flex flex-col justify-center items-center gap-5 w-full h-full">
                <h2>Calculadora</h2>
                <div className="flex gap-5">
                    <input type="number" className="campo" value={numb1} onChange={e => setNumb1(+e.target.value)} />
                    <input type="number" className="campo" value={numb2} onChange={e => setNumb2(+e.target.value)} />
                </div>
                <div className="flex flex-col gap-5">
                    <div>
                        {numb1} + {numb2} = {numb1 + numb2}
                    </div>
                    <div>
                        {numb1} + {numb2} = {numb1 - numb2}
                    </div>
                    <div>
                        {numb1} + {numb2} = {numb1 * numb2}
                    </div>
                    <div>
                        {numb1} + {numb2} = {numb1 / numb2}
                    </div>
                </div>
            </div>
            
        </Pagina>
    )
}