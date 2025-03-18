import Tab from "./Tab";
const Tabs = ({tabs, activeTab, setActiveTab}) => {
    return (
        <>
        {tabs.map((tab, index) => (
            <Tab
            key={index}
            label={tab.label}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}   
            />
        ))} 
        </>
    );
};

export default Tabs;