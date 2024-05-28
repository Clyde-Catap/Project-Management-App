import React from "react";


import YourProjectsSideBar from "./YourProjectsSidebar";
import Content from "./Content/Content";

function App() {
  const classNameMainDiv = "flex h-screen pt-10"

  return (
    <div className={classNameMainDiv}>        
      <YourProjectsSideBar/>
      <Content/>

    </div>
  );
}

export default App;
