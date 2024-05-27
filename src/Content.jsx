import React from "react";

export default function Content(){

    const classNameContentContainer = "flex flex-col items-center justify-center mt-8 w-full";
    const classNameImage = "size-20 m-2";
    const classNameH2 = "text-neutral-600 font-bold m-2";
    const classNameP = "text-neutral-500 m-2";
    const classNameButton = "mt-6 px-4 py-2 bg-stone-800 text-stone-400 rounded m-1";




    return (
    <div className={classNameContentContainer}>
            <img className={classNameImage} src="src/assets/no-projects.png" alt="default-logo" />
            <h2 className={classNameH2}>No Project Selected</h2>
            <p className={classNameP}>Select a project or get started with a new one</p>
            <button className={classNameButton}>Create new project</button>
    </div>
    );
}