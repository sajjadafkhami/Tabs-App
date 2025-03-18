

const Tab = ({label, isActive, onClick}) => {
    return (
        <button
            onClick={onClick}
            style={{
                padding: "10px 20px",
                cursor: "pointer",
                backgroundColor: isActive ? "#007bff" : "#ddd",
                color: isActive ? "white" : "black",
                border: "4px",
                margin: "0 5px",
                transition: "background-color 0.3s, transform 0.2s",
                transform: isActive ? "scale(1.1)" : "scale(1)"
        }} 
        >{label}</button>
    );
};

export default Tab;