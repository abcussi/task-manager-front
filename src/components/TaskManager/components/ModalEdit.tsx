// src/components/EditModal.tsx
import React, { FC, useState, useEffect } from 'react';

interface EditModalProps {
    isOpen: boolean;
    item: { title: string; description: string; refUser: string; status: string };
    onClose: () => void;
    onSave: (updatedItem: { title: string; description: string; refUser: string; status: string }) => void;
}

const EditModal: FC<EditModalProps> = ({ isOpen, item, onClose, onSave }) => {
    const [formData, setFormData] = useState(item);

    useEffect(() => {
        if (isOpen) {
            setFormData(item);
        }
    }, [isOpen, item]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    if (!isOpen) return null;

   
    return (
        <div className="fixed inset-0 z-50 flex text-black items-center justify-center ">
            <div className="bg-teal-500 bg-opacity-90 p-8 rounded-xl shadow-xl w-full md:w-1/3">
                <h2 className="text-2xl font-bold text-center text-black mb-6">Edit Item</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="title" className="block text-black font-semibold mb-2">
                            Title
                        </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="block w-full p-2 border-2 border-sky-300 rounded-lg shadow-sm focus:ring focus:border-sky-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-black font-semibold mb-2">
                            Description
                        </label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="block w-full p-2 border-2 border-sky-300 rounded-lg shadow-sm focus:ring focus:border-sky-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="refUser" className="block text-black font-semibold mb-2">
                            RefUser
                        </label>
                        <input
                            id="refUser"
                            name="refUser"
                            type="text"
                            value={formData.refUser}
                            onChange={handleInputChange}
                            className="block w-full p-2 border-2 border-sky-300 rounded-lg shadow-sm focus:ring focus:border-sky-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="status" className="block text-black font-semibold mb-2">
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleInputChange}
                            className="block w-full p-2 border-2 border-sky-300 rounded-lg shadow-sm focus:ring focus:border-sky-500"
                        >
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-400 rounded-lg text-black shadow-lg hover:bg-gray-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-sky-700 rounded-lg text-black shadow-lg hover:bg-sky-800"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;
