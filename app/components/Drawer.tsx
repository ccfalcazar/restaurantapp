'use client';

import React, { useState } from 'react'
import ContentTable from './ContentTable';
import SideBar from './SideBar';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

const Drawer = () => {

  const [Refresh, setRefresh] = useState(0);
  const [Category, setCategory] = useState('');
  const [Name, setName] = useState('');
  const [Variant, setVariant] = useState('');
  const [Cost, setCost] = useState('');
  const [Price, setPrice] = useState('');
  const [Stock, setStock] = useState('');

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
  function ToggleRefresh()
  {
    setRefresh(Refresh==1?0:1);
  }
  function EditData(e:any)
  {
     const [Button, Category, Name, Variant,Cost,Price,Stock] = e.target.id.split('-');
     setCategory(Category);
     setName(Name);
     setVariant(Variant);
     setCost(Cost);
     setPrice(Price);
     setStock(Stock);
  }
 
  function DeleteData(e:any)
  {
     const [Button, Category, Name,Variant] = e.target.id.split('-');
     setCategory(Category);
     setName(Name);
     setVariant(Variant);
  }

  return (
    <div className='drawer drawer-end'>
        <input id="add-item-drawer" type="checkbox" className="drawer-toggle" />
        <div className='drawer-content'>
        <div className='py-2 px-3 flex'>
        <button className='btn btn-outline btn-base-content btn-sm size-fit me-2' onClick={ToggleRefresh}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20"></path></svg></button>
            <div className='w-fit'>
              <label className="input input-sm input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <button className='btn-xs' onClick={()=>alert('I am Clicked')} >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd"/></svg>
                </button>
              </label>
            </div>
            <div className='ms-auto'>
                <label htmlFor='add-item-drawer' className='btn btn-sm btn-outline drawer-button'>Add Item</label>
            </div>
          </div>
            <DeleteModal Category={Category} Name={Name} Variant={Variant} />
            <EditModal Category={Category} Name={Name} Variant={Variant} Cost={Cost} Price={Price} Stock={Stock} onChangeCost={OnChangeCost} onChangePrice={OnChangePrice} onChangeStock={OnChangeStock}/>
            <ContentTable onEditClick={EditData} onDeleteClick={DeleteData} Refresh={Refresh}/>
        </div>
        <div className='drawer-side'>
            <SideBar/>
        </div>
    </div>
  )
}

export default Drawer