import React from "react";
import { CardImg } from "../imagesURL/Images";
import Slider from '@mui/material/Slider';


function valuetext(value) {
    return `${value}°C`;
}


const SideBar = () => {

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
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

                <div className="card">
                    <h3>Fill By Price</h3>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                </div>
            </div>
        </>
    )
}

export default SideBar;