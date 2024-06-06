import React from "react";

export default function Editor ({changeComponentFunction}){

    const classNameText = "text-stone-500 font-bold";
    const classNameInputContainer = "p-5";

    const classNameButtonContainer = "grid justify-items-end pr-5";
    const classNameSaveButton = "px-2 py-2 bg-black text-white rounded-md pl-5 pr-5";
    const classNameCancelButton = "m-5";


    // const classNameTitleContainer = "p-5";
    const classNameTitleInput = "bg-stone-300 h-10 w-full border-b-2 border-transparent focus:outline-none focus:border-black focus:ring-0";

    // const classNameDescriptionContainer = "p-5";
    const classNameDescriptionInput = "bg-stone-300 h-20 w-full border-b-2 border-transparent focus:outline-none focus:border-black focus:ring-0";
    
    // const classNameDueDateContainer = "p-5";
    const classnameDueDateInput = "bg-stone-300 h-10 w-full border-b-2 border-transparent focus:outline-none focus:border-black focus:ring-0";
    function handleSave(){
        changeComponentFunction('default')
    }

    function handleCancel(){
        changeComponentFunction('default')
    }


    return (
    <>
        <div className={classNameButtonContainer}>
            <div>
                <button className={classNameCancelButton} onClick={handleCancel}>Cancel</button>
                <button className={classNameSaveButton} onClick={handleSave}>Save</button>
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