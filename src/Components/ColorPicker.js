import React, { useState } from "react";
import ColorButton from "./ColorButton";
const ColorPicker = ({onModelColorChange,modelColors}) => {
    const [modelColor, otherData] = Object.entries(modelColors)[0];
    const modelColorList = Object.entries(modelColors);
    const colorList = [];
    for(let i=0;i<modelColorList.length;i++){
        colorList.push(modelColorList[i][0]);
    }
    console.log("111111111111111111111111111111111111111111111111",modelColorList,"--->",typeof(modelColorList),"--->",colorList);
    const [currentColor, setColor] = useState(modelColor);

    const colorChange = (color) => {
        setColor(color);
        onModelColorChange(color);
    }
    
    const cssColor = {
        "Blue": "#d5dde0",
        "Black":"#575a5d"
    }
    
    return (
        <div className="colorPickerButtons" >
            <h1>Color - {currentColor}</h1>
            <div className="colorPickerButtonListMain">
            <ul className="colorPickerButtonList">
            
                {colorList.map((col,index)=>(
                // <li key={index}>{col}</li>
                <li className="colorPickerButtonListItem">
                <ColorButton key={index} currentColor={currentColor} Color={col} onColorChange={colorChange}/>
                </li>))
                }
            
                </ul>
            </div>
        </div>
    );
}
export default ColorPicker;