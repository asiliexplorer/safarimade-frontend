export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md text-center bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
        <p className="text-gray-600 mb-4">
          You don't have permission to view this page. Only{" "}
          <strong>admin</strong> can access the dashboard.
        </p>
        <div className="flex justify-center gap-3">
          <a
            href="/login"
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Sign in
          </a>
          <a href="/" className="px-4 py-2 border rounded">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
