export default function SidebarProjects({projectHeaders, ...props}){

    const classNameButton = "mb-2 mt-2 h-10 w-60 hover:bg-stone-900 items-center justify-left flex text-stone-300"


    return (
        <>
            {projectHeaders.map((head, index)=>(
                <button key={index} className={classNameButton}>{head}</button>
            ))}
        </>

    );
} 