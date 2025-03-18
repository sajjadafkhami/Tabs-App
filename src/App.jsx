import React from "react";
import { useState } from "react"
import Tabs from "./Tabs.jsx";
import TabContent from "./TabContent.jsx";


function App() {
  const tabsData = [
    { label: "Tab1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
    { label: "Tab2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque.Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Nisi vitae suscipit tellus mauris a diam maecenas sed."},
    { label: "Tab3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    { label: "Tab4", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <h1>Tabs Component with React</h1>
      <Tabs tabs={tabsData} activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabContent content={tabsData[activeTab].content} />
    </div>
  );
};

export default App;
