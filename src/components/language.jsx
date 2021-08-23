import '../css/language.css';
import React,{useState} from 'react'
import de from '../img/flags/Germany.png';
import uk from '../img/flags/UK.png';
import pl from '../img/flags/poland.png';
import it from '../img/flags/Italy.jpg';
import {useCommentsStore} from '../storage/hooks';


const Language = () => {
    const [inputLanguage, changeLanguage] = useState('pl');

    return(
        <div className="language">
                    <div  onClick = {()=>changeLanguage('pl')} className="flag">
                        <img src={pl} alt="deFlag"/>
                    </div>
                    <div onClick = {()=>changeLanguage('uk')}className="flag">
                        <img src={uk} alt="deFlag"/>
                    </div>
                    <div onClick = {()=>changeLanguage('de')} className="flag">
                        <img src={de} alt="deFlag"/>
                    </div>
                    <div onClick = {()=>changeLanguage('it')} className="flag">
                        <img src={it} alt="deFlag"/>
                    </div>
                    
        </div>  
    )
}
// export default Language;
