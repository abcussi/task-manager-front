// reducers.ts
import { ADD_TASK, REMOVE_TASK , CHANGE_TASK_STATUS, SET_FILTER, SET_ALL_TASKS } from '@src/constants/common';

import type { TaskList } from '@src/components/TaskManager/TaskList.type';
import { userInterface } from '@src/services/userService';

const initialState = {
    tasks: [] as TaskList.Item[],
    filter: '' as string,
    allTasks: [] as TaskList.Item[],
    user: {} as userInterface,
};

export const taskReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload], allTasks: [...state.allTasks, action.payload] };
        case REMOVE_TASK:
            return { ...state, tasks: state.tasks.filter(i => i._id !== action.payload), allTasks: state.allTasks.filter(i => i._id !== action.payload) };
        case CHANGE_TASK_STATUS:
            const { id, status } = action.payload;
            const updateStatus = (items: TaskList.Item[]) => items.map(i => (i._id === id ? { ...i, status } : i));
            return { ...state, tasks: updateStatus(state.tasks), allTasks: updateStatus(state.allTasks) };
        case SET_FILTER:
            if (action.payload === '') return { ...state, tasks: state.allTasks };
            return { ...state, tasks: state.allTasks.filter(i => i.status === action.payload) };
        case SET_ALL_TASKS:
            return { ...state, allTasks: action.payload, tasks: action.payload };
        default:
            return state;
    }
};
