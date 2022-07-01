import imgArr from "./imageData.js";

function Slider({slideInd}){
    const imgItem = imgArr.map((item,index) => {
        // return <div key={index} className="div-containing-img d-flex align-items-center">
        //     <img src={item.src} alt={item.name}></img>
        // </div>
        return <div key={index} className={index === slideInd ? "div-containing-img d-flex align-items-center" : "div-containing-none"}>
            <img src={item.src} alt={item.name}></img>
        </div>
    })
    return imgItem;
}

export default Slider