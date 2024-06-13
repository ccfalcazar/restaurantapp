import React from 'react'

const ContentTable = () => {
  return (
    <div className='overflow-x-auto mx-3'>
        <table className='table table-zebra'>
            <thead>
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
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    Starters
                </td>
                <td>
                    Buffalo Wings
                </td>
                <td>
                    None
                </td>
                <td>
                    130.00
                </td>
                <td>
                    250.00
                </td>
                <td>
                    100
                </td>
            </tr>
            <tr>
                <td>
                    Starters
                </td>
                <td>
                    Buffalo Wings
                </td>
                <td>
                    None
                </td>
                <td>
                    130.00
                </td>
                <td>
                    250.00
                </td>
                <td>
                    100
                </td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ContentTable
