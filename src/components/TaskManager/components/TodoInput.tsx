import { FC, memo, useState } from 'react';
import { TaskList } from '../TaskList.type';
import { useStatuses, useUser } from '@src/store/hooks/hooks';

// Mock selectors

interface Props {
    handleAddTaskItem: (value: TaskList.Item) => void;
}

export const TodoInputFC: FC<Props> = (props) => {
    const { handleAddTaskItem } = props;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [refUserId, setRefUserId] = useState('');
    const user = useUser();
    const statuses = useStatuses();
    const [status, setStatus] = useState('TODO');

    const handleAdd = () => {
        const newTaskItem: TaskList.Item = {
            _id: Math.random().toString(36).substring(2, 9), // Generate a random ID
            userId: user?.userId,
            title,
            description,
            status,
            refUserId,
        };

        handleAddTaskItem(newTaskItem);
        setTitle('');
        setDescription('');
        setRefUserId('');
        setStatus('TODO');
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
                placeholder="Reference User ID"
                value={refUserId}
                onChange={(e) => setRefUserId(e.target.value)}
            />
            <select
                className="flex-1 shadow appearance-none border text-black rounded w-full py-2 px-3"
                value={status}
                onChange={(e) => setStatus(e.target.value)}>
                {statuses.map((statusOption, idx) => (
                    <option key={idx} value={statusOption}>
                        {statusOption}
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
