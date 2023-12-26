import React, { useState } from "react";

const ColorButton = ({currentColor,Color,onColorChange,hoverFunction,offhoverFunction,}) => {
    
    return (
        <div>
            <button 
            onMouseOver={hoverFunction(Color)}
            onMouseOut={offhoverFunction(currentColor)}
            onClick={()=>{onColorChange(Color)}} className="colorPickerButton"></button>
        </div>
    );
}
export default ColorButton;