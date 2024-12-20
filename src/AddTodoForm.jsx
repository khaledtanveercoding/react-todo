import React from 'react';

const AddTodoForm = (props) => {
    const handleAddTodo = (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Retrieve the title value from the input
        const todoTitle = event.target.title.value;
        props.onAddTodo(todoTitle)

        // Log the todo title to the console
        console.log(todoTitle);

        // Reset the form
        event.target.reset();
    };

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="todoTitle">Title: </label>
                <input 
                    id="todoTitle" 
                    name="title" 
                    type="text" 
                />
                <button 
                    name="name" 
                    value="value" 
                    type="submit"
                >
                    Add
                </button>
            </form>
        </div>
    );
}

export default AddTodoForm;
