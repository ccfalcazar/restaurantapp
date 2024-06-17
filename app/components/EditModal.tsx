import React, { useState } from 'react'
import { app } from './../firebase-config'
import { getDatabase, ref, set} from 'firebase/database';

interface Props{
    Category: string,
    Name: string,
    Variant: string,
    Cost: string,
    Price: string,
    Stock: string,
    onChangeCost: (event:any)=>void,
    onChangePrice: (event:any)=>void,
    onChangeStock: (event:any)=>void
}

const EditModal = ({Category,Name,Variant,Cost,Price,Stock,onChangeCost,onChangePrice,onChangeStock}:Props) => {
    const CSS = 'input input-sm input-bordered';
    function WriteData()
    {
        const db = getDatabase(app);
        const path = 'menuitems/'+Category+'/'+Name+'/';
        set(ref(db,path+Variant),{
            cost: Cost,
            price: Price,
            stocks: Stock
        });
    }
  return (
    <div>
        <input type="checkbox" id="Edit_Modal" className="modal-toggle" />
        <div className="modal" role="dialog">
        <div className="modal-box">
            <div className="menu p-4 min-h-full w-full bg-base-300 text-base-content">
            <p className='font-bold text-lg text-center'>Food Information</p>
            <label className='form-control pe-4'>
                <div className='label'>
                    <span className="label-text text-sm">Category</span>
                </div>
                <input type='Text' className={CSS} disabled value={Category} placeholder='Type Here'/>
                <div className='label'>
                    <span className="label-text text-sm">Name</span>
                </div>
                <input type='Text' className={CSS} disabled value={Name} placeholder='Type Here' />
                <div className='label'>
                    <span className="label-text text-sm">Variation</span>
                </div>
                <input type='Text' className={CSS} disabled value={Variant} placeholder='Type Here'/>
                <div className='label'>
                    <span className="label-text text-sm">Cost</span>
                </div>
                <input type='Text' className={CSS} value={Cost} placeholder='Type Here' onChange={onChangeCost}/>
                <div className='label'>
                    <span className="label-text text-sm">Price</span>
                </div>
                <input type='Text' className={CSS} value={Price} placeholder='Type Here' onChange={onChangePrice}/>
                <div className='label'>
                    <span className="label-text text-sm">Stock</span>
                </div>
                <input type='Text' className={CSS} value={Stock} placeholder='Type Here' onChange={onChangeStock}/>
            </label>
            </div>
            <div className="modal-action">
            <label htmlFor="Edit_Modal" className="btn btn-primary" onClick={WriteData}>Submit</label>
            <label htmlFor="Edit_Modal" className="btn">Cancel</label>
            </div>
        </div>
        </div>
    </div>
  )
}

export default EditModal