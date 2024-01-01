const ModelBox =({sizeDetails,currentSelectedSize,details,handleSizeChange})=>{
    return(
        <>
        {currentSelectedSize!==details.modelSize?(<div onClick={()=>{handleSizeChange(sizeDetails)}} className="modelDetailBox">
            <div className="modelDetailBoxMain1">
                <h2 className="modelDetailBoxMainTitle">{details.modelSize}</h2>
                
            </div>
            <div className="modelDetailBoxMain2">
                <p className="modelDetailBoxMainEmi">From ₹{details.modelEmi}/mo.</p>
                <p className="modelDetailBoxPrice">or ₹{details.modelPrice} <span className="modelDetailBoxprice1">(Incl. of all taxes)</span></p>
            </div>
        </div>):(
        <div onClick={()=>{handleSizeChange(sizeDetails)}} className="modelDetailBoxSelected">
            <div className="modelDetailBoxMain1">
                <h2 className="modelDetailBoxMainTitle">{details.modelSize}</h2>
                
            </div>
            <div className="modelDetailBoxMain2">
                <p className="modelDetailBoxMainEmi">From ₹{details.modelEmi}/mo.</p>
                <p className="modelDetailBoxPrice">or ₹{details.modelPrice} <span className="modelDetailBoxprice1">(Incl. of all taxes)</span></p>
            </div>
        </div>)}
        </>
    );
}
export default ModelBox;