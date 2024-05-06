// TodoList.tsx
import { useTaskList, useTaskActions } from '@src/store/hooks/hooks';
import TodoInputFC from './components/TodoInput';
import TodoItemFC from './components/TodoItem';
import { taskListItemBuilder } from './TodoList.build.type';
import { TaskList } from './TaskList.type';
import { useEffect } from 'react';
import useStatuses from '@src/services/statusesInterface';

const TodoListFC = () => {
    const todoList = useTaskList();
    const { addTask, removeTask, changeTaskStatus, setFilter } = useTaskActions();
    const { statuses, loading, error } = useStatuses();

    const handleAddTaskItem = (value: TaskList.Item) => {
        if (value) addTask(taskListItemBuilder(value));
    };

    const handleRemoveTodoItem = (id: number) => removeTask(id);

    const handleChangeTodoItemStatus = (id: number, status: string) => changeTaskStatus(id, status);

    const handleChangeTodoListFilterStatus = (status: string) => setFilter(status);

    useEffect(() => {
      console.log(statuses)
    
    }, [])
    

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-teal-500 font-sans">
            <div className="bg-white sm:bg-gray-800 sm:text-white rounded shadow p-6 m-4 w-full lg:w-3/4 sm:w-full sm:p-4 sm:m-2">
                <div className="mb-4">
                    <h1 className="text-grey-darkest sm:text-white text-xl font-medium">Todo List</h1>
                    <TodoInputFC handleAddTaskItem={handleAddTaskItem} />
                </div>
                {/* <div>
                    {todoList.map(i => (
                        <TodoItemFC key={i.id} item={i} handleChangeTodoItemStatus={handleChangeTodoItemStatus} handleRemoveTodoItem={handleRemoveTodoItem} />
                    ))}
                </div>
                <TodoFilterFC handleChangeTodoListFilterStatus={handleChangeTodoListFilterStatus} /> */}
            </div>
        </div>
    );
};

export default TodoListFC;