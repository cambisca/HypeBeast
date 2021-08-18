import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/CollectionItem.js'

const CollectionPreview = ({ title, items }) => {

    const collectionItems = items.filter((item, index) => index < 4).map((item) => {
        return <CollectionItem key={item.id} name={item.name} image={item.imageUrl} price={item.price}/>
    })

    return (
        <div className='collection-preview'>
            <h1 className='title'> {title} </h1>
            <div className='preview'>
                {collectionItems}
            </div>
        </div>
    )
}

export default CollectionPreview;