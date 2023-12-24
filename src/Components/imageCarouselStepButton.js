import React from 'react';
import arrowLeft from '../Assets/arrowLeft.png';
import arrowRight from '../Assets/arrowRight.png';
const CarouselStepButton = ({mode,onClickHandler}) => {
    const handleClick =()=>{
        onClickHandler();
    }
    const left = "left";
    return(
    <>
        {mode===left?(
        <div className="">
        <button type="button" onClick={()=>{handleClick();}} aria-hidden="false" aria-label="Next" 
        class="carouselstepbutton" 
        ><img className="arrowLeftIcon" src={arrowLeft} alt={"<"}/></button>
        </div>):(
        <div className="">
        <button type="button" onClick={()=>{handleClick();}} aria-hidden="false" aria-label="Next" 
        class="carouselsteprightbutton" 
        ><img className="arrowRightIcon" src={arrowRight} alt={">"}/></button>
        </div>
        )}
    </>
        
    );
}
export default CarouselStepButton ;