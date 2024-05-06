import { useFilter } from '@src/store/hooks/hooks';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }: { children: React.ReactNode }) {
    const user = useFilter();
    console.log(user)

    const isAuthenticated = document.cookie.includes('x-access-token');
    document.cookie = "test_cookie=test_value; path=/";
    
    return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;