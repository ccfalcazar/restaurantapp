import React, { useEffect, useState } from 'react'
import { app } from './../firebase-config'
import { getDatabase, ref, onValue} from 'firebase/database';
import Rows from './Rows';

interface Props{
    Refresh: number;
    onEditClick: (event:any)=>void,
    onDeleteClick:(event:any)=>void
}

const ContentTable = ({Refresh,onEditClick,onDeleteClick}:Props) => {
 
const db = getDatabase(app);
const path = 'menuitems/';

const [ListRow, setRows] = useState(new Array());

 function ReadData()
 {  
    let databaseRef = ref(db, path);
    let arr = new Array();
    onValue(databaseRef, (record)=>{
        record.forEach((child)=>{
            let CategoryRef = ref(db, path + child.key + '/');
            onValue(CategoryRef, (Category)=>{
                Category.forEach((name)=>{
                    let NameRef = ref(db, path + child.key + '/' + name.key + '/');
                    onValue(NameRef, (Name)=>{
                        Name.forEach((variant)=>{
                            const temp = {
                                Category: child.key,
                                Name: name.key,
                                Variant: variant.key,
                                Cost: variant.val().cost,
                                Price: variant.val().price,
                                Stock: variant.val().stocks
                            }
                            arr = [...arr, temp];
                        })
                    })
                })
            })
        });
    });
    return arr;
 }
 function LoadData()
 {
    setRows(ReadData);
 }
 useEffect(LoadData,[Refresh])
 return (
    <>
    <div className='overflow-x-auto mx-3'>
        <table className='table table-zebra text-center'>
            <thead className='bg-primary text-primary-content'>
            <tr>
                <th>
                    Category
                </th>
                <th>
                    Name
                </th>
                <th>
                    Variations
                </th>
                <th>
                    Cost
                </th>
                <th>
                    Price
                </th>
                <th>
                    Stocks
                </th>
                <th>
                    
                </th>
                <th>
                    
                </th>
            </tr>
            </thead>
            <tbody>
                {
                    ListRow.map((row,index)=>{
                        return(
                            <Rows key={index} Category={row.Category} Name={row.Name} Variant={row.Variant} Cost={row.Cost} Price={row.Price} Stock={row.Stock} onEditClick={onEditClick} onDeleteClick={onDeleteClick}/>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default ContentTable
