import React, { useEffect, useState } from 'react'

const SideBar = () => {
    const [Count, setCount] = useState(0);

    function AddVariation(){
        setCount(Count + 1);
    }

    function RemoveDiv(e:any)
    {
        Count -1;
        const divElement = document.getElementById('div'+e.target.id);
        divElement?.remove();
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
            <input type='Text' className='input input-sm input-bordered' placeholder='Type Here' />
            <div className='label'>
                <span className="label-text text-sm">Name</span>
            </div>
            <input type='Text' className='input input-sm input-bordered' placeholder='Type Here' />
            <div className='flex mt-5'>
                 <label className='my-auto me-1'>Variations</label>
                 <button className='btn btn-sm border-0 btn-outline btn-success' onClick={AddVariation}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"></path></svg>
                 </button>
            </div>
            <div className=''>
                    {
                        Array.from(Array(Count)).map((key,index)=>{
                            return (
                                        <div id={'div'+index} key={"div"+index} className='flex'>
                                            <input key={"input"+index} className='input input-sm input-bordered mt-1'/>
                                            <button id={index.toString()} key={"btn"+index} className='btn btn-outline border-0 btn-circle btn-error btn-sm my-auto text-md' onClick={RemoveDiv}>X</button>
                                        </div>
                            )
                        })                    
                    }
                 </div>
            <div className='label'>
                <span className="label-text text-sm">Cost</span>
            </div>
            <input type='Text' className='input input-sm input-bordered' placeholder='Type Here' />
            <div className='label'>
                <span className="label-text text-sm">Price</span>
            </div>
            <input type='Text' className='input input-sm input-bordered' placeholder='Type Here' />
            <div className='label'>
                <span className="label-text text-sm">Stocks</span>
            </div>
            <input type='Text' className='input input-sm input-bordered' placeholder='Type Here' />
        </label>
        <button className='btn btn-primary mt-5 me-4 btn-sm'>Submit</button>
    </div>
    </>
  )
}

export default SideBar