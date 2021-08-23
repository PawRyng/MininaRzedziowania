import React from 'react';
import logo1 from '../img/logo/Test.png';
import logo2 from '../img/logo/WieltonLogo.png';
import logo3 from '../img/logo/YawalLogo.png';
import '../css/recomendation.css';
const recomendation = ()=>{

return (
    <div className="recomendation">
        <div className="titleRecomendation">
            <div className="line"></div>
                    <p>Zaufali Nam</p>
            <div className="line"></div>
        </div>
        <div className="logos">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
        </div>
    </div>
)
}
export default recomendation