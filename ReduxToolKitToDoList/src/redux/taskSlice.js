import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: action.payload.id,
        name: action.payload.task,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id != action.payload.id);
    },
  },
});
// const deleteListText = input.filter(item => item.id != todoId);
// setInput(deleteListText);
export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;