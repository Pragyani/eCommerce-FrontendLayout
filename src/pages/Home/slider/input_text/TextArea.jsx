import React from "react";
import Button from '@mui/material/Button';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const TextArea = () => {
    return (
        <>

            <div className="newInputextarea">
                <input type="text" placeholder="Your email id/address .." />
                <Button className="sub-btn">Subscribe <ThumbUpOffAltIcon className="right-icon" /></Button>
            </div>

        </>
    )
}
export default TextArea;