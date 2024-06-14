'use client';

import React from 'react'
import Controls from './Controls';
import ContentTable from './ContentTable';
import SideBar from './SideBar';

const Drawer = () => {
  return (
    <div className='drawer drawer-end'>
        <input id="add-item-drawer" type="checkbox" className="drawer-toggle" />
        <div className='drawer-content'>
            <Controls/>
            <ContentTable/>
        </div>
        <div className='drawer-side'>
            <SideBar/>
        </div>
    </div>
  )
}

export default Drawer