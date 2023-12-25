import React from "react";

const ProductHeroTitle = ({productDetails}) => {
    const title = productDetails.title;
    const description = productDetails.description;
    return (
        <div className="productHeroTitle">
            <div className="NewTagIcon"><h3 className="NewTagIconText">New</h3></div>
            <h1 className="productHeroTitleText">Buy {title}</h1>
            <p className="productHeroTitleDescription">{description.slice(0,-20)}</p>
            <p className="productHeroTitleDescription">{description.slice(-20,-1)})</p>
        </div>
    )
}

export default ProductHeroTitle;