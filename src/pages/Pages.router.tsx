import { type RouteObject } from 'react-router-dom';
import TaskView from './TaskView/TaskView';
import LoginView from './LoginView/LoginView';
import RegisterForm from './RegisterView/RegisterView';
import PrivateRoute from '@src/components/privateRoute/PrivateRoute';

export const pagesRoutes: RouteObject[] = [
    {
        path: 'tasks',
        element: (
            <PrivateRoute>
                <TaskView />
            </PrivateRoute>
        ),
    },
    {
        path: 'login',
        element: <LoginView />,
    },
    {
        path: '/signup',
        element: <RegisterForm />,
    },
];
