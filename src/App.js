import './App.css';
import Carousel from './Components/ImageCarousel';
import Header from './Components/Header';
import ProductHeroTitle from './Components/ProductHeroTitle';
import WhatInsideBox from './Components/WhatsInsideBox';
import SelectionBox from './Components/SelectionBox';
import ColorPicker from './Components/ColorPicker';
import React,{useState} from 'react';
const ApiData={ // Api Schema for the Product Page
  "title":"iPhone 15",
  "description":"From ₹2483.00/mo.Per Month with instant savings and No Cost EMI orMRP ₹79900.00(Incl. of all taxes)",
  "models":[{"modelName":"iPhone 15","modelDescription":"15.5 cm (6.1-inch)","modelEmi":"12483.00","modelPrice":"79900.00"},{"modelName":"iPhone 15 Plus","modelDescription":"17.0 cm (6.7-inch)","modelEmi":"14150.00","modelPrice":"89900.00"}],
  "ModelColorAvailable":{
                        "Blue":{"Images":["https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=2555&hei=1440&fmt=p-jpg&qlt=80&.v=1692923777972",
                                "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue_AV1_GEO_EMEA?wid=2555&hei=1440&fmt=p-jpg&qlt=80&.v=1692810668859",
                                "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue_AV2?wid=2555&hei=1440&fmt=p-jpg&qlt=80&.v=1692810674284"]},
                        "Black":{"Images":["https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black?wid=2555&hei=1440&fmt=p-jpg&qlt=80&.v=1692923777972",
                                "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black_AV1_GEO_EMEA?wid=2555&hei=1440&fmt=p-jpg&qlt=80&.v=1692810668859",
                                "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black_AV2?wid=2555&hei=1440&fmt=p-jpg&qlt=80&.v=1692810674284"]
                        }
  },
  "WhatsInsideBox":[
                    {"title":"iPhone with iOS 15","Image":"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-plus-black-witb-202309?wid=185&hei=392&fmt=jpeg&qlt=95&.v=1692745044272"},
                    {"title":"USB-C to Lightning Cable","Image":"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-cables-witb-202309?wid=92&hei=392&fmt=jpeg&qlt=95&.v=1697823661910"},
                  ],
}




function App() {
  const [currentModelColor,setCurrentModelColor]=useState("Blue");
  function changeModelColor(color){
      setCurrentModelColor(color);
  }
  return (
    <>
    <Header/>
   <div className="mainDiv">
      <div className="productPageLeft">
        <ProductHeroTitle productDetails={ApiData}/>
        <div className="productPageMid">
          <div className="productPageMidCarousel">
            { currentModelColor && <Carousel currentColor={currentModelColor} Images={ApiData} />}
          </div>
          <div className="productPageRightCarousel">
            <div className="productPageSelectionBox">
              <SelectionBox selectionDetails={ApiData}/>
            </div>
            <div className="productPageColorPicker">
              <ColorPicker onModelColorChange={changeModelColor} modelColors={ApiData.ModelColorAvailable}/>
            </div>
          </div>
      </div>
    </div>
    <WhatInsideBox apiData={ApiData}/>
   </div>
   </>

  );
}

export default App;
