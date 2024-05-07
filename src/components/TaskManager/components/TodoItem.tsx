import { type FC, memo, useMemo, useState } from 'react';

import type { TaskList } from '../TaskList.type';
import { useStatuses } from '@src/store/hooks/hooks';
import EditModal from './ModalEdit';

interface Props {
    item: TaskList.Item;
    handleChangeTodoItemStatus: (id: string | undefined | number, status: string) => void;
    handleRemoveTodoItem: (id: string | undefined | number) => void;
}
export const TodoItemFC: FC<Props> = (props) => {
    const { item, handleRemoveTodoItem } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState({
        title: '',
        description: '',
        refUser: '',
        status: 'Pending',
    });

    const statuses = useStatuses();
/*     const itemContentClass = useMemo(() => {
        const className = 'w-[80%] ';
        const statusName = statuses.find((item: any) => item._id === item._id)?.status || '';
        if (statusName === 'Completed') {
            return className + 'line-through text-green-500';
        }
        return className + 'text-grey-darkest';
    }, []);
 */
    /*     const handleChange = (id: string | number | undefined) => {
        console.log(id)
    } */
    const ChangeStatusAction = useMemo(() => {
        const statusName =
            statuses.find((internal: any) => internal._id === item?.status)?.status || '';

        return (
            <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">
                {statusName}
            </button>
        );
    }, []);

    const handleEditClick = (item: typeof selectedItem) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleSave = (updatedItem: typeof selectedItem) => {
        console.log('Updated Item:', updatedItem);
        // Save the updated item logic here...
    };
    
    return (
        <div className="flex flex-col md:flex-row items-center md:justify-between p-6 mb-4 bg-grey rounded-lg shadow hover:shadow-md transition duration-200">
            <div className="flex flex-col md:flex-row flex-1 space-y-3 md:space-y-0 md:space-x-6 text-center">
                <p className="flex-1 p-3 text-lg font-semibold text-sky-800 bg-sky-100 rounded hover:bg-sky-800 hover:text-white">{item?.title}</p>
                <p className="flex-1 p-3 text-base font-medium text-gray-700 bg-sky-100 rounded hover:bg-gray-700 hover:text-white">{item?.description}</p>
                <p className="flex-1 p-3 text-sm font-light text-gray-500 bg-sky-100 rounded hover:bg-gray-500 hover:text-white">{item?.refUserId}</p>
            </div>
            <div className="flex justify-start md:justify-end space-x-3 mt-3 md:mt-0">
                {ChangeStatusAction}
                <button
                    className="flex-no-shrink px-4 py-2 border-2 border-red-500 text-red-500 rounded hover:text-white hover:bg-red-500 transition duration-200"
                    onClick={() => handleRemoveTodoItem(item._id || '')}
                >
                    Remove
                </button>
                <button
                    className="flex-no-shrink px-4 py-2 border-2 border-sky-500 text-sky-500 rounded hover:text-white hover:bg-sky-500 transition duration-200"
                    onClick={() => handleEditClick({
                        title: 'Test',
                        description: 'Test Description',
                        refUser: 'User1',
                        status: 'Pending',
                    })}
                >
                    Edit Item
                </button>
                <EditModal
                    isOpen={isModalOpen}
                    item={selectedItem}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSave}
                />
            </div>
        </div>
    );    
};

export default memo(TodoItemFC);
