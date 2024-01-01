import React,{useState} from 'react';
import ModelBox from './ModelBox';
const ModelSelectionBox = ({selectionDetails,currentModel})=>{
    // console.log("here--------------",selectionDetails);
    const models = selectionDetails.ModelSizeAvailable;
    const [size,setSize] = useState(Object.keys(models["iphone 15"])[0]);
    const productModels = Object.entries(models["iphone 15"]);
    const cm = Object.entries(models["iphone 15"]);
    console.log("here--------------11",
                Object.entries(models["iphone 15"]),
                );//iphone 15


    function changeSize(modelSize){
        setSize(modelSize);
    }


    return(
        <>
        <div className="selectionBox">
            <div className="selectionBoxTitle">
                <h2 className="selectionBoxTitleText"><span className="selectionBoxTitleTextFirstword">Storage.</span><span className="selectionBoxTitleTextFirstword1"> How much space do you need?</span></h2>
            </div>
            <h4 className="ModelName" style={{"margin":"0px 0px 0px 20px"}}>{size}</h4>
            <div className="selectionBoxModels">
                {
                productModels.map((value,index)=>{
                    return(
                    console.log("here--------------0",value[0]),
                    console.log("here--------------1",value[1]),
                    <ModelBox sizeDetails={value[0]} currentSelectedSize={size} details={value[1]} handleSizeChange={changeSize}/>
                    );
                })
                }
            </div>
        </div>
        </>
    );
}
export default ModelSelectionBox;
