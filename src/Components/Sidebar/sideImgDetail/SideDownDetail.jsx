import React from "react";
import { SideBarImage } from "../../imagesURL/Images";


const SideImgDetail = () => {
    return (
        <>

            <div className="sidedownImg">
                <img src={SideBarImage} alt="image" />

                <div className="DownImg-text">
                    <span>Organic</span>
                    <h3>Save 17% <br />on <strong className="strong-text">Organic</strong> <br /> Juice</h3>
                </div>
                
            </div>
        </>
    )
}
export default SideImgDetail;