import React from "react";
import './notfound.css';
import { Page404 } from "../../Components/imagesURL/Images";

const NotFound = () => {
    return (
        <>
            <section className="notfound">
                <div className="container-fluid">
                    <div className="box">
                        <img src={Page404} alt="404Page" />
                        <br /><br />
                        <h1>Page Not Found</h1>
                    </div>
                </div>
            </section>
        </>
    )
}
export default NotFound;