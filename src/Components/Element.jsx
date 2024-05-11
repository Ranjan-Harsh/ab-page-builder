// components/Element.js
import React from 'react';

const Element = ({ element, isSelected, setSelectedElement, modalVisible}) => {

  const handleClick = () => {
    if (isSelected) {
      setSelectedElement(null)
    } else {
      setSelectedElement(element);
    }
  };

  return (
    <div
      className={`element ${isSelected && !modalVisible ? 'selected' : ''}`}
      style={{ "left": element.x+'px', "top": element.y+'px', 'cursor': 'pointer' }}
      onClick={handleClick}
    >

      {!modalVisible &&
        <>
          {element.type === 'label' && <label tabIndex={0} id='label1' draggable className='click' style={{ "left": element.x+'px', "top": element.y+'px', "fontSize": element.fontSize + 'px', "fontWeight": element.fontWeight }} >{element.text}</label>}
          {element.type === 'input' && <input draggable className='click' style={{ "left": element.x+'px', "top": element.y+'px', "fontSize": element.fontSize + 'px', "fontWeight": element.fontWeight }} />}
          {element.type === 'button' && <button draggable className='click' style={{ "left": element.x+'px', "top": element.y+'px', "fontSize": element.fontSize + 'px', "fontWeight": element.fontWeight, "background-color": 'black', "color": 'white', "border-radius": '4px', 'border': 'solid black', "padding": '5px 7px' }} >{element.text}</button>}
        </>}
    </div>
  );
};

export default Element;
