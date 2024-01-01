import './App.css';
import Carousel from './Components/ImageCarousel';
import Header from './Components/Header';
import ProductHeroTitle from './Components/ProductHeroTitle';
import WhatInsideBox from './Components/WhatsInsideBox';
import SelectionBox from './Components/SelectionBox';
import ColorPicker from './Components/ColorPicker';
import React, { useEffect, useRef, useState } from 'react';
import ModelSelectionBox from './Components/ModelSelectionBox';
const ApiData=
{ // Api Schema for the Product Page
  "title":"iPhone 15",
  "description": "From ₹2483.00/mo.Per Month with instant savings and No Cost EMI orMRP ₹79900.00(Incl. of all taxes)",
  "models": [{"modelName":"iPhone 15","modelDescription":"15.5 cm (6.1-inch)","modelEmi":"12483.00","modelPrice":"79900.00"},{"modelName":"iPhone 15 Plus","modelDescription":"17.0 cm (6.7-inch)","modelEmi":"14150.00","modelPrice":"89900.00"}],
  "ModelColorAvailable":{
                          "Blue":{"Images":["https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=2555&hei=1440&fmt=p-jpg&qlt=80&.v=1692923777972",
                                  "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue_AV1_GEO_EMEA?wid=2555&hei=1440&fmt=p-jpg&qlt=80&.v=1692810668859",
                                  "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue_AV2?wid=2555&hei=1440&fmt=p-jpg&qlt=80&.v=1692810674284"]
                                },
                          "Black":{"Images":["https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black?wid=2555&hei=1440&fmt=p-jpg&qlt=80&.v=1692923777972",
                                  "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black_AV1_GEO_EMEA?wid=2555&hei=1440&fmt=p-jpg&qlt=80&.v=1692810668859",
                                  "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black_AV2?wid=2555&hei=1440&fmt=p-jpg&qlt=80&.v=1692810674284"]
                                  }
                        },
  "WhatsInsideBox":[
                    {"title":"iPhone with iOS 15","Image":"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-plus-black-witb-202309?wid=185&hei=392&fmt=jpeg&qlt=95&.v=1692745044272"},
                    {"title":"USB-C to Lightning Cable","Image":"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-cables-witb-202309?wid=92&hei=392&fmt=jpeg&qlt=95&.v=1697823661910"},
                  ],
  "ModelSizeAvailable":
                      {
                          "iphone 15":{
                            "128GB":{"modelSize":"128GB","modelEmi":"12483.00","modelPrice":"79900.00"},
                            "256GB":{"modelSize":"256GB","modelEmi":"14150.00","modelPrice":"89900.00"},
                            "512GB":{"modelSize":"512GB","modelEmi":"17483.00","modelPrice":"109900.00"} 
                          },
                          "iPhone 15 Plus":{
                            "128GB":{"modelSize":"128GB","modelEmi":"14150.00","modelPrice":"89900.00"},
                            "256GB":{"modelSize":"256GB","modelEmi":"15817.00","modelPrice":"99900.00"},
                            "512GB":{"modelSize":"512GB","modelEmi":"19150.00","modelPrice":"119900.00"} 
                          }

                      }
                      
}



function App() {
  const [currentModelColor, setCurrentModelColor] = useState("Blue");
  const [currentModel, setCurrentModel] = useState(ApiData.models[0].modelName);
  const [isMidCarouselFixed, setIsMidCarouselFixed] = useState(false);

  const pageTitleRef = useRef(null);
  const midCarouselRef = useRef(null);
  const insideBoxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const pageTitleElement = pageTitleRef.current;
      const midCarouselElement = midCarouselRef.current;
      const insideBoxElement = insideBoxRef.current;

      if (pageTitleElement && midCarouselElement && insideBoxElement) {
        const pageTitleRect = pageTitleElement.getBoundingClientRect();
        const midCarouselRect = midCarouselElement.getBoundingClientRect();
        const insideBoxRect = insideBoxElement.getBoundingClientRect();

        // Check if pageTitle div is completely scrolled out of the page
        const isPageTitleScrolledOut = pageTitleRect.bottom <= 0;

        // Check if insideBox div is visible
        const isInsideBoxVisible = insideBoxRect.top+140<= window.innerHeight;

        // Update the state to fix/unfix mid carousel based on pageTitle div and insideBox visibility
        setIsMidCarouselFixed(isPageTitleScrolledOut && !isInsideBoxVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function changeModelColor(color) {
    setCurrentModelColor(color);
  }

  function changeModel(color) {
    setCurrentModel(color);
  }

  return (
    <>
      <Header />
      <div className={`mainDiv ${isMidCarouselFixed ? 'midCarouselFixed' : ''}`} >
        <div className="productPageLeft" ref={midCarouselRef}>
          <div className="PageTitle" ref={pageTitleRef}>
            <ProductHeroTitle productDetails={ApiData} />
          </div>
          <div className="productPageMid">
            <div className={`productPageMidCarousel ${isMidCarouselFixed ? 'productPageMidCarouselFixed' : ''}`}>
              {currentModelColor && <Carousel currentColor={currentModelColor} Images={ApiData} />}
            </div>
            <div className={`productPageRightCarousel ${isMidCarouselFixed ? 'productPageRightCarouselFixed' : ''}`} >
              <div className="productPageSelectionBox">
                <SelectionBox selectionDetails={ApiData} onModelChange={changeModel} />
              </div>
              <div className="productPageColorPicker">
                <ColorPicker onModelColorChange={changeModelColor} modelColors={ApiData.ModelColorAvailable} />
              </div>
              <div className="productPageColorPicker">
                <ModelSelectionBox selectionDetails={ApiData} currentModel={currentModel} />
              </div>
            </div>
          </div>
        </div>
        <div className="insideBox" ref={insideBoxRef}>
          <WhatInsideBox apiData={ApiData} />
        </div>
      </div>
    </>
  );
}

export default App;

