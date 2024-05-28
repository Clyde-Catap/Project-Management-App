import React from "react";

export default function Default(){

    const classNameImage = "size-40 m-4";
    const classNameH2 = "text-neutral-600 text-4xl font-bold m-4";
    const classNameP = "text-neutral-500 text-3xl m-4";
    const classNameButton = "mt-6 px-8 py-4 bg-stone-800 text-stone-400 text-2xl rounded-md m-10 pl-10 pr-10";
    const classNameDivider = "m-2"


    return (
    <>
        <div className={classNameDivider}>
            <img className={classNameImage} src="src/assets/no-projects.png" alt="default-logo" />
        </div>
        <div className={classNameDivider}>
            <h2 className={classNameH2}>No Project Selected</h2>
        </div>
        <div className={classNameDivider}>
            <p className={classNameP}>Select a project or get started with a new one</p>
        </div>
        <div className={classNameDivider}>
            <button className={classNameButton}>Create new project</button>
        </div>
    </>

    );
}

