import { type RouteObject, Navigate } from 'react-router-dom';
import TaskView from './TaskView/TaskView';
import LoginView from './LoginView/LoginView';
import RegisterForm from './RegisterView/RegisterView';
import PrivateRoute from '@src/components/privateRoute/PrivateRoute';
import NotFound from './NotFound/NotFound';

export const pagesRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to="/login" />,
    
    },
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
    {
        path: '*',
        element: <NotFound />,
    }
];
