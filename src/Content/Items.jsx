import React from "react";

export default function Items()
{
    const classNameh1 = "";
    const classNamedate = "";
    const classNameDelete = "";


    const classNameButtonContainer = "grid justify-items-end pr-5";
    const classNameDeleteButton = "px-2 py-2 bg-black text-white rounded-md pl-5 pr-5";

    const classNametitleContainer = "flex flex-col"





    return (
    <>
        <div className={classNameButtonContainer}>
            <div className={classNametitleContainer}>
                <h1>Title</h1>
                <h2>Dec 29, 2024</h2>
            </div>
            <div className={classNametitleContainer}>
                <button className={classNameDeleteButton}>Save</button>
            </div>
        </div>
        <h1>Title</h1>
        <h2>Dec 29, 2024</h2>
        <button>Delete</button>

        
        

        
        
    </>
    );
}