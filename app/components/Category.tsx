"use client";

import { useState } from "react";

const Category = () => {
  const CategoryList = ['All','Starters','Soup','Fish', 'Chicken','Pork', 'Beef', 'Dessert', 'Drinks']
   const [TabIndex, SelectedIndex] = useState(0);

  return (
    <div role="tablist" className="tabs tabs-bordered justify-center text-base-content bg-base-100 min-h-20 pb-5">
      {
        CategoryList.map((Category,index)=>
          <input key={index} type="radio" name="Category" role="tab" className="tab px-5 hover:size-10" aria-label={Category} checked={TabIndex == index} onClick={()=>SelectedIndex(index)}/>)
      }
    </div>
  )
}

export default Category