const Box =({modelDetails,currentSelectedModel,handleModelChange})=>{
    return(
        <>
        {currentSelectedModel!==modelDetails.modelName?(<div onClick={()=>{handleModelChange(modelDetails.modelName)}} className="modelDetailBox">
            <div className="modelDetailBoxMain1">
                <h2 className="modelDetailBoxMainTitle">{modelDetails.modelName}</h2>
                <p className="modelDetailBoxMainPara">{modelDetails.modelDescription} display</p>
            </div>
            <div className="modelDetailBoxMain2">
                <p className="modelDetailBoxMainEmi">From ₹{modelDetails.modelEmi}/mo.</p>
                <p className="modelDetailBoxPrice">or ₹{modelDetails.modelPrice}</p>
            </div>
        </div>):(
        <div onClick={()=>{handleModelChange(modelDetails.modelName)}} className="modelDetailBoxSelected">
            <div className="modelDetailBoxMain1">
                <h2 className="modelDetailBoxMainTitle">{modelDetails.modelName}</h2>
                <p className="modelDetailBoxMainPara">{modelDetails.modelDescription} display</p>
            </div>
            <div className="modelDetailBoxMain2">
                <p className="modelDetailBoxMainEmi">From ₹{modelDetails.modelEmi}/mo.</p>
                <p className="modelDetailBoxPrice">or ₹{modelDetails.modelPrice}</p>
            </div>
        </div>)}
        </>
    );
}
export default Box;