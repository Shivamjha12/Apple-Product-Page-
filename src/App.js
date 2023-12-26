import './App.css';
import Carousel from './Components/ImageCarousel';
import Header from './Components/Header';
import ProductHeroTitle from './Components/ProductHeroTitle';
import WhatInsideBox from './Components/WhatsInsideBox';
import SelectionBox from './Components/SelectionBox';
import ColorPicker from './Components/ColorPicker';
const ApiData={ // Api Schema for the Product Page
  "title":"iPhone 15",
  "description":"From ₹2483.00/mo.Per Month with instant savings and No Cost EMI orMRP ₹79900.00(Incl. of all taxes)",
  "models":[{"modelName":"iPhone 15","modelDescription":"15.5 cm (6.1-inch)","modelEmi":"12483.00","modelPrice":"79900.00"},{"modelName":"iPhone 15 Plus","modelDescription":"17.0 cm (6.7-inch)","modelEmi":"14150.00","modelPrice":"89900.00"}],
  "ModelColorAvailable":{
                        "Blue":{"Images":["https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=2555&hei=1440&fmt=p-jpg&qlt=80&.v=1692923777972",
                                "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue_AV1_GEO_EMEA?wid=2555&hei=1440&fmt=p-jpg&qlt=80&.v=1692810668859",
                                "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue_AV2?wid=2555&hei=1440&fmt=p-jpg&qlt=80&.v=1692810674284"]},
                        "Black":{"Images":["s"]
                        }
  },
  "WhatsInsideBox":[
                    {"title":"iPhone with iOS 15","Image":"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-plus-black-witb-202309?wid=185&hei=392&fmt=jpeg&qlt=95&.v=1692745044272"},
                    {"title":"USB-C to Lightning Cable","Image":"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-cables-witb-202309?wid=92&hei=392&fmt=jpeg&qlt=95&.v=1697823661910"},
                  ],
}




function App() {
  return (
    <>
    <Header/>
   <div className="mainDiv">
    <div className="productPageLeft">
    <ProductHeroTitle productDetails={ApiData}/>
    <div className="productPageMid">
    <div className="productPageMidCarousel">
    <Carousel Images={ApiData} />
    </div>
    <div className="productPageMidSelectionBox">
      <SelectionBox selectionDetails={ApiData}/>
    </div>
    <div className="productPageMidColorPicker">
      <ColorPicker modelColors={ApiData.ModelColorAvailable}/>
    </div>
    </div>
    </div>
    <WhatInsideBox apiData={ApiData}/>
   </div>
   </>

  );
}

export default App;
