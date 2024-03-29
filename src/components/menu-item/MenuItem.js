import React from 'react'; 
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss';

const MenuItem = ({title, image, size, history, match, link }) => {

    return (
        <div 
        className={`menu-item ${size}`}
        onClick={() => history.push(`${match.url}${link}`)}
        >
            <img src={image} />
            <div className='content'>
                <h1 className='title'> {title} </h1>
                <span className='subtitle'> Shop Now </span>
            </div>
        </div>
    )
}


export default withRouter(MenuItem);