import React from 'react'

const Header = () => {
  return (
    <div className="bg-primary md:rounded-t-md grid grid-cols-2">
    <div className="mt-auto">
      <h1 className="text-2xl font-sans text-base-100 p-3 ">Restaurant Menu</h1>
    </div>
    <div className="ms-auto mt-auto mb-auto p-2">
      <button className="btn md:btn-sm">Add Food</button>
    </div>
  </div>
  )
}

export default Header