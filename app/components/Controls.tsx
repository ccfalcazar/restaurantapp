import React from 'react'

const Controls = () => {
  return (
    <>
          <div className='py-2 px-3 flex'>
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
        </>
  )
}

export default Controls
