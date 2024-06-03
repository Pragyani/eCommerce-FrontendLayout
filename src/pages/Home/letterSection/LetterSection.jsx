import React from "react";
import { LetterImg } from "../../../Components/imagesURL/Images";

const LetterSection = () => {
    return (
        <>
            <section className="LetterSection">
                <div className="container-fluid">
                    <div className="box">
                        <div className="info">
                            <h2>Stay home & get your daily <br /> needs from our shop</h2>
                            <p>Start your daily Shopping with Nest Mart</p>
                        </div>
                        <div className="img">
                            <img src={LetterImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default LetterSection;