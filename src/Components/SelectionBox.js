import React,{useState} from 'react';
import Box from './Box';
const SelectionBox = ({selectionDetails})=>{
    console.log("here--------------",selectionDetails);
    const models = selectionDetails.models;
    const productModels = selectionDetails.models;
    const [currentModel,setCurrentModel]=useState(models[0].modelName);

    function changeModel(modelName){
        setCurrentModel(modelName);
    }
    return(
        <>
        <div className="selectionBox">
            <div className="selectionBoxTitle">
                <h2 className="selectionBoxTitleText"><span className="selectionBoxTitleTextFirstword">Model.</span><span className="selectionBoxTitleTextFirstword1"> Which is best for you?</span></h2>
            </div>
            <h4 className="ModelName" style={{"margin":"0px 0px 0px 20px"}}>{currentModel}</h4>
            <div className="selectionBoxModels">
                {
                productModels.map((model)=>{
                    return(
                    <Box modelDetails={model} currentSelectedModel={currentModel} handleModelChange={changeModel}/>
                    );
                })
                }
            </div>
        </div>
        </>
    );
}

export default SelectionBox;
