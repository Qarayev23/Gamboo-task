import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import tasks from './tasksSlice'

const combinedReducer = combineReducers({
  tasks,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {

    const nextState = {
      ...state,
      tasks: {
        tasks: [...action.payload.tasks.tasks, ...state.tasks.tasks]
      },
     
    }
    return nextState;
  } else {
    return combinedReducer(state, action)
  }
}

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
