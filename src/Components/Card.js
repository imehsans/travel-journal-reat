import React from "react"

export default function Card(props){
    return (
        <div className="card">
            <div className="card--div1"> 
                <img className="card--img" style={{display: props.item.imageUrl ? "block": "none"} } src={props.item.imageUrl} alt="" />

            </div>
            <div className="card--div2"> 
                <div >
                    <img className="card--icon"  src={ require("../images/loc.png") } alt="" />
                    {props.item.location && <span>{props.item.location}</span>}
                    {props.item.googleMapUrl && <span><a className="card--a" href={props.item.googleMapUrl}>View on Google Maps</a></span>}
                    
                </div>
                <h1>{props.item.title}</h1>
                <div>
                    <span id="sdate">{props.item.startDate}</span>
                    <span id="edate">{props.item.endDate}</span>
                </div>
                <p className="card--p">{props.item.description}</p>
            </div>
            
            
        </div>
    )
}