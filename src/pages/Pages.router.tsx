import { type RouteObject } from 'react-router-dom';
import TaskView from './TaskView/TaskView';
import LoginView from './LoginView/LoginView';
import RegisterForm from './RegisterView/RegisterView';

export const pagesRoutes: RouteObject[] = [
    {
        path: 'tasks',
        element: <TaskView />,
    },
    {
        path: 'login',
        element: <LoginView />,
    },
    {
        path: '/signup',
        element: <RegisterForm />,
    }
];