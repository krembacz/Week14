import React, { useState } from 'react';
import '../components/StarStyle.css';

function Star({ blue }) {
    return (
        <svg className={blue ? 'blueStar' : ''} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" /></svg>
    );
}

function StarRating() {
    const [hoverIndex, setHoverIndex] = useState(0);
    const [rating, setRating] = useState(0); 

    return (
        <div>
            <ul>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => {
                    return (
                        <li onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(0)}
                            onClick = {() => setRating(index)}
                            className="starList">
                            <Star blue={(index <= hoverIndex) || (index <= rating)} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default StarRating; 