import React, {useState} from 'react'
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../components/collection-preview/CollectionPreview.js'


function ShopPage(){
    
    const [collections, setCollections] = useState(SHOP_DATA)
    
    const collectionMap = collections.map(({id, title, items}) => (
        <CollectionPreview key={id} title={title} items={items}/>   
    ))
    
    return (
        <div className="shop-page">
            {collectionMap}
        </div>
    )

}


export default ShopPage;