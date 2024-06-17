import React from 'react';
import { getDatabase,set,ref } from 'firebase/database';
import { app } from '../firebase-config';

interface Props{
    Category: string,
    Name: string,
    Variant: string
}

const DeleteModal = ({Category,Name,Variant}:Props) => {

    function Delete()
    {
        const db = getDatabase(app);
        const path = 'menuitems/'+Category+'/'+Name+'/'+Variant;
        set(ref(db,path),null);
    }

  return (
    <div>
        <input type="checkbox" id="Delete_Modal" className="modal-toggle" />
        <div className="modal" role="dialog">
        <div className="modal-box bg-warning">
            <h3 className="font-bold text-lg text-warning-content">You are about to delete {Name+':'+Variant+'!!'}</h3>
            <div className="modal-action">
            <label htmlFor='Delete_Modal' className='btn btn-sm btn-error' onClick={Delete}>Confirm</label>
            <label htmlFor="Delete_Modal" className="btn btn-sm">Cancel</label>
            </div>
        </div>
        </div>
    </div>
  )
}

export default DeleteModal