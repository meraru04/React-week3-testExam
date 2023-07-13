import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from '../../utils';

// 2개의 인풋
// createAsyncThunk에 들어갈 인자
// (1) : 이름 : 의미는 없다
// (2) : 함수
export const __addToDo = createAsyncThunk(
  '__addToDo',
  async (payload, thunkAPI) => {
    await waitTwoSeconds()
    thunkAPI.dispatch(addTodo(payload))
  }
);

export const __deleteTodo = createAsyncThunk(
  '__deleteToDo',
  async (payload, thunkAPI) => {
    await waitTwoSeconds()
    thunkAPI.dispatch(deleteTodo(payload))
  }
);

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list = [...state.list,action.payload]
    },
    deleteTodo: (state, action) => {
        state.list = state.list.filter((item) => {return item.id !== action.payload})
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
