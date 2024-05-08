import React from "react";
import { containerIMG } from "../images/logoImg";

const Container =()=>{
    return(
        <>
        <div className='main-container'>
             <div className='conatiner'>
          <img src={containerIMG} alt='conatainer-img' />

          <div className='para'>
            <p>Express Yourself </p>
            <p>With </p>
            <p>Expectional Art </p>
            <p>Pieces</p>
          </div>
              </div>
      </div>
        </>
    )
}
export default Container