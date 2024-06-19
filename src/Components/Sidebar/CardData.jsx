import React from "react";
import { CardImg, CardImg2, CardImg3, CardImg4, CardImg5 } from "../imagesURL/Images";

const CardData = () => {
    return (
        <>
            <div className="card-data">
                <div className="card-item">
                    <span className="card-img">
                        <img src={CardImg} alt="cardicoimage" width={30} />  </span>
                    <h4 className="card-h4">Milks and Dairies</h4>
                    <span className="card-quan">30</span>
                </div>

                <div className="card-item">
                    <span className="card-img">
                        <img src={CardImg2} alt="cardicoimage" width={30} />  </span>
                    <h4 className="card-h4">Clothing</h4>
                    <span className="card-quan">32</span>
                </div>

                <div className="card-item">
                    <span className="card-img">
                        <img src={CardImg3} alt="cardicoimage" width={30} />  </span>
                    <h4 className="card-h4">Pet Foods</h4>
                    <span className="card-quan">23</span>
                </div>

                <div className="card-item">
                    <span className="card-img">
                        <img src={CardImg4} alt="cardicoimage" width={30} />  </span>
                    <h4 className="card-h4">Baking Material</h4>
                    <span className="card-quan">45</span>
                </div>

                <div className="card-item">
                    <span className="card-img">
                        <img src={CardImg5} alt="cardicoimage" width={30} />  </span>
                    <h4 className="card-h4">Fresh Fruit</h4>
                    <span className="card-quan" >3</span>
                </div>
            </div>
        </>
    )
}
export default CardData;