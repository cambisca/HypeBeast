import React from 'react'; 
import './menu-item.styles.scss';

const MenuItem = ({title, image, size}) => (

    
    <div 
        className={`menu-item ${size}`}
        style={{backgroundImage: `url(${image}`, objectFit:'cover' }}
    >
        <div className='content'>
            <h1 className='title'> {title} </h1>
            <span className='subtitle'> Shop Now </span>
        </div>
    </div>
)

export default MenuItem;