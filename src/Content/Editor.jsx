import React from "react";

export default function Title (){

    const classNameText = "text-stone-500 font-bold";
    const classNameInputContainer = "p-5";

    const classNameButtonContainer = "grid justify-items-end pr-5";
    const classNameSaveButton = "px-2 py-2 bg-black text-white rounded-md pl-5 pr-5";
    const classNameCancelButton = "m-5";


    // const classNameTitleContainer = "p-5";
    const classNameTitleInput = "bg-stone-300 h-10 w-full";

    // const classNameDescriptionContainer = "p-5";
    const classNameDescriptionInput = "bg-stone-300 h-20 w-full";
    
    // const classNameDueDateContainer = "p-5";
    const classnameDueDateInput = "bg-stone-300 h-10 w-full";


    return (
    <>
        <div className={classNameButtonContainer}>
            <div>
                <button className={classNameCancelButton}>Cancel</button>
                <button className={classNameSaveButton}>Save</button>
            </div>
        </div>
        <div className={classNameInputContainer}>
            <h2 className={classNameText}>TITLE</h2>
            <input className={classNameTitleInput}></input>
        </div>
        <div className={classNameInputContainer}>
            <h2 className={classNameText}>DESCRIPTION</h2>
            <input className={classNameDescriptionInput}></input>
        </div>
        <div className={classNameInputContainer}>
            <h2 className={classNameText}>DUE DATE</h2>
            <input type='date' className={classnameDueDateInput}></input>
        </div>
    
    </>);
}