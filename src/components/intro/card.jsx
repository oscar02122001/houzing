import React from "react";
import './card.css'

class Card extends React.Component{
    render(){
       const data = this.props
    
        return(
            <div className="cards-wrap">
                <div className="img">
                    <img className="card-img" src={data.imgUrl} alt="Photo" />
                </div>
                <div className="text-wrap">
                    <div className="card-title-warp">
                        <h3 className="card-title">{data.title}</h3>
                    </div>
                    <div className="card-disc-warp">
                        <h4 className="card-disc">{data.location}</h4>
                    </div>
                    <hr />
                    <div className="card-price-wrap">
                        <h4 className="old-price">$2,800/mo</h4>
                        <h4 className="card-price">{data.price}</h4>
                    </div>
                </div>
             </div>
        )
    }
}

export default Card