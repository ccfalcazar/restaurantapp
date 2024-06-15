import React, { useEffect, useState } from 'react'
import { app } from './../firebase-config'
import { getDatabase, push, ref, set} from 'firebase/database';

const SideBar = () => {

    const [Count, setCount] = useState(1);
    const [Category, setCategory] = useState('');
    const [Name, setName] = useState('');
    const [Variations, setVariations] = useState({} as any);
    const [Cost, setCost] = useState({} as any);
    const [Price, setPrice] = useState({} as any);
    const [Stocks, setStock] = useState({} as any);

    function HandlesCategoryOnChange(e:any)
    {
        setCategory(e.target.value);
    }

    function HandlesNameOnChange(e:any)
    {
        setName(e.target.value);
    }

    function HandlesVariationOnChange(e:any)
    {
        const temp = {} as any;
        temp[e.target.id] = e.target.value;
        setVariations({...Variations, ...temp});
    }
    function HandlesCostOnChange(e:any)
    {
        const temp = {} as any;
        temp[e.target.id] = e.target.value;
        setCost({...Cost, ...temp});
    }
    function HandlesPriceOnChange(e:any)
    {
        const temp = {} as any;
        temp[e.target.id] = e.target.value;
        setPrice({...Price, ...temp});
    }
    function HandlesStockOnChange(e:any)
    {
        const temp = {} as any;
        temp[e.target.id] = e.target.value;
        setStock({...Stocks, ...temp});
    }

    function AddVariation(){
        setCount(Count + 1);
    }

    function RemoveDiv(e:any)
    {
        Count -1;
        let temp = {} as any;
        const InputID = 'name'+e.target.id;
        temp[InputID] = undefined;
        setVariations({...Variations, ...temp});
        const VariationElement = document.getElementById('div'+e.target.id);
        VariationElement?.remove();
    }

    const HandlesOnSubmit = async() =>
    {
        const db = getDatabase(app);
        const path = 'menuitems/'+Category+'/'+Name+'/';
        for(let index=0;index < Variations.Count; index++)
            {
                alert(Variations);
            }
        //push(ref(db,path),{
            //name: Name
        //});
    }

  return (
    <>
    <label htmlFor='add-item-drawer' className='drawer-overlay'></label>
    <div className="menu p-4 w-80 min-h-full bg-base-300 text-base-content">
        <p className='font-bold text-lg text-center'>Food Information</p>
        <label className='form-control pe-4'>
            <div className='label'>
                <span className="label-text text-sm">Category</span>
            </div>
            <input type='Text' className='input input-sm input-bordered' placeholder='Type Here' onChange={HandlesCategoryOnChange}/>
            <div className='label'>
                <span className="label-text text-sm">Name</span>
            </div>
            <input type='Text' className='input input-sm input-bordered' placeholder='Type Here' onChange={HandlesNameOnChange}/>
            <div className='flex mt-5'>
                 <label className='my-auto me-1'>Variations</label>
                 <button className='btn btn-sm border-0 btn-outline btn-success' onClick={AddVariation}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"></path></svg>
                 </button>
            </div>
            <div className=''>
                    {
                        Array.from(Array(Count)).map((arr,index)=>{
                            return (
                                        <div key={"div"+index} id={'div'+index} className='border-2 border-dashed border-base-100 p-3 my-2'>
                                            <input key={"name"+index} id={'name'+index} className='input input-sm input-bordered w-full my-2' placeholder='Name' onChange={HandlesVariationOnChange}/>
                                            <input key={'cost'+index} id={'cost'+index} type='number' className='input input-sm input-bordered w-full my-2' placeholder='Cost' onChange={HandlesCostOnChange}/>
                                            <input key={'price'+index} id={'price'+index} type='numer' className='input input-sm input-bordered w-full my-2' placeholder='Price' onChange={HandlesPriceOnChange}/>
                                            <input key={'stock'+index} id={'stock'+index} type='numer' className='input input-sm input-bordered w-full my-2' placeholder='Stocks' onChange={HandlesStockOnChange} />
                                        <button key={"btn"+index} id={index.toString()} className='btn btn-outline btn-error btn-sm mt-3 size-full' onClick={RemoveDiv}>Remove</button>
                                        </div>
                            )
                        })                    
                    }
                 </div>

        </label>
        <button className='btn btn-primary mt-5 me-4 btn-sm' onClick={HandlesOnSubmit}>Submit</button>
    </div>
    </>
  )
}

export default SideBar