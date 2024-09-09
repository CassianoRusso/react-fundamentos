import { IconBraces, IconBrandJavascript, IconCode, IconFileCheck, IconFunction, IconH1, IconNumbers, IconSitemap } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu(){
    return (
        <div className={`
            flex flex-col justify-start w-72
            text-3xl p-2 gap-2
        `}> 
            <span className="text-sm text-zinc-500 pl-3 pt-4">Estado</span>
            <MenuItem icone={<IconCode />} texto="Componente sem estado" url="/estado/sem" />
            <MenuItem icone={<IconCode />} texto="Componente com estado" url="/estado/com" />
            <MenuItem icone={<IconNumbers />} texto="Contador" url="/estado/contador" />

            <span className="text-sm text-zinc-500 pl-3 pt-4">Fundamentos</span>
            <MenuItem icone={<IconBraces />} texto="JSX com JS" url="/fundamentos/soma" />
            <MenuItem icone={<IconFunction />} texto="JSX: Chamando Funções" url="/fundamentos/funcoes" />
            <MenuItem icone={<IconFileCheck />} texto="Página #1" url="/fundamentos/pagina" />
            <MenuItem icone={<IconSitemap />} texto="Página #2" url="/pagina" />

            <span className="text-sm text-zinc-500 pl-3 pt-4">Componentes</span>
            <MenuItem icone={<IconCode/>} texto="Básico" url="/componente/basico" />
            <MenuItem icone={<IconH1/>} texto="Título" url="/componente/titulo" />
            <MenuItem icone={<IconBrandJavascript/>} texto="JS com JSX" url="/componente/trecho" />
        </div>
    )
}