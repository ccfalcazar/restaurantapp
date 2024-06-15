import React from 'react'

interface Props {
    index: number,
    HandlesVariationOnChange: (event: any)=>void,
    HandlesCostOnChange: (event: any)=>void,
    HandlesPriceOnChange: (event: any)=>void,
    HandlesStockOnChange: (event: any)=>void,
    RemoveDiv: (event: any)=>void
}

const Variation = ({index,HandlesVariationOnChange,HandlesCostOnChange,HandlesPriceOnChange,HandlesStockOnChange,RemoveDiv}:Props) => {
  return (
    <div id={'div'+index} className='border-2 border-dashed border-base-100 p-3 my-2'>
    <input id={'name'+index} className='input input-sm input-bordered w-full my-2' placeholder='Name' onChange={HandlesVariationOnChange}/>
    <input id={'cost'+index} type='number' className='input input-sm input-bordered w-full my-2' placeholder='Cost' onChange={HandlesCostOnChange}/>
    <input id={'price'+index} type='number' className='input input-sm input-bordered w-full my-2' placeholder='Price' onChange={HandlesPriceOnChange}/>
    <input id={'stock'+index} type='number' className='input input-sm input-bordered w-full my-2' placeholder='Stocks' onChange={HandlesStockOnChange} />
    <button id={index.toString()} className='btn btn-outline btn-error btn-sm mt-3 size-full' onClick={RemoveDiv}>Remove</button>
    </div>
    )
  
}

export default Variation
