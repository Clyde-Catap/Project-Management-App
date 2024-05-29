import React from "react";
import Default from "./Default";
import Editor from "./Editor";
import Title from "./Editor";

export default function Content(){

    const classNameContentContainer = "flex flex-col items-left justify-center w-full";
    const classNameContentInnerContainer = "h-9/12 w-9/12 p-10";

    const def = false;
    let comp;

    if (def){
       comp =  <Default></Default>
    } else {
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