import React from "react";
import { useRef, useState } from "react";

export default function Editor ({changeComponentFunction, addProjectItemFunction}){

    const classNameText = "text-stone-500 font-bold";
    const classNameInputContainer = "p-5";

    const classNameButtonContainer = "grid justify-items-end pr-5";
    const classNameSaveButton = "px-2 py-2 bg-black text-white rounded-md pl-5 pr-5";
    const classNameCancelButton = "m-5";

    const classNameTitleInput = "bg-stone-300 h-10 w-full border-b-2 border-transparent focus:outline-none focus:border-black focus:ring-0";

    const classNameDescriptionInput = "bg-stone-300 h-20 w-full border-b-2 border-transparent focus:outline-none focus:border-black focus:ring-0";
    
    const classnameDueDateInput = "bg-stone-300 h-10 w-full border-b-2 border-transparent focus:outline-none focus:border-black focus:ring-0";
    
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();
    
    function handleSave(){
        addProjectItemFunction(titleRef.current.value, descriptionRef.current.value, dateRef.current.value)
        
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
            <input ref={titleRef} className={classNameTitleInput}></input>
        </div>
        <div className={classNameInputContainer}>
            <h2 className={classNameText}>DESCRIPTION</h2>
            <input ref={descriptionRef} className={classNameDescriptionInput}></input>
        </div>
        <div className={classNameInputContainer}>
            <h2 className={classNameText}>DUE DATE</h2>
            <input ref={dateRef} type='date' className={classnameDueDateInput}></input>
        </div>
    
    </>);
}