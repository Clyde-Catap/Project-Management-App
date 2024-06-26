import { useRef } from "react";

export default function SidebarProjects({projectHeaders, changeComponentFunction, changeCurrentKey}){

    const classNameButton = "mb-2 mt-2 h-10 w-60 hover:bg-stone-900 items-center justify-left flex text-stone-300"


    function handleButton(event){
        changeCurrentKey(event.target.value)
        changeComponentFunction('items')
    }

    return (
        <>
            {projectHeaders.map((head, index)=>(
                <button key={index} className={classNameButton} onClick={handleButton} value={head}>{head}</button>
            ))}
        </>

    );
}  