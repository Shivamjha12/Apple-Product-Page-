import React,{useEffect, useState} from 'react';
import logo from '../Assets/logo.png'
const Header =  ()=>{
    return(
    <div className="headerMain">
        <div className="headerLeft">
            <img className="headerLogo" src={logo} alt="Apple Logo"/>
        </div>
        <div className="headerMid">
            <ul className="headerList">
                <li className="headerListItem">Store</li>
                <li className="headerListItem">Mac</li>
                <li className="headerListItem">iPad</li>   
                <li className="headerListItem">iPhone</li>
                <li className="headerListItem">Watch</li>
                <li className="headerListItem">AirPods</li>
                <li className="headerListItem">Tv & Home</li>   
                <li className="headerListItem">Entertainment</li>
                <li className="headerListItem">Accessories</li>
                <li className="headerListItem">Support</li>
            </ul>
        </div>
        <div className="headerRight">
            <ul className="headerList1">
                <li className="headerListItem">
                    
                <svg className="svgIcon"  xmlns="http://www.w3.org/2000/svg">
                <path d="m16.2294 29.9556-4.1755-4.0821a6.4711 6.4711 0 1 0 -1.2839 1.2625l4.2005 4.1066a.9.9 0 1 0 1.2588-1.287zm-14.5294-8.0017a5.2455 5.2455 0 1 1 5.2455 5.2527 5.2549 5.2549 0 0 1 -5.2455-5.2527z"></path></svg>
                
                
                </li>
                <li className="headerListItem">
                <svg className="svgIcon1" xmlns="http://www.w3.org/2000/svg">
                  <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path></svg>
                 </li>
            </ul>
        </div>
    </div>
    );
}

export default Header;
