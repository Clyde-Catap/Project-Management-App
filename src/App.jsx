import React from "react";


import YourProjectsSideBar from "./YourProjectsSidebar";
import Content from "./Content";

function App() {
  const classNameMainDiv = "flex"

  return (
    <div className={classNameMainDiv}>        
      <YourProjectsSideBar/>
      <Content/>

    </div>
  );
}

export default App;
