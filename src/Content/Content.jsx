import React from "react";
import Default from "./Default";
import Editor from "./Editor";
import Items from "./Items";

export default function Content({componentType, changeComponentFunction, addProjectItemFunction, itemData, itemTitle, addTasksToKey}){

    let classNameContentContainer = "flex flex-col items-left justify-center w-full";
    const classNameContentInnerContainer = "h-9/12 w-9/12 p-10 mb-10";


    // console.log(itemData)

    const currentComponentType = componentType;
    let comp;

    if (currentComponentType == 'default'){
        classNameContentContainer  = 'flex flex-col items-center w-full'
       comp =  <Default></Default>
    }else if (currentComponentType == 'items'){
        comp = <Items changeComponentFunction={changeComponentFunction} itemData={itemData} itemTitle={itemTitle} addTasksToKey={addTasksToKey}></Items>
    } 
    else if (currentComponentType == 'editor'){
        comp = <Editor changeComponentFunction={changeComponentFunction} addProjectItemFunction={addProjectItemFunction}></Editor>
    }




    return (
    <div className={classNameContentContainer}>
        <div className={classNameContentInnerContainer}>
            {comp}
        </div>
    </div>
    );
}