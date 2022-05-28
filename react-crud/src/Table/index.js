import React,{useState} from'react'

const Table = ({users,handleOnDelete,handleOnEdit}) =>{
return <table>
<thead>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        <th>Edit</th>
        <th>Delete</th>
    </tr>
</thead>

{users.map((user,index) => (
    <tr>
        <td>{user.fname}</td>
        <td>{user.age}</td>
        <td>{user.address}</td>
        <td><button onClick={(e) => {
            handleOnEdit(e,index)
        }}>Edit</button></td>
        <td><button onClick={(e) => {
            handleOnDelete(e,index)
        }}>Delete</button></td>
    </tr>
))}
</table>


}
export default Table;