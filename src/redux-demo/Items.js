import React from 'react'
import Item from './Item'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Items = () => {
    const itemsdata = useSelector(store => store.items)// used to select reducer
    const [itemsList,setItemList] =useState( itemsdata.items)
    const[search,setSearch]=useState('')

    const filterItems=()=>{
    const allData=itemsdata.items
    const filterData=allData.filter(item=>item.itemName.toLowerCase().includes(search.toLowerCase()))
    setItemList(filterData)
}

    return (
        <>
            <form className="d-flex col-md-8 mt-3 mx-auto bg-secondary p-3">
                <input className="form-control me-2" type="search" placeholder="Search Item from Here" aria-label="Search" 
                onChange={(e)=>{setSearch(e.target.value)}}
                onKeyUp={filterItems}/>
                
            </form>
            <div className="container mt-3 mb-3">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {itemsList.map((item, i) => (
                        <Item key={i} data={item} />
                        //key used for unique key
                    ))}
                </div>
            </div>
        </>
    )
}

export default Items
