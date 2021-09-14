import React from 'react'
import data from '../data/data.json'

import { NavLink } from 'react-router-dom'

export default function products(props) {
    const productList = data.products
    console.log(productList);
    console.log(props);

    
    const handleChange = (e) => {
       // setQty(e.target.value)
        
    }

    const handleClick = (e) => {
        alert('h')
    }
    const handleAdd = (e) => {

        console.log('add');
    }
    const handleRemove = (e) => {
        console.log('empty');

    }
    
    return (
        <>

            <div className="flex flex-wrap sm:flex-1 md:w-auto overflow-auto border border-black m-1 pl-6 lg:pl-28 gap-8">

                {productList.map(item => (

                    <div className="md:w-1/4 w-auto text-gray-600  md:m-4 mt-1 justify-self-auto mb-1 border border-black">

                        <div className="flex ">
                      
                            <div className="border border-black">
                                
                           
                            <img className="w-40 h-40 " crossOrigin="anonymous"
                 src={`${item.image_url}`} alt={item.name}/>           
                                           {console.log(typeof `${item.image_url}`)}
                            
                                <p className="text-base font-serif pb-4  w-auto h-auto mt-1 ">{item.description}</p>

                                <div className='flex  mt-2 ml-4 w-44 border border-black'>

                                    <section className="  mt-0.5 w-20 ml-1 mb-1">
                                   
                                     

                                    <NavLink to={{ pathname: `/${item.name}` }} >
                                    <button className="bg-green-400 rounded p-2 px-4 text-white">Details</button>
                                </NavLink>
                                    </section>


                                    <section className="  border-l-2 border border-gray-300 mt-0.5  w-20 ml-1 mb-1">
                                      

                                  

                                        <button className="text-xs w-full text-gray-200  
             bg-gray-600 p-1 block ml-0 mt-4" onClick={handleAdd}>Add to cart</button>
                                    </section>
                                </div>

                            </div>

                        </div>

                    </div>

                ))}
            </div>
        </>    )
}
