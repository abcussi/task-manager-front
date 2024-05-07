import { type RouteObject } from 'react-router-dom';

import { pagesRoutes } from '@src/pages/Pages.router'; 
export const rootRoutes: RouteObject[] = [
    ...pagesRoutes,
];
