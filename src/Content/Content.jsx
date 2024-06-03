import React from "react";
import Default from "./Default";
import Title from "./Editor";
import Items from "./Items";

export default function Content(){

    let classNameContentContainer = "flex flex-col items-left justify-center w-full";
    const classNameContentInnerContainer = "h-9/12 w-9/12 p-10 mb-10";

    const def = 'items'
    let comp;

    if (def == 'default'){
        classNameContentContainer  = 'flex flex-col items-center w-full'
       comp =  <Default></Default>
    }else if (def == 'items'){
        comp = <Items></Items>
    } 
    else if (def == 'editor'){
        comp = <Title></Title>
    }




    return (
    <div className={classNameContentContainer}>
        <div className={classNameContentInnerContainer}>
            {comp}
        </div>
    </div>
    );
}