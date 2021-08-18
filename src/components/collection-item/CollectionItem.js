import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({id, name, price, image}) => {
    
    return (
        <div className="collection-item">
            <img src={image} />

            <div class="collection-footer">
                <span className="name"> {name} </span>
                <span className="price"> {price} </span>
            </div>
        </div>
    )}

export default CollectionItem;