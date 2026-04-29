import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center gap-4">
      <i className="fa-solid fa-circle-exclamation text-6xl text-gray-300"></i>
      <h1 className="text-6xl font-bold">404 - Not Found</h1>
      <p className="text-xl text-gray-500">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">Go back to Home</Link>
    </div>
  );
}