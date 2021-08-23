import data from '../storage/informaitonWeb.json';
import img from '../img/toczenie.jpg';

const Box = ()=>{
    const tab = data.ofertBoxs;
    const showBox= ()=>{
    tab.map(oneBox =>{
        return <div>{oneBox.title}</div>
    })
}

    return (
        <>
        {tab.map(oneBox =>{
        return <div className = {` box ${oneBox.title}`}>
            <div className="filter">
                <p>{oneBox.title}</p>
            </div>
        </div>
        })
    }
        </>
    )
}

export default Box;