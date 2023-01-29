import './ReviewStyle.css';
import React, { useState } from 'react';
import StarRating from './Stars';



function Reviews () {
    const [ review, setReview ] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        alert(`The review you entered was: ${review}`)
    }
    
    return (
        <div className="reviewApp">
            <div className="header">
                <h5>  Review </h5>
                <StarRating className="displayStar" />
            </div>

            <br></br>
            <form onSubmit = { handleSubmit }>
            <textarea
                className="form-control"
                value= { review }
                onChange={(e) => setReview(e.target.value)}
                rows="3"
            />
            <button className="form-control btn btn-warning" id="submit">
                SUBMIT
            </button>
            </form>
            <div className="err"></div>
        </div>
    );
}

export default Reviews;