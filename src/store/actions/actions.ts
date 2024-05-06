// actions.ts
import { ADD_TASK, REMOVE_TASK, CHANGE_TASK_STATUS, SET_FILTER, SET_ALL_TASKS } from '@src/constants/common';
import type { TaskList } from '@src/components/TaskManager/TaskList.type';

export const addTask = (item: TaskList.Item) => ({ type: ADD_TASK, payload: item });
export const removeTask = (id: number) => ({ type: REMOVE_TASK, payload: id });
export const changeTaskStatus = (id: number, status: string) => ({ type: CHANGE_TASK_STATUS, payload: { id, status } });
export const setFilter = (status: string) => ({ type: SET_FILTER, payload: status });
export const setAllTasks = (tasks: TaskList.Item[]) => ({ type: SET_ALL_TASKS, payload: tasks });
