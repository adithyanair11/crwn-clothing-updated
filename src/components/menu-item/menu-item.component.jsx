import React from "react";
import './menu-item.styles.css';


export const MenuItem = ({title,imageUrl,size}) => {
    return(
        <div className={`${size} menu-item`}>
        <div 
        style={{backgroundImage: `url(${imageUrl})`}}
        className="background-image">
        </div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='sub-title'>
                    SHOP NOW
                    </span>
            </div>
        </div>
    )
}