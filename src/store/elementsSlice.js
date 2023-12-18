import { createSlice } from "@reduxjs/toolkit";

const elementsSlice = createSlice({
    name: 'elements',
    initialState: {
        elements: [],
    },
    reducers: {
        addElement(state, action) {
            const newElement = action.payload;

            state.elements.push({
                id: newElement.id,
                value: newElement.value
            });
        },
        deleteElement(state, action) {
            console.log(action);
            const id = action.payload.id;
            state.elements = state.elements.filter((element) => element.id !== id);
        }
    }
});

export const { addElement, deleteElement } = elementsSlice.actions;
export default elementsSlice.reducer;