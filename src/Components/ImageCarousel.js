import React,{useState} from 'react';
import CarouselButton from './ImageCarouselButton';
import CarouselStepButton from './imageCarouselStepButton';
const Carousel = ({Images})=> {
    const ImagesArr = [...Images];
    const [isLeftButton,setIsLeftButton]=useState(false);
    const [isRightButton,setIsRightButton]=useState(true);
    const [currentImage,setCurrentImage]=useState(ImagesArr[0]);
    const [currentIndex,setCurrentIndex]=useState(0);

    function changeImage(index){
        setCurrentImage(ImagesArr[index]);
        setCurrentIndex(index);
    }
    function leftCarousel(){
        if(currentIndex===0){
            setIsLeftButton(false);
        } else{
            const calculatedIndex=(currentIndex-1)%ImagesArr.length;
            setCurrentImage(ImagesArr[calculatedIndex]);
            setCurrentIndex(calculatedIndex);
        }
    }
    function rightCarousel(){
        if(currentIndex===ImagesArr.length-1){
            setIsRightButton(false);
        } else {
            const calculatedIndex=(currentIndex+1)%ImagesArr.length;
            setCurrentImage(ImagesArr[calculatedIndex]);
            setCurrentIndex(calculatedIndex);
        }
    }
    return(
        <div className="carouselMain">
            <div className="carouselImages">
                <img src={currentImage} alt={currentImage}/>
                <ul className="carouselbuttonlist">
                {ImagesArr.map((value,index)=>(

                    <CarouselButton key={index} currentIndex={currentIndex} onImageChange={changeImage} Index={index}/>
                ))}
                </ul>
                <CarouselStepButton onClickHandler={leftCarousel} />
            </div>
        </div>
    );
}
export default Carousel;