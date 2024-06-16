import React from 'react'

interface Props {
    index: number,
    Name: string,
    Cost: number,
    Price: number,
    Stocks: number,
    HandlesVariationOnChange: (event: any)=>void,
    HandlesCostOnChange: (event: any)=>void,
    HandlesPriceOnChange: (event: any)=>void,
    HandlesStockOnChange: (event: any)=>void,
    RemoveDiv: (event: any)=>void
}

const Variation = ({index,Name,Cost,Price,Stocks,HandlesVariationOnChange,HandlesCostOnChange,HandlesPriceOnChange,HandlesStockOnChange,RemoveDiv}:Props) => {
  return (
    <div id={'div'+index} className='border-2 border-dashed border-base-100 p-3 my-2'>
      <label className='input input-sm input-bordered w-full gap-2 flex my-2'>
        Name:
        <input id={'name-'+index} type='text' className='grow' value={Name} placeholder='Default' onChange={HandlesVariationOnChange}/>
      </label>
      <label className='input input-sm input-bordered w-full gap-2 flex my-2'>
        Cost:
        <input id={'cost-'+index} type='number' className='grow' value={Cost} placeholder='0.00' onChange={HandlesCostOnChange}/>
      </label>
      <label className='input input-sm input-bordered w-full gap-2 flex my-2'>
        Price:
        <input id={'price-'+index} type='number' className='grow' value={Price} placeholder='0.00' onChange={HandlesPriceOnChange}/>
      </label>
      <label className='input input-sm input-bordered w-full gap-2 flex my-2'>
        Stocks:
        <input id={'stock-'+index} type='number' className='grow' value={Stocks} placeholder='0' onChange={HandlesStockOnChange}/>
      </label>
    <button id={index.toString()} className='btn btn-outline btn-error btn-sm mt-1 size-full' onClick={RemoveDiv}>Remove</button>
    </div>
    )
  
}

export default Variation
