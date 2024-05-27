import React from "react";

export default function YourProjectsSideBar() {
    const classNameH2 = 'text-white text-center text-xl font-bold ml-7';
    const classNameButton = 'mt-6 px-4 py-2 bg-stone-800 text-stone-400 rounded ml-7';
    const classNameContainer = "bg-black w-1/5 h-screen flex flex-col items-center mt-8 rounded-r-lg";
    const classNameInnerContainer = "flex flex-col items-start justify-center h-1/3 w-full";
    const classNameItems = "flex flex-col items-center mt-3";

    return (
        <div className={classNameContainer}>
            <div className={classNameInnerContainer}>
                <div className={classNameItems}>
                    <h2 className={classNameH2}>YOUR PROJECTS</h2>
                </div>
                <div className={classNameItems}>
                    <button className={classNameButton}>+ Add Project</button>
                </div>
            </div>
        </div>
    );
}
