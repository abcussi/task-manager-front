import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { addTask, removeTask, changeTaskStatus, setFilter, setAllTasks } from '../actions/actions';
import type { TaskList } from '@src/components/TaskManager/TaskList.type';

export const useTaskList = () => useSelector((state: RootState) => state.tasks);
export const useFilter = () => useSelector((state: RootState) => state.filter);

export const useTaskActions = () => {
    const dispatch = useDispatch();
    return {
        addTask: (item: TaskList.Item) => dispatch(addTask(item)),
        removeTask: (id: number) => dispatch(removeTask(id)),
        changeTaskStatus: (id: number, status: string) => dispatch(changeTaskStatus(id, status)),
        setFilter: (status: string) => dispatch(setFilter(status)),
        setAllTasks: (tasks: TaskList.Item[]) => dispatch(setAllTasks(tasks)),
    };
};
