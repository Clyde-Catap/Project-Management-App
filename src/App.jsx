import React, { useRef } from "react";
import { useState } from "react";

import YourProjectsSideBar from "./YourProjectsSidebar";
import Content from "./Content/Content";
import SidebarProjects from "./SideBarProjects";

function App() {
  const classNameMainDiv = "flex h-screen pt-10"

  // Sidebar
  const classNameH2 = 'text-white text-center text-xl font-bold ml-7';
  const classNameButton = 'mt-6 px-4 py-2 bg-stone-800 text-stone-400 rounded ml-7';
  const classNameContainer = "bg-black w-1/5 flex flex-col items-center rounded-r-lg";
  const classNameInnerContainer = "flex flex-col items-start justify-center w-full";
  const classNameItems = "flex flex-col items-center mt-3";
  const classNameSideBarProjectsContainer = "mt-6 ml-7"

  let projectstiral = {
    "Learning Reacts": {
      "project_description": "",
      "project_date": "",
      "tasks": []
    },
    "Learning Backend": {
      "project_description": "",
      "project_date": "",
      "tasks": []
    },

  }

  const projects = {};
  const showComponent = "default";
  const defaultkey = "";

  const [componentType,changeComponentType] = useState(showComponent);
  const [previousProjects, addProjects] = useState(projects);
  const [currentKey, changekey] = useState(defaultkey)
 


  function addProjectItem(projectHeader, projectDescription, projectDate) {
    const newProjectName = projectHeader;
    const updatedProjects = {
      ...previousProjects,
      [newProjectName]: {
        project_description: projectDescription,
        project_date: projectDate,
        tasks: []
      }
    };
    addProjects(updatedProjects);
  }
  function handleAddProject(event){
    changeComponentType('editor')
  }

  function changeComponent(type){
    changeComponentType(type)
  }

  function changeCurrentKey(key){
    changekey(key)
  }

  function addTasksToKey(key, newTasks){
    const updatedProjects = previousProjects
    updatedProjects[key]['tasks']= newTasks
    // console.log(newTasks)
    addProjects(updatedProjects)
    // console.log(previousProjects)
  }


  return (
    <div className={classNameMainDiv}>        
        <div className={classNameContainer}>
            <div className={classNameInnerContainer}>
                <div className={classNameItems}>
                    <h2 className={classNameH2}>YOUR PROJECTS</h2>
                </div>
                <div className={classNameItems}>
                    <button onClick={handleAddProject} className={classNameButton}>+ Add Project</button>
                </div>
                <div className={classNameSideBarProjectsContainer}>
                  <SidebarProjects 
                    projectHeaders={Object.keys(previousProjects)} changeComponentFunction={changeComponent} changeCurrentKey={changeCurrentKey}></SidebarProjects>
                </div>
            </div>
        </div>
      <Content 
          componentType={componentType} 
          changeComponentFunction={changeComponent} 
          addProjectItemFunction={addProjectItem} 
          itemData={previousProjects[currentKey]}
          itemTitle={currentKey}
          addTasksToKey={addTasksToKey} 
        />
    </div>
  );
}

export default App;
