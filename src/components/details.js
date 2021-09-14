import React from 'react'
import data from '../data/data.json'

import { NavLink } from 'react-router-dom'




export default function Details(props) {

 
    const products = data.products
    console.log(products);
    const name = props.match.params.name
    console.log(props);

   


    return (
        <div>
            

            {products.map((item) =>

<ul className="flex gap-6 m-2 p-2 rounded border border-gray-400 text-gray-700 mx-10 px-4 pt-4 mt-4 text-sm">
<li className="w-28 border border-yellow">
        
        <img src={item.image_url} className="w-12 rounded-full " />
    </li>

    <li className=" border border-yellow w-40">
        name:<br></br> {item.name}

    </li>
    <li className=" border border-yellow w-40">
        description: <br></br>{item.description}
    </li>
    <li className="w-72 border border-yellow ">
        quantity: <br></br>
        <p className="text-blue-400">{item.available_quantity}</p>
    </li>
</ul>

       
            )}
        </div>
    )
}