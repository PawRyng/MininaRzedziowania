import React, {useEffect} from 'react';
import data from '../storage/informaitonWeb.json';
import Box from './box.jsx';
import '../css/ofert.css';
const Offert = () =>{    
    
    useEffect(() => {
        const lines = document.querySelectorAll(".line");
        console.log(lines[2]);
        if(window.scrollY==0){
            lines[2].style.transform = 'translate(-50vw)';
            lines[3].style.transform = 'translate(50vw)';
            document.querySelector(".ofertTitle>p").style.opacity = "0";
        
        }
    }, []);
    window.addEventListener("scroll", ()=>{
        console.log(window.scrollY)
        if(window.scrollY >= 1700){
            document.querySelector(".ofertTitle>p").style.transition = "2s";
            document.querySelector(".ofertTitle>p").style.opacity = "1";
            document.querySelectorAll(".line")[2].style.transition = '2s';
            document.querySelectorAll(".line")[3].style.transition = '2s';
            setTimeout(() => {
                document.querySelectorAll(".line")[2].style.transform = 'translate(0)';
                document.querySelectorAll(".line")[3].style.transform = 'translate(0)';
            }, 200);
            
        }

    })
    return(
        <>
            <div className="offert">
                <div className="ofertTitle">
                    <div className="line"></div>
                        <p>{data.ofertTitle}</p>
                    <div className="line"></div>
                </div>
            </div>
            <div className = 'ofertsBlocks'>
            <Box/>
            </div>
        </>
    )
}



export default Offert;