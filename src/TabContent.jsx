
const TabContent = ({ content }) => {
    return (
      <>
        <style>
          {`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateX(-20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}
        </style>
        <div
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            marginTop: "10px",
            opacity: 0,
            transform: "translateX(-20px)",
            animation: "slideIn 0.5s forwards",
          }}
        >
          {content}
        </div>
      </>
    );
  };
  
  export default TabContent;
  