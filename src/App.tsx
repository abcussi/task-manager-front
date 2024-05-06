import type { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from './router/RootRouter';
import './App.css';
// App.tsx
import { Provider } from 'react-redux';
import { store } from '@src/store/store';

const App: FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <RootRouter />
            </BrowserRouter>
        </Provider>
    );
};

export default App;
