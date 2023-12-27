import React,{useEffect, useState} from 'react';
import CarouselButton from './ImageCarouselButton';
import CarouselStepButton from './imageCarouselStepButton';
const Carousel = ({currentColor,Images})=> {
    const ApiData = Images.ModelColorAvailable;
    console.log(ApiData);
    const ImagesArr = [...ApiData[currentColor].Images];
    const [isLeftButton,setIsLeftButton]=useState(false);
    const [isRightButton,setIsRightButton]=useState(true);
    const [currentImage,setCurrentImage]=useState(ImagesArr[0]);
    const [currentIndex,setCurrentIndex]=useState(0);

    function changeImage(index){
        ImagesArr = [...ApiData[currentColor].Images];
    }
    useEffect(()=>{

    },[currentColor])
    useEffect(()=>{
        if(currentIndex===0){
            setIsLeftButton(false);
            setIsRightButton(true);
        } else if(currentIndex===ImagesArr.length-1){
            setIsRightButton(false);
            setIsLeftButton(true);
        } else if(currentIndex!==0){
            setIsLeftButton(true);
        } else {
            setIsRightButton(true);
        }
    },[currentIndex]);
    function leftCarousel(){
        if(currentIndex===0){
            setIsLeftButton(false);
        } else{
            setIsRightButton(true);
            const calculatedIndex=(currentIndex-1)%ImagesArr.length;
            setCurrentImage(ImagesArr[calculatedIndex]);
            setCurrentIndex(calculatedIndex);
        }
    }
    function rightCarousel(){
        if(currentIndex===ImagesArr.length-1){
            setIsRightButton(false);
        } else {
            setIsLeftButton(true);
            const calculatedIndex=(currentIndex+1)%ImagesArr.length;
            setCurrentImage(ImagesArr[calculatedIndex]);
            setCurrentIndex(calculatedIndex);
        }
    }
    return(
        <div className="carouselMain">
            {currentColor}
            <div className="carouselImages">
            <div className="stepbutton">  
            {isLeftButton===true?(<CarouselStepButton mode={'left'} onClickHandler={leftCarousel}/>):(<></>)}
            {isRightButton===true?(<CarouselStepButton mode={'right'} onClickHandler={rightCarousel}/>):(<></>)}
            </div>
            <img className="carouselImage" src={currentImage} alt={currentImage}/>
            <div className="carouselbuttonlistmain">
            <ul className="carouselbuttonlist">
            {ImagesArr.map((value,index)=>(
                <CarouselButton key={index} currentIndex={currentIndex} onImageChange={changeImage} Index={index}/>
            ))}
            </ul>
            </div>
                
            </div>
        </div>
    );
}
export default Carousel;