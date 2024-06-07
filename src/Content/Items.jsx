import React, { useRef, useState } from "react";
import Tasks from "./Tasks";

export default function Items({ changeComponentFunction, itemData, itemTitle, addTasksToKey, deleteProjectItem}) {
    const classNameh1 = "text-neutral-700 text-3xl font-bold m-4";
    const classNamedate = "text-neutral-500 ml-4";

    const classNameHeaderContainer = "flex justify-between";
    const classNametitleContainer = "flex-col";
    const classNameDeleteContainer = "flex-col items-stretch mt-4";
    const classNameDeleteButton = "px-2 py-2 text-stone-800 pl-5 pr-5";

    const classNameDescriptionContainer = "ml-4 mt-4 mb-4 border-b-2 border-stone-300";
    const classNameDescription = "text-stone-800 mt-4 mb-4";

    const classNameTasksContainer = "ml-4 mt-5 mr-4 mb-4";
    const classNameTasksH1 = "text-neutral-700 text-3xl font-bold";

    const classNameTasksInputContainer = "flex pt-5 justify-left items-center";
    const classNameTasksInput = "bg-stone-300 h-9 w-1/3 border-b-2 border-transparent focus:outline-none focus:border-black focus:ring-0";
    const classNameTasksInputLabel = "ml-3 text-stone-800 font-medium text-center";

    const classNameTasksInnerContainer = "bg-stone-100 mt-10 pt-10 pl-5 pr-5 pb-10";

    const addTaskRef = useRef();
    const [currentTasks, setCurrentTasks] = useState(itemData.tasks);

    // Use a unique key to force re-render when itemData changes
    const [itemKey, setItemKey] = useState(itemTitle);

    // Update currentTasks and itemKey when itemData or itemTitle changes
    if (itemKey !== itemTitle) {
        setCurrentTasks(itemData.tasks);
        setItemKey(itemTitle);
    }

    function handleAddTask() {
        const newTask = addTaskRef.current.value;
        if (newTask.trim() !== "") {
            const updatedTasks = [...currentTasks, newTask];
            setCurrentTasks(updatedTasks);
            addTasksToKey(itemTitle, updatedTasks);
            addTaskRef.current.value = "";
        }
    }

    function removeTask(task) {
        const updatedTasks = currentTasks.filter(t => t !== task);
        setCurrentTasks(updatedTasks);
        addTasksToKey(itemTitle, updatedTasks);
    }

    function handleDeleteProject() {
        deleteProjectItem(itemTitle)
    }

    return (
        <>
            <div className={classNameHeaderContainer}>
                <div className={classNametitleContainer}>
                    <h1 className={classNameh1}>{itemTitle}</h1>
                    <h2 className={classNamedate}>{itemData.project_date}</h2>
                </div>
                <div className={classNameDeleteContainer}>
                    <button className={classNameDeleteButton} onClick={handleDeleteProject}>Delete</button>
                </div>
            </div>
            <div className={classNameDescriptionContainer}>
                <p className={classNameDescription}>{itemData.project_description}</p>
            </div>
            <div className={classNameTasksContainer}>
                <h1 className={classNameTasksH1}>Tasks</h1>
                <div className={classNameTasksInputContainer}>
                    <input ref={addTaskRef} className={classNameTasksInput} placeholder="Enter a new task" />
                    <button onClick={handleAddTask} className={classNameTasksInputLabel}>Add task</button>
                </div>
                <div className={classNameTasksInnerContainer}>
                    <Tasks tasks={currentTasks} removeTask={removeTask} />
                </div>
            </div>
        </>
    );
}
