import { useDispatch } from "react-redux";
import CreateTodoItem from "../components/CreateToDoItem/CreateTodoItem";
import ListToDoItems from "../components/ListToDoItems/ListToDoItems";
import { addElement, deleteElement } from "../store/elementsSlice"

const Home = () => {
    const dispatch = useDispatch();

    const handlerSubmit = (e, value) => {
        e.preventDefault();
        // Dummy ID Creator
        const id = Math.random().toFixed(2);

        dispatch(addElement({
            id,
            value
        }))
    }

    const deleteHandler = (id) => {
        console.log('delete', id);
        dispatch(deleteElement({
            id,
        }))
    };

    const doneHandler = (id) => {
        console.log('done', id);
    }

    return (
        <>
            <h1>To Do List</h1>
            <CreateTodoItem handler={handlerSubmit} />
            <ListToDoItems
                deleteHandler={deleteHandler}
                doneHandler={doneHandler}
            />
        </>
    )
}

export default Home;