import React, { useState } from "react";

const ColorButton = ({currentColor,Color,onColorChange}) => {
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (color) => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

    
    const noOfHovers = useState(0);
    const cssColor = {
        Blue: "#d5dde0",
        Black:"#575a5d"
    }
    return (
        <div
        className="colorPickerButton"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            {Color===currentColor?(<button 
                style={{"height":"3rem","width":"2rem","borderRadius": '50%',"padding":"10px 20px","cursor":"pointer","border": "4px solid #fff","boxShadow":"0 0 0 2px #0071e3","backgroundColor":`${cssColor[Color]}`}}
                onClick={()=>{onColorChange(Color); console.log("This color is passes to button", Color)}}>
            </button>):(<button 
                style={{"height":"3rem","width":"2rem","borderRadius": '50%',"padding":"10px 20px","cursor":"pointer","border": "4px solid #fff","boxShadow":isHovered?"0 0 0 2px #0071e3":"0 0 0 0px #000","backgroundColor":`${cssColor[Color]}`}}
                onClick={()=>{onColorChange(Color); console.log("This color is passes to button", Color)}}>
            </button>)}

        </div>
    );
}
export default ColorButton;