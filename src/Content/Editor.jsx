import React from "react";

export default function Editor (){
    const classNameButtonContainer = "";
    const classNameSaveButton = "px-2 py-2 bg-black text-white rounded-md pl-5 pr-5";
    const classNameCancelButton = "m-5";
    const classNameText = "text-stone-500 font-bold";

    const classNameTitleContainer = "";
    const classNameTitleInput = "bg-stone-300";

    const classNameDescriptionContainer = "";
    const classNameDescriptionInput = "bg-stone-300";
    
    const classNameDueDateContainer = "";
    const classnameDueDateInput = "bg-stone-300";


    return (
    <>
        <div className={classNameButtonContainer}>
            <button className={classNameCancelButton}>Cancel</button>
            <button className={classNameSaveButton}>Save</button>
        </div>
        <div className={classNameTitleContainer}>
            <h2 className={classNameText}>TITLE</h2>
            <input className={classNameTitleInput}></input>
        </div>
        <div className={classNameDescriptionContainer}>
            <h2 className={classNameText}>DESCRIPTION</h2>
            <input className={classNameDescriptionInput}></input>
        </div>
        <div className={classNameDueDateContainer}>
            <h2 className={classNameText}>DUE DATE</h2>
            <input type='date' className={classnameDueDateInput}></input>
        </div>
    
    </>);
}