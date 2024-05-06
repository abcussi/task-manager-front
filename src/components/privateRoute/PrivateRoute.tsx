import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }: { children: React.ReactNode }) {
    const isAuthenticated = document.cookie.includes('x-access-token');
    
    return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;