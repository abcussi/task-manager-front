import type { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { rootRoutes } from './router.config';

const RootRouter: FC = () => {
    return useRoutes(rootRoutes);
};

export default RootRouter;
