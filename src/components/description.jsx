import React, {useEffect} from 'react';
import './test';
import '../css/descryption.css';

import data from '../storage/informaitonWeb.json';

const About = () => {
    
const lines = document.getElementsByClassName("line");
let flaga = false;
useEffect(()=>{
    console.log(window.scrollY);
    if(window.scrollY==0){
        for(let i = 0; i<=lines.length-1;i+=2){
            lines[i].style.transform = 'translate(-50vw)';
            lines[i+1].style.transform = 'translate(50vw)';
        }    
        document.querySelector(".ofertTitle>p").style.opacity = "0";
        document.querySelector(".titleRecomendation>p").style.opacity = "0";
        document.querySelector("h3").style.opacity = "0";
        document.querySelector("h3").style.transition = "2s";
    }
    else if(window.scrollY <= 100){
        for(let i = 1; i<=lines.length-1;i+=2){
            lines[i].style.transform = 'translate(-50vw)';
            lines[i+1].style.transform = 'translate(50vw)';
        }    
    }
    else if(window.scrollY <= 1700){
        for(let i = 2; i<=lines.length-1; i++){
            lines[i].style.transform = 'translate(-50vw)';
            i++
            lines[i].style.transform = 'translate(50vw)';
        }
            document.querySelector(".ofertTitle>p").style.opacity = '0';
            document.querySelector(".titleRecomendation>p").style.opacity = '0';
        }
        else if(window.scrollY <=2700){
            lines[4].style.transform = 'translate(-50vw)';
            lines[5].style.transform = 'translate(50vw)';
            document.querySelector(".titleRecomendation>p").style.opacity = '0';
    }
    else if(window.scrollY>=100){
        for(let i = 0; i<=1; i++){
            lines[i].style.transform = 'translate(0)';
        }
    }
},[])
window.addEventListener("scroll", element=>{
    if(window.scrollY >= 100){
        document.querySelector("h3").style.opacity = "1";        
        for(let i = 0; i<=1 ; i++){
            lines[i].style.transform = 'translate(0)';
            lines[i].style.transition = '2s';
        }
    }
    else if(window.scrollY >= 2700){
        for(let i = 4; i<=lines.length-1; i++){
            lines[i].style.transition = '2s';
            lines[i].style.transform = 'translate(0)';
        }
        document.querySelector(".titleRecomendation>p").style.opacity = '1';
    }    
});
window.addEventListener("scroll", element=>{
    if(window.scrollY >= 2700){
        for(let i = 4; i<=lines.length-1; i++){
            lines[i].style.transition = '2s';
            lines[i].style.transform = 'translate(0)';
        }
        document.querySelector(".titleRecomendation>p").style.opacity = '1';
        document.querySelector(".titleRecomendation>p").style.transition = '1s';
    }    
});

    return(
        <div className="About">
            <div className="aboutTitle">
                <div className="line"></div>
                <h3>{data.aboutUsTitle}</h3>
                <div className="line"></div>
            </div>
            <p>{data.aboutAsDescription}</p>
        </div>
    )
}
export default About;