const ToDoItem = ({ id, value, deleteHandler, doneHandler }) => {
    return (
        <div data-id={id}>
            <div>
                <p>{value}</p>
            </div>
            <div>
                <button onClick={() => doneHandler(id)}>Done</button>
                <button>Edit</button>
                <button onClick={() => deleteHandler(id)}>Delete</button>
            </div>
        </div>
    );
};

export default ToDoItem;
