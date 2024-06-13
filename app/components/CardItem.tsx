import React from 'react'

const CardItem = () => {
  return (
    <div className='card card-compact bg-base-100 shadow-xl flex p-1'>
        <div className='card-body'>
            <h2 className='card-title text-info-content mx-auto underline underline-offset-8'>Pork Chop</h2>
            <div>Id:</div>
            <div>Variant:</div>
            <div>Cost: </div>
            <div>Price: </div>
            <div>Stocks:</div>
            <button className='btn btn-sm btn-primary'>Edit</button>
        </div>
    </div>
  )
}

export default CardItem