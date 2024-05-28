import React from "react";
import Default from "./Default";
import Editor from "./Editor";

export default function Content(){

    const classNameContentContainer = "flex flex-col items-center justify-center w-full";
    const def = false;
    let comp;

    if (def){
       comp =  <Default></Default>
    } else {
        comp = <Editor></Editor>
    }




    return (
    <div className={classNameContentContainer}>
        {comp}
    </div>
    );
}