interface Props{
    Category: string,
    Name: string,
    Variant: string,
    Cost: string,
    Price: string,
    Stock: string,
    onEditClick: (event:any)=>void,
    onDeleteClick: (event:any)=>void
}

const Rows = ({Category,Name,Variant,Cost,Price,Stock,onEditClick,onDeleteClick}:Props) => {
  return (        
    <tr className="">
    <td>{Category}</td>
    <td>{Name}</td>
    <td>{Variant}</td>
    <td>{Cost}</td>
    <td>{Price}</td>
    <td>{Stock}</td>
    <td className="size-5">
        <label htmlFor="Edit_Modal" className="btn btn-success btn-xs btn-outline"id={'Edit-'+Category+'-'+Name+'-'+Variant+'-'+Cost+'-'+Price+'-'+Stock}onClick={onEditClick}>Edit</label>
    </td>    
    <td className="size-5">
        <label htmlFor="Delete_Modal" className="btn btn-error btn-xs btn-outline"id={'Delete-'+Category+'-'+Name+'-'+Variant}onClick={onDeleteClick}>Delete</label>
    </td>
    </tr>
  )
}

export default Rows
