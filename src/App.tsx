import type { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from './router/RootRouter';
import './App.css';

const App: FC = () => {
    return (
        <BrowserRouter>
            <RootRouter />
        </BrowserRouter>
    );
};

export default App;
