// COMMMON URLS
export const URL_BASE = 'http://localhost:3000';
export const URL_LOGIN = `${URL_BASE}/users/login`;
export const URL_REGISTER = `${URL_BASE}/users/signup`;
export const URL_TASKS = `${URL_BASE}/tasks`;
export const URL_CREATE_TASK = `${URL_BASE}/tasks`;
export const URL_USERS = `${URL_BASE}/users`;
export const URL_CSRF = `${URL_BASE}/csrfToken`;
export const URL_STATUSES = `${URL_BASE}/status/status`;
export const URL_USER_FIND_BY_EMAIL = `${URL_BASE}/users/find-by-email`;

// CONST FUNCTIONS
export const URL_TASK = (id: string) => `${URL_BASE}/tasks/${id}`;
export const URL_TASKS_BY_USER = (userId: string) => `${URL_BASE}/tasks/user/${userId}`;
export const URL_TASKS_BY_STATUS = (status: string) => `${URL_BASE}/tasks/status/${status}`;
export const URL_DELETE_TASK = (id: string) => `${URL_BASE}/tasks/${id}`;
export const URL_UPDATE_TASK = (id: string) => `${URL_BASE}/tasks/${id}`;

//constatns for store
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
export const SET_FILTER = 'SET_FILTER';
export const SET_ALL_TASKS = 'SET_ALL_TASKS';
export const ADD_USER_INFO = 'ADD_USER_INFO';
export const ADD_STATUSES = 'ADD_STATUSES';

