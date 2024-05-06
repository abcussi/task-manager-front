import { type FC, memo, useMemo } from 'react';

import type { TaskList } from '../TaskList.type';
import { useStatuses } from '@src/store/hooks/hooks';

interface Props {
    item: TaskList.Item;
    handleChangeTodoItemStatus: (id: string | undefined | number, status: string) => void;
    handleRemoveTodoItem: (id: string | undefined | number) => void;
}
export const TodoItemFC: FC<Props> = (props) => {
    const { item, handleRemoveTodoItem } = props;
    const statuses = useStatuses();

    const itemContentClass = useMemo(() => {
        const className = 'w-[80%] ';
        const statusName = statuses.find((item: any) => item._id === item._id)?.status || '';
        if (statusName === 'Completed') {
            return className + 'line-through text-green-500';
        }
        return className + 'text-grey-darkest';
    }, []);

    const handleChange = (id: string | number | undefined) => {
        console.log(id)
    }
    const ChangeStatusAction = useMemo(() => {
        const statusName = statuses.find((internal: any) => internal._id === item?.status)?.status || '';

            return (
                <button
                    onClick={() => handleChange(item)}
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">
                    {statusName}
                </button>
            );
        
    }, []);

    return (
        <div className="flex flex-row items-center justify-between p-4 mb-4 rounded hover:shadow-lg">
            <div className="flex flex-1 space-x-4">
                <p className={`${itemContentClass} flex-1`}>{item?.title}</p>
                <p className={`${itemContentClass} flex-1`}>{item?.description}</p>
                <p className={`${itemContentClass} flex-1`}>{item?.refUserId}</p>
            </div>
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
