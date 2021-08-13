import React, {useState} from 'react';
import MenuItem from '../menu-item/MenuItem.js'
import './directory.styles.scss';

function Directory() {
    const categories = [
        {
            title: 'Hats',
            imageUrl: 'https://cdn11.bigcommerce.com/s-1nrqf/images/stencil/500x659/products/257/377853/New-York-Yankees-On-Field-59FIFTY-Fitted-Hat__01157.1623166068.jpg?c=2',
            id: 1,
            linkUrl: 'hats'
        }, 
        {
            title: 'Jackets',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0094/2252/products/kh1349-005-0217_1296x.jpg?v=1624582878',
            id: 2,
            linkUrl: 'jackets'
        },
        {
            title: 'Sneakers',
            imageUrl: 'https://i.ytimg.com/vi/1qQSf_lEd-E/maxresdefault.jpg',
            id: 3,
            linkUrl: 'sneakers'
        },
        {
            title: "Men's",
            imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/streetwear-brands-1627934788.jpg',
            id: 5,
            linkUrl: 'mens'
        },
        {
            title: "Women's",
            imageUrl: 'https://image-cdn.hypb.st/https%3A%2F%2Fbae.hypebeast.com%2Ffiles%2F2018%2F03%2Fwomen-run-streetwear-brands-frankie-collective-misbhv-4.jpg?w=1600&cbr=1&q=90&fit=max',
            size: 'large',
            id: 4,
            linkUrl: 'womens'
        }
        
    ]

    const [sections, setSections] = useState(categories)

    const displaySections = sections.map(({title, imageUrl, id, size, linkUrl}) => {
        return <MenuItem key={id} title={title} image={imageUrl} size={size} link={linkUrl} />
    })


    return (
        <div className='directory-menu'>
            { displaySections }
        </div>
    );
}

export default Directory;