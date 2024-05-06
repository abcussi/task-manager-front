import { FC, memo, useState } from 'react';
import { TaskList } from '../TaskList.type';
import { useStatuses, useTaskList, useUser } from '@src/store/hooks/hooks';
import { useDebounce } from '@src/services/debounce';
import { fetchByEmail, userInterface } from '@src/services/userService';

interface Props {
    handleAddTaskItem: (value: TaskList.Item) => void;
}

export const TodoInputFC: FC<Props> = (props) => {
    const { handleAddTaskItem } = props;
    const statuses = useStatuses();
    const tasks = useTaskList();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [refUserId, setRefUserId] = useState('');
    const [userFound, setUserFound] = useState<userInterface | null>();
    const [status, setStatus] = useState<string>(statuses[0]?._id || '');
    const user = useUser();
    const handleAdd = () => {
        const newTaskItem: TaskList.Item = {
            userId: user._id,
            title: title,
            description: description,
            status: status || statuses[0]?._id,
            refUserId: userFound?._id || '',
            referedEmail: userFound?.email || '',
        };

        handleAddTaskItem(newTaskItem);
        

        setTitle('');
        setDescription('');
        setRefUserId('');
        setStatus(statuses[0]?._id || '');
    };

    const handleDebouncedChange = useDebounce((value: string) => {
        fetchByEmail(value).then((res) => {
            if (res) {
                setUserFound(res.data);
            }
        });
    }, 500);

    const handleChange = (e: string) => {
        const newValue = e;
        setRefUserId(newValue);

        // Call the debounced function with the latest input value
        handleDebouncedChange(newValue);
    };

    return (
        <div className="flex flex-col sm:flex-row mt-4 gap-2">
            <input
                className="flex-1 shadow appearance-none border text-black rounded w-full py-2 px-3"
                placeholder="Add Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                className="flex-1 shadow appearance-none border text-black rounded w-full py-2 px-3"
                placeholder="Add Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                className="flex-1 shadow appearance-none border text-black rounded w-full py-2 px-3"
                placeholder="Reference (email)"
                value={refUserId}
                onChange={(e) => handleChange(e.target.value)}
            />
            <label className={`flex-1 text-sm sm:text-white text-black mt-1`}>
                {userFound ? `${userFound.email} gonna be refered `:'be sure to have the email of the user to reference the task'}
            </label>
            <select
                className="flex-1 shadow appearance-none border text-black rounded w-full py-2 px-3"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                >
                {statuses.map((statusOption) => (
                    <option key={statusOption._id} value={statusOption._id}>
                        {statusOption.status}
                    </option>
                ))}
            </select>
            <button
                className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-500"
                onClick={handleAdd}>
                Add
            </button>
        </div>
    );
};

export default memo(TodoInputFC);
