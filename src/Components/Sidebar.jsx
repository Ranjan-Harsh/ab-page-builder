// components/Sidebar.js
import React from 'react';

const Sidebar = ({ setOpenModal, setModalValues, setSelectedElement, handleExport }) => {
  const handleDragStart = (e, type) => {
    e.dataTransfer.setData('type', type);
    setSelectedElement(null)
  };

  const handleDragEnd=(e, type)=>{
    const x = e.clientX-100;
    const y = e.clientY;
    const defaultText = {
      label: "This is a label.",
      input: "Input Field",
      button: "Button",
    };

    setModalValues({
      type: type,
      x: x,
      y: y,
      fontSize: 16,
      fontWeight: '',
      text: defaultText[type]
    })
    setOpenModal(true)
  }

  const DragIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="18"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      {/* Six dots icon */}
      <rect x="3" y="3" width="4" height="4" rx="1" ry="1" fill="#808080" />
      <rect x="9" y="3" width="4" height="4" rx="1" ry="1" fill="#808080" />
      <rect x="3" y="8" width="4" height="4" rx="1" ry="1" fill="#808080" />
      <rect x="9" y="8" width="4" height="4" rx="1" ry="1" fill="#808080" />
      <rect x="3" y="13" width="4" height="4" rx="1" ry="1" fill="#808080" />
      <rect x="9" y="13" width="4" height="4" rx="1" ry="1" fill="#808080" />
    </svg>
  );

  return (
    <>
    <div className="sidebar">
      <h1 className="sidebar-header" style={{"color": "white"}}>Blocks</h1>
      <br/>
      <div
        className="sidebar-item"
        draggable
        onDragStart={(e) => handleDragStart(e)}
        onDragEnd={(e)=> handleDragEnd(e,'label')}
      >
        < DragIcon/>
        Label
      </div>
      <div
        className="sidebar-item"
        draggable
        onDragStart={(e) => handleDragStart(e)}
        onDragEnd={(e)=> handleDragEnd(e, 'input')}
      >
        < DragIcon/>
        Input
      </div>
      <div
        className="sidebar-item"
        draggable
        onDragStart={(e) => handleDragStart(e)}
        onDragEnd={(e)=> handleDragEnd(e, 'button')}
      >
        < DragIcon/>
        Button
      </div>
      <button className='export-btn'onClick={handleExport}>Export</button>
    </div>
   
    </>
  );
};

export default Sidebar;
