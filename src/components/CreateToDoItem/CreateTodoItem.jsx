import { useRef } from "react";

const CreateTodoItem = ({ handler }) => {
    const newElementValue = useRef('');

    return (
        <form onSubmit={(e) => handler(e, newElementValue.current.value)}>
            <label htmlFor="todo">To Do Item</label>
            <input type="text" id="todo" ref={newElementValue} />
            <button>Submit</button>
        </form>
    )
}

export default CreateTodoItem;