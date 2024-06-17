import React, { useEffect, useState } from 'react'
import { app } from './../firebase-config'
import { getDatabase, ref, set} from 'firebase/database';
import Variation from './Variation';

const SideBar = () => {

    const Options = {
        id: 0,
        name: 'Default',
        cost: 0,
        price: 0,
        stock: 0
    }
    const [ListOptions, setOptions] = useState([Options]);
    const [Category, setCategory] = useState('');
    const [Name, setName] = useState('');
    const [CategoryCSS, setCategoryCSS] = useState('input input-sm input-bordered');
    const [NameCSS, setNameCSS] = useState('input input-sm input-bordered');

    function AddOptions()
    {    
        const temp = {
            id: 0,
            name: 'Default',
            cost: 0,
            price: 0,
            stock: 0
        }
        setOptions([...ListOptions,temp]);
    }

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
        let [ElementName, ElementId] = e.target.id.split('-');
        setOptions(ListOptions.map(option =>{
            if (option.id == ElementId){
                return {...option, name: e.target.value}
            }
            else {
                return option
            }
        }))
    }
    function OnChangeCost(e:any)
    {
        let [ElementName, ElementId] = e.target.id.split('-');
        setOptions(ListOptions.map(option =>{
            if (option.id == ElementId){
                return {...option, cost: e.target.value}
            }
            else {
                return option
            }
        }))
    }
    function OnChangePrice(e:any)
    {
        let [ElementName, ElementId] = e.target.id.split('-');
        setOptions(ListOptions.map(option =>{
            if (option.id == ElementId){
                return {...option, price: e.target.value}
            }
            else {
                return option
            }
        }))
    }
    function OnChangeStock(e:any)
    {
        let [ElementName, ElementId] = e.target.id.split('-');
        setOptions(ListOptions.map(option =>{
            if (option.id == ElementId){
                return {...option, stock: e.target.value}
            }
            else {
                return option
            }
        }))
    }

    function RemoveDiv(e:any)
    {
        const Variants = ListOptions.filter(Opt => Opt.id != e.target.id);
        setOptions(Variants);   
    }

    const HandlesOnSubmit = async() =>
    {
        function isInputNull()
        {
            const InitializeCSS = 'input input-sm input-bordered';
            const ErrorCSS = 'input input-sm input-bordered input-error';
            setCategoryCSS(Category==''?ErrorCSS:InitializeCSS);
            setNameCSS(Name==''?ErrorCSS:InitializeCSS);
            return (Category != '' && Name !=''?true:false)
        }

        if(isInputNull())
        {
            const db = getDatabase(app);
            const path = 'menuitems/'+Category+'/'+Name+'/';
            ListOptions.map((option)=>{
                set(ref(db,path+option.name),{
                    cost: option.cost,
                    price: option.price,
                    stocks: option.stock
                });
            });
            ClearFields();
        }
    }

    function ClearFields()
    {
        setCategory('');
        setName('');
        let Variants = ListOptions.filter(Opt => Opt.id == 0);
        Variants[0].name = 'Default';
        Variants[0].cost = 0;
        Variants[0].price = 0;
        Variants[0].stock = 0;
        setOptions(Variants); 
    }

  return (
    <>
    <label htmlFor='add-item-drawer' className='drawer-overlay'></label>
    <div className="menu p-4 min-h-full w-fit bg-base-300 text-base-content">
        <p className='font-bold text-lg text-center'>Food Information</p>
        <label className='form-control pe-4'>
            <div className='label'>
                <span className="label-text text-sm">Category</span>
            </div>
            <input type='Text' className={CategoryCSS} value={Category} placeholder='Type Here' onChange={HandlesCategoryOnChange}/>
            <div className='label'>
                <span className="label-text text-sm">Name</span>
            </div>
            <input type='Text' className={NameCSS} value={Name} placeholder='Type Here' onChange={HandlesNameOnChange}/>
            <div className='flex mt-5'>
                 <label className='my-auto me-1'>Variations</label>
                 <button className='btn btn-sm border-0 btn-outline btn-success' onClick={AddOptions}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"></path></svg>
                 </button>
            </div>
            <div className=''>
                    {
                        ListOptions.map((options,index)=>{
                            options.id = index;
                            return (
                                <Variation key={index} Name={options.name} Cost={options.cost} Price={options.price} Stocks={options.stock} index={index} HandlesVariationOnChange={OnChangeVariation} HandlesCostOnChange={OnChangeCost} HandlesPriceOnChange={OnChangePrice} HandlesStockOnChange={OnChangeStock} RemoveDiv={RemoveDiv} />
                            )})                 
                    }
                 </div>

        </label>
        <button className='btn btn-primary me-4 btn-sm' onClick={HandlesOnSubmit}>Submit</button>
    </div>
    </>
  )
}

export default SideBar