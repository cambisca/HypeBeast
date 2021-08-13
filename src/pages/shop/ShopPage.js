import React, {useState} from 'react'
import SHOP_DATA from './shop.data.js'


function ShopPage(){
    
    const [collections, setCollections] = useState(SHOP_DATA)
    console.log(collections)
    
    return (
        <div>
            Shop Page
        </div>
    )

}


export default ShopPage;