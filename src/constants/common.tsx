// COMMMON URLS
export const URL_BASE = 'http://localhost:3000';
export const URL_LOGIN = `${URL_BASE}/users/login`;
export const URL_REGISTER = `${URL_BASE}/users/signup`;
export const URL_TASKS = `${URL_BASE}/tasks`;
export const URL_CREATE_TASK = `${URL_BASE}/tasks`;
export const URL_USERS = `${URL_BASE}/users`;
export const URL_CSRF = `${URL_BASE}/csrfToken`;

// CONST FUNCTIONS
export const URL_TASK = (id: string) => `${URL_BASE}/tasks/${id}`;
export const URL_TASKS_BY_USER = (userId: string) => `${URL_BASE}/tasks/user/${userId}`;
export const URL_TASKS_BY_STATUS = (status: string) => `${URL_BASE}/tasks/status/${status}`;
export const URL_DELETE_TASK = (id: string) => `${URL_BASE}/tasks/${id}`;
export const URL_UPDATE_TASK = (id: string) => `${URL_BASE}/tasks/${id}`;

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
export const SET_FILTER = 'SET_FILTER';
export const SET_ALL_TASKS = 'SET_ALL_TASKS';