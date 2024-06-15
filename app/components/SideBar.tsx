import React, { useEffect, useState } from 'react'
import { app } from './../firebase-config'
import { getDatabase, push, ref, set} from 'firebase/database';
import Variation from './Variation';

const SideBar = () => {

    const [Count, setCount] = useState(1);
    const [Category, setCategory] = useState('');
    const [Name, setName] = useState('');
    const [ListVariation, setVariations] = useState(['default']);
    const [ListCost, setCost] = useState([0]);
    const [ListPrice, setPrice] = useState([0]);
    const [ListStocks, setStock] = useState([0]);

    function HandlesCategoryOnChange(e:any)
    {
        setCategory(e.target.value);
    }

    function HandlesNameOnChange(e:any)
    {
        setName(e.target.value);
    }

    function OnChangeVariation(e:any)
    {
        setVariations([ListVariation[Count], e.target.value]);
    }
    function OnChangeCost(e:any)
    {
        setCost([ListCost[Count], e.target.value]);
    }
    function OnChangePrice(e:any)
    {
        const temp = {} as any;
        temp[e.target.id] = e.target.value;
        setPrice([ListPrice[Count], e.target.value]);
    }
    function OnChangeStock(e:any)
    {
        const temp = {} as any;
        temp[e.target.id] = e.target.value;
        setStock([ListStocks[Count], e.target.value]);
    }

    function AddVariation(){
        setCount(Count + 1);
    }

    function RemoveDiv(e:any)
    {
        Count -1;
        const id = e.target.id;
        let Element = document.getElementById('div'+e.target.id);
        Element?.remove();
        Element = document.getElementById('name'+id);
        Element?.remove();
        Element = document.getElementById('cost'+id);
        Element?.remove();
        Element = document.getElementById('price'+id);
        Element?.remove();
        Element = document.getElementById('stock'+id);
        Element?.remove();
        Element = document.getElementById(id);
        Element?.remove();
        
    }

    const HandlesOnSubmit = async() =>
    {
        alert(ListVariation[0]);
        //const db = getDatabase(app);
        //const path = 'menuitems/'+Category+'/'+Name+'/';
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
                            <Variation key={index} index={index} HandlesVariationOnChange={OnChangeVariation} HandlesCostOnChange={OnChangeCost} HandlesPriceOnChange={OnChangePrice} HandlesStockOnChange={OnChangeStock} RemoveDiv={RemoveDiv} />
                            )})                    
                    }
                 </div>

        </label>
        <button className='btn btn-primary mt-5 me-4 btn-sm' onClick={HandlesOnSubmit}>Submit</button>
    </div>
    </>
  )
}

export default SideBar