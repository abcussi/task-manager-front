// src/components/NotFound.tsx

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <a href="/login" className="text-blue-500 hover:underline">
                Return to Login
            </a>
        </div>
    );
}

export default NotFound;
