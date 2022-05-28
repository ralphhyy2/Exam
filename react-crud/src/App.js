import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './Form/index'
import Table from './Table/index'


function App() {
  const [fname, setFname] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [users, setUsers] = useState([{
    fname: 'Test',
    age: 12,
    address: 'Chrysanthemumm'
  }])
  const [search, setSearch] = useState([])

  const [tableData, setTableData] = useState([])

  const handleOnChange = (e) => {
    if (e.target.name === 'fname') {
      setFname(e.target.value)
    }
    if (e.target.name === 'age') {
      setAge(e.target.value)
    }
    if (e.target.name === 'address') {
      setAddress(e.target.value)
    }
  }

  const handleOnDelete = (e, index) => {
    const tempUsers = [...users]
    const result = tempUsers.filter((_, t) => t !== index)

    setUsers([...result])
  }

  const handleOnSearch = (e) => {
    if (e.target.value === '') {
      setSearch([])
      return;
    }
    const result = users.filter((u, index) => u.fname.toLowerCase().includes(e.target.value))
    setSearch([...result])
  }

  const handleOnEdit = (e, index) => {
    if (!fname || !age || !address) {
      alert('Incomplete Fields')
      return
    }
    let tempUsers = [...users]
    tempUsers[index].fname = fname
    tempUsers[index].age = age
    tempUsers[index].address = address
    setUsers([...tempUsers])
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    let stateUsers = [...users]
    stateUsers.push({
      fname,
      age,
      address
    })
    setUsers([...stateUsers])
  }

  useEffect(() => {
    setTableData(users);
    console.log('running')
  }, [users])
  useEffect(() => {
    //first time render function
    console.log('test')
  },[])
  return (
    <div className="App">
      <label type='input'>Search</label>
      <input type='text' onChange={handleOnSearch}></input>
      {search.map((s, i) => (<div>
        {
          s.fname
        }
      </div>))}
      <Form handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        fname={fname}
        age={age}
        address={address}
      />

      <Table users={
        search.length > 0 ? search : tableData
      }
        handleOnDelete={handleOnDelete}
        handleOnEdit={handleOnEdit} />

    </div>
  );
}

export default App;
