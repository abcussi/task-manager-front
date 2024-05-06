// useTaskActions.ts
import { useDispatch } from 'react-redux';
import { addTask } from '@src/store/actions/actions';
import { TaskList } from '@src/components/TaskManager/TaskList.type';
import { URL_TASKS } from '@src/constants/common';

export const useTasksActions = () => {
    const dispatch = useDispatch();

    const postNewTask = async (task: TaskList.Item) => {
        try {
            // Make a POST request to the /tasks endpoint
            const response = await fetch(URL_TASKS, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(task),
            });

            // Check if the response status is OK (201 - Created)
            if (response.ok) {
                const data = await response.json();
                // Add the new task to the store if the response is successful
                dispatch(addTask(data));
            } else {
                console.error('Error adding task:', response.statusText);
            }
        } catch (error) {
            console.error('Error posting new task:', error);
        }
    };

    return { postNewTask };
};
