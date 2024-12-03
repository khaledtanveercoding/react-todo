import React from 'react';


const AddTodoForm = ()=> {
    return (
        <div>
            <form>
            <label htmlFor="Title"> Title: </label>
            <input id="todoTitle" type="text" />
            <button name="name" value="value" type="submit">Add</button>
            </form>
        </div>

    );


}

export default AddTodoForm;