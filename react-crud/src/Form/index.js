import React from'react'

const Form = ({fname,age,address,handleOnChange,handleOnSubmit}) => {  

    return <div>
        <form onSubmit={handleOnSubmit}>
            <label for='fname'> First Name </label>
            <input value={fname} onChange={handleOnChange} required  type='text' name='fname'></input>

            <label for='age'> Age </label>
            <input value={age} onChange={handleOnChange} required type='number' min={0} name='age'></input>

            <label for='address'> Address </label>
            <input value={address} onChange={handleOnChange} required type='text' name='address'></input>

            <button type='submit'>Add</button>
        </form>
    </div>;
}
export default Form;