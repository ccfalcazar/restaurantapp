import React, { useState } from 'react'
import Variation from './Variation';

interface Props{
    Category: string,
    Name: string,
    Variant: string
}

const EditModal = ({Category,Name,Variant}:Props) => {
    const CSS = 'input input-sm input-bordered';
    const [Cat, setCategory] = useState(Category);
    const [Nam, setName] = useState(Name);
    const [Var, setVariant] = useState(Variant);
    const [Cost, setCost] = useState(0);
    const [Price, setPrice] = useState(0);
    const [Stock, setStock] = useState(0);

    function OnChangeCost(e:any)
    {
        setCost(e.target.value);
    }

    function OnChangePrice(e:any)
    {
        setPrice(e.target.value);
    }

    function OnChangeStock(e:any)
    {
        setStock(e.target.value);
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
                <input type='Text' className={CSS} value={Cost} placeholder='Type Here' onChange={OnChangeCost}/>
                <div className='label'>
                    <span className="label-text text-sm">Price</span>
                </div>
                <input type='Text' className={CSS} value={Price} placeholder='Type Here' onChange={OnChangePrice}/>
                <div className='label'>
                    <span className="label-text text-sm">Stock</span>
                </div>
                <input type='Text' className={CSS} value={Cost} placeholder='Type Here' onChange={OnChangeStock}/>
            </label>
            </div>
            <div className="modal-action">
            <label htmlFor="Edit_Modal" className="btn btn-primary" onClick={(e:any)=>{console.log(e.target.id)}}>Submit</label>
            <label htmlFor="Edit_Modal" className="btn" onClick={()=>{console.log('hello')}}>Cancel</label>
            </div>
        </div>
        </div>
    </div>
  )
}

export default EditModal