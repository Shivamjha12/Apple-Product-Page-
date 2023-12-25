const WhatInsideBox = ({apiData}) => {
    const Data = apiData.WhatsInsideBox;
    const ImageArr = []
    return(
        <>

        <div className="WhatsInsideBox">
            <div className="WhatsInsideBoxTitle">
            <h2 className="WhatInsideBoxTitleText">What's in the Box</h2>
            </div>
            <div className="WhatsInsideBoxItemMain">
                { 
                Data.map((item,index)=>(
                    <div className="WhatsInsideBoxItem">
                        <div className="WhatsInsideBoxItemNumber">
                            <img className="WhatsInsideBoxItemImage" src={item.Image} alt={item.Image}/>
                            <p className="WhatsInsideBoxItemText">{item.title}</p>
                        </div>
                    </div>
                ))
                }
            </div>

            <div className="WhatsInsideEnvironmental">
                <h4 className="WhatsInsideEnvironmentalTitle">Our environmental goals.</h4>
                <div className="WhatsInsideEnvironmentalp1">
                <p >As part of our efforts to reach carbon neutrality by 2030, iPhone 15 and iPhone 15 Plus do not include a power adapter or EarPods. Included in the box is a USB‑C Charge Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports.</p>
                </div>
                <p className="WhatsInsideEnvironmentalp2">We encourage you to use any compatible USB‑C power adapter. If you need a new Apple power adapter or headphones, they are available for purchase.</p>
            </div>
        </div>

        </>
    )
}

export default WhatInsideBox;