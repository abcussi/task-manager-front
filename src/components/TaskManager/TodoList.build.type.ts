import { TaskList } from './TaskList.type';

export const taskListItemBuilder = (content: TaskList.Item) => ({
    userId: content.userId,
    title: content.title,
    description: content.description,
    status: content.status,
    refUserId: content.refUserId,
});
