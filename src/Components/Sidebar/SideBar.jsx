import React from "react";
import { CardImg } from "../imagesURL/Images";

const SideBar = () => {
    return (
        <>
            <div className="slideBar">
                <div className="card">
                    <h3>Category</h3>

                    <div className="card-data">
                        <div className="card-item">
                            <span className="card-img">
                                <img src={CardImg} alt="cardicoimage" width={30} />  </span>
                            <h4 className="card-h4">Milks and Dairies</h4>
                            <span className="card-quan">30</span>
                        </div>

                        <div className="card-item">
                            <span className="card-img">
                                <img src={CardImg} alt="cardicoimage" width={30} />  </span>
                            <h4 className="card-h4">Clothing</h4>
                            <span className="card-quan">32</span>
                        </div>

                        <div className="card-item">
                            <span className="card-img">
                                <img src={CardImg} alt="cardicoimage" width={30} />  </span>
                            <h4 className="card-h4">Pet Foods</h4>
                            <span className="card-quan">23</span>
                        </div>

                        <div className="card-item">
                            <span className="card-img">
                                <img src={CardImg} alt="cardicoimage" width={30} />  </span>
                            <h4 className="card-h4">Baking Material</h4>
                            <span className="card-quan">45</span>
                        </div>

                        <div className="card-item">
                            <span className="card-img">
                                <img src={CardImg} alt="cardicoimage" width={30} />  </span>
                            <h4 className="card-h4">Fresh Fruit</h4>
                            <span className="card-quan" >3</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar;