import React, { useState, useEffect } from "react";
import Content from "./Content/Content";
import SidebarProjects from "./SideBarProjects";

function App() {
  const classNameMainDiv = "flex h-screen pt-10";

  // Sidebar
  const classNameH2 = 'text-white text-center text-xl font-bold ml-7';
  const classNameButton = 'mt-6 px-4 py-2 bg-stone-800 text-stone-400 rounded ml-7';
  const classNameContainer = "bg-black w-1/5 flex flex-col items-center rounded-r-lg";
  const classNameInnerContainer = "flex flex-col items-start justify-center w-full";
  const classNameItems = "flex flex-col items-center mt-3";
  const classNameSideBarProjectsContainer = "mt-6 ml-7";

  const [componentType, changeComponentType] = useState("default");
  const [previousProjects, setProjects] = useState({});
  const [currentKey, setCurrentKey] = useState("");


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
    setProjects(updatedProjects);
  }

  function deleteProjectItem (projectHeader){
    const updatedDeleteProjects = {
      ...previousProjects
    }
    delete updatedDeleteProjects[projectHeader];
    setProjects(updatedDeleteProjects);
    changeComponentType('default');
  }

  function handleAddProject() {
    changeComponentType('editor');
  }

  function changeComponent(type) {
    changeComponentType(type);
  }

  function changeCurrentKey(key) {
    setCurrentKey(key);
  }

  function addTasksToKey(key, newTasks) {
    const updatedProjects = {
      ...previousProjects,
      [key]: {
        ...previousProjects[key],
        tasks: newTasks
      }
    };
    setProjects(updatedProjects);
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
              projectHeaders={Object.keys(previousProjects)}
              changeComponentFunction={changeComponent}
              changeCurrentKey={changeCurrentKey}
            />
          </div>
        </div>
      </div>
      <Content
        componentType={componentType}
        changeComponentFunction={changeComponent}
        addProjectItemFunction={addProjectItem}
        deleteProjectItem={deleteProjectItem}
        itemData={previousProjects[currentKey]}
        itemTitle={currentKey}
        addTasksToKey={addTasksToKey}
      />
    </div>
  );
}

export default App;
