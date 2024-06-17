interface Props{
    Category: string,
    Name: string,
    Variant: string,
    Cost: string,
    Price: string,
    Stock: string
}

const Rows = ({Category,Name,Variant,Cost,Price,Stock}:Props) => {
  return (        
    <tr className="">
    <td>{Category}</td>
    <td>{Name}</td>
    <td>{Variant}</td>
    <td>{Cost}</td>
    <td>{Price}</td>
    <td>{Stock}</td>
    <td>
        <button className="btn btn-success btn-xs btn-outline">
            Edit
        </button>
    </td>    
    <td>
        <button className="btn btn-error btn-xs btn-outline">
            Delete
        </button>
    </td>
    </tr>
  )
}

export default Rows
