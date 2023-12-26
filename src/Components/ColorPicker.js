import React, { useState } from "react";
import ColorButton from "./ColorButton";
const ColorPicker = ({modelColors}) => {
    const [modelColor, otherData] = Object.entries(modelColors)[0];
    const modelColorList = Object.keys(modelColors)
    const [currentColor, setColor] = useState(modelColor);
    const [currentHoverColor, setcurrentHoverColor] = useState(modelColor);
    const colorChange = (color) => {
        setColor(color);
    }
    const currentHoverColorChange = (color) => {
        setcurrentHoverColor(color);
    }
    const offcurrentHoverColorChange = (color) => {
        setcurrentHoverColor(color);
    }
    
    return (
        <div>
            <h1>Color - {currentHoverColor}</h1>
            <ul className="colorPickerButtonList">
                {modelColorList.map((value,index)=>(
                <li><ColorButton currentColor={currentColor} color={value} onColorChange={colorChange} hoverFunction={currentHoverColorChange} offhoverFunction={offcurrentHoverColorChange}/></li>
                ))
        }
                </ul>
        </div>
    );
}
export default ColorPicker;