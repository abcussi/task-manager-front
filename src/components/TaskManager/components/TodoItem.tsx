import { type FC, memo, useMemo } from 'react';

import type { TaskList } from '../TaskList.type';

interface Props {
    item: TaskList.Item;
    handleChangeTodoItemStatus: (id: string, status: string) => void;
    handleRemoveTodoItem: (id: string) => void;
}
export const TodoItemFC: FC<Props> = (props) => {
    const { item, handleRemoveTodoItem, handleChangeTodoItemStatus } = props;

    const itemContentClass = useMemo(() => {
        const className = 'w-[80%] ';
        if (item.status === 'Completed') {
            return className + 'line-through text-green-500';
        }
        return className + 'text-grey-darkest';
    }, [item.status]);

    const ChangeStatusAction = useMemo(() => {
        if (item.status === 'Active') {
            return (
                <button
                    onClick={() =>
                        handleChangeTodoItemStatus(item._id || '', 'Completed')
                    }
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">
                    Active
                </button>
            );
        }
        if (item.status === 'Completed') {
            return (
                <button
                    onClick={() => handleChangeTodoItemStatus(item._id || '', 'Active')}
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-300 hover:bg-slate-400">
                    Complete
                </button>
            );
        }
    }, [item.status]);

    return (
        <div className="flex mb-4 items-center justify-between">
            <p className={itemContentClass}>{item.title}</p>
            <div className="flex justify-end">
                {ChangeStatusAction}
                <button
                    className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
                    onClick={() => handleRemoveTodoItem(item._id || '')}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default memo(TodoItemFC);
