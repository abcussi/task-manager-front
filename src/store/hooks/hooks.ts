import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { addTask, removeTask, changeTaskStatus, setFilter, setAllTasks, addUserInfo, addStatuses } from '../actions/actions';
import type { TaskList } from '@src/components/TaskManager/TaskList.type';
import { userInterface } from '@src/services/userService';
import { statusesInterface } from '@src/services/statusesInterface';

export const useTaskList = () => useSelector((state: RootState) => state.tasks);
export const useFilter = () => useSelector((state: RootState) => state.filter);
export const useStatuses = () => useSelector((state: RootState) => state.statuses);
export const useUser = () => useSelector((state: RootState) => state.user);

export const useTaskActions = () => {
    const dispatch = useDispatch();
    return {
        addTask: (item: TaskList.Item) => dispatch(addTask(item)),
        removeTask: (id: number) => dispatch(removeTask(id)),
        changeTaskStatus: (id: number, status: string) => dispatch(changeTaskStatus(id, status)),
        setFilter: (status: string) => dispatch(setFilter(status)),
        setAllTasks: (tasks: TaskList.Item[]) => dispatch(setAllTasks(tasks)),
        setUser: (user: userInterface) => dispatch(addUserInfo(user)),
        setAllStatuses: (statuses: statusesInterface) => dispatch(addStatuses(statuses)),
    };
};
