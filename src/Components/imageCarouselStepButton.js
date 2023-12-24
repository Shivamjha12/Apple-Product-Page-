import React from 'react';

const CarouselStepButton = ({onClickHandler}) => {
    const handleClick =()=>{
        onClickHandler();
    }
    return(
        <div className="carouselstepbutton">
            <button type="button" onClick={()=>{handleClick();}} aria-hidden="false" aria-label="Next" 
            class="carouselstepbutton" 
            >Here</button>
        </div>
        
    );
}
export default CarouselStepButton ;