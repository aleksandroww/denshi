import { useSelector } from 'react-redux';
import ToDoItem from '../ToDoItem/ToDoItem';

const ListToDoItems = ({ deleteHandler, doneHandler }) => {
    const items = useSelector((state) => state.elements.elements);

    return (
        <ul>
            {items.map(({ id, value }) => (
                <ToDoItem
                    key={id}
                    id={id}
                    value={value}
                    deleteHandler={deleteHandler}
                    doneHandler={doneHandler}
                />
            ))}
        </ul>
    )
}

export default ListToDoItems;