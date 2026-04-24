"use client";

import {
  useGetUsersQuery,
  useCreateAdminMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useLazyGetUserByIdQuery,
} from "../../redux/features/admin/UserApi";
import React, { useMemo, useState, useEffect } from "react";
import toast from "react-hot-toast";

function SearchIcon() {
  return (
    <svg
      className="w-4 h-4 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
      />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
      <path d="M12.293 16.293a1 1 0 0 1-1.414 0L5.586 11l5.293-5.293a1 1 0 1 1 1.414 1.414L8.414 11l3.879 3.879a1 1 0 0 1 0 1.414z" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
      <path
        d="M7.707 3.707a1 1 0 0 1 0 1.414L4.414 8l3.293 3.293a1 1 0 0 1-1.414 1.414L2 8l4.293-4.293a1 1 0 0 1 1.414 0z"
        transform="rotate(180 6 8)"
      />
    </svg>
  );
}

// Modals
function CreateUserModal({ isOpen, onClose, onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.name) {
      toast.error("Please fill in all fields");
      return;
    }
    onSubmit(formData);
    setFormData({ email: "", password: "", name: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-900">Create New Admin</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Admin name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="admin@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Secure password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={isLoading}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-slate-700 rounded-lg hover:bg-gray-50"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function EditUserModal({ isOpen, onClose, user, onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  // Sync form fields whenever the user prop changes
  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email || "",
        name: user.name || "",
        password: "",
      });
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.name) {
      toast.error("Email and name are required");
      return;
    }
    onSubmit(formData);
  };

  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-900">Edit User</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              New Password (leave blank to keep current)
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Optional: Enter new password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={isLoading}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-slate-700 rounded-lg hover:bg-gray-50"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function DeleteConfirmModal({ isOpen, onClose, user, onConfirm, isLoading }) {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-slate-900">Delete User</h3>
        </div>

        <div className="p-6">
          <p className="text-slate-700 mb-4">
            Are you sure you want to delete <strong>{user.email}</strong>? This action cannot be undone.
          </p>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-slate-700 rounded-lg hover:bg-gray-50"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminUsers() {
  const [page, setPage] = useState(1);
  const [q, setQ] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [showPasswordIds, setShowPasswordIds] = useState(new Set());
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(false);

  const limit = 10;

  const [fetchUserById] = useLazyGetUserByIdQuery();

  const { data, error, isLoading, isFetching } = useGetUsersQuery({
    page,
    limit,
    role: roleFilter || undefined,
  });

  const [createAdmin, { isLoading: isCreating }] = useCreateAdminMutation();
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  const items = data?.data?.items || [];

  const users = useMemo(() => {
    if (!q) return items;
    const s = q.trim().toLowerCase();
    return items.filter(
      (u) =>
        (u.email || "").toLowerCase().includes(s) ||
        (u.name || "").toLowerCase().includes(s)
    );
  }, [items, q]);

  const togglePasswordVisibility = (userId) => {
    const newSet = new Set(showPasswordIds);
    if (newSet.has(userId)) {
      newSet.delete(userId);
    } else {
      newSet.add(userId);
    }
    setShowPasswordIds(newSet);
  };

  const handleCreateAdmin = async (formData) => {
    try {
      await createAdmin(formData).unwrap();
      toast.success("Admin user created successfully");
      setCreateModalOpen(false);
    } catch (err) {
      toast.error(err?.data?.message || "Failed to create admin");
    }
  };

  const handleEditUser = async (u) => {
    try {
      setIsLoadingUser(true);
      const result = await fetchUserById(u._id).unwrap();
      // result is { success, data } shape
      setSelectedUser(result?.data || result);
    } catch {
      // Fall back to the list-row data if the single-fetch fails
      setSelectedUser(u);
    } finally {
      setIsLoadingUser(false);
      setEditModalOpen(true);
    }
  };

  const handleUpdateUser = async (formData) => {
    try {
      const body = {
        email: formData.email,
        name: formData.name,
      };
      if (formData.password) {
        body.password = formData.password;
      }
      const userId = String(selectedUser?._id || selectedUser?.id || "");
      if (!userId) {
        toast.error("No user selected");
        return;
      }
      await updateUser({ userId, body }).unwrap();
      toast.success("User updated successfully");
      setEditModalOpen(false);
      setSelectedUser(null);
    } catch (err) {
      const msg =
        err?.data?.message ||
        err?.data?.error ||
        err?.error ||
        "Failed to update user";
      toast.error(msg);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const userId = String(selectedUser?._id || selectedUser?.id || "");
      if (!userId) {
        toast.error("No user selected");
        return;
      }
      await deleteUser(userId).unwrap();
      toast.success("User deleted successfully");
      setDeleteModalOpen(false);
      setSelectedUser(null);
    } catch (err) {
      const msg =
        err?.data?.message ||
        err?.data?.error ||
        err?.error ||
        "Failed to delete user";
      toast.error(msg);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Users</h1>
            <p className="text-sm text-slate-500">
              Manage registered users —{" "}
              <span className="font-medium text-slate-700">
                Total: {items.length}
              </span>
              {isFetching && (
                <span className="ml-2 text-xs text-indigo-500">Updating…</span>
              )}
            </p>
          </div>

          <button
            onClick={() => setCreateModalOpen(true)}
            className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 font-medium"
          >
            + Add New User
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full mb-6">
          <div className="relative flex items-center w-full sm:w-80">
            <span className="absolute left-3">
              <SearchIcon />
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by name or email"
              className="pl-11 pr-3 py-2 w-full border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
            {q && (
              <button
                onClick={() => setQ("")}
                className="absolute right-2 text-xs text-gray-500 hover:text-gray-700"
              >
                Clear
              </button>
            )}
          </div>

          <select
            value={roleFilter}
            onChange={(e) => {
              setRoleFilter(e.target.value);
              setPage(1);
            }}
            className="px-3 py-2 border border-gray-200 rounded-lg bg-white shadow-sm"
          >
            <option value="">All roles</option>
            <option value="admin">Admin</option>
            <option value="company">Company</option>
            <option value="customer">Customer</option>
          </select>

          <button
            onClick={() => {
              setQ("");
              setRoleFilter("");
              setPage(1);
            }}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
          >
            Reset
          </button>
        </div>

        {/* Card container with table */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-indigo-50 to-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">
                    Password
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">
                    Joined
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-slate-600">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-100">
                {users.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-8 text-center text-sm text-gray-500"
                    >
                      No users found.
                    </td>
                  </tr>
                ) : (
                  users.map((u, idx) => (
                    <tr
                      key={u._id}
                      className={`${
                        idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-gray-100`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-200 to-indigo-400 flex items-center justify-center text-white font-bold">
                            {(u.name || u.email || "U").charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">
                              {u.name || "—"}
                            </div>
                            <div className="text-xs text-slate-500">
                              {u._id}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-700">
                        {u.email}
                      </td>

                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          {u.password ? (
                            <>
                              <code className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                                {showPasswordIds.has(u._id)
                                  ? u.password
                                  : "•".repeat(8)}
                              </code>
                              <button
                                onClick={() => togglePasswordVisibility(u._id)}
                                className="text-indigo-600 hover:text-indigo-700 text-xs font-medium"
                              >
                                {showPasswordIds.has(u._id) ? "Hide" : "Show"}
                              </button>
                            </>
                          ) : (
                            <span className="text-xs text-gray-400">—</span>
                          )}
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                            u.role === "admin"
                              ? "bg-purple-600 text-white"
                              : u.role === "company"
                              ? "bg-blue-600 text-white"
                              : "bg-green-600 text-white"
                          }`}
                        >
                          {u.role}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-600">
                        {u.createdAt
                          ? new Date(u.createdAt).toLocaleDateString()
                          : "—"}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <div className="inline-flex items-center gap-2">
                          <button
                            className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700 disabled:opacity-60"
                            onClick={() => handleEditUser(u)}
                            disabled={isLoadingUser}
                          >
                            {isLoadingUser && selectedUser?._id === u._id
                              ? "Loading…"
                              : "Edit"}
                          </button>

                          <button
                            title="Delete user"
                            className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-red-50 text-red-600 hover:bg-red-100"
                            onClick={() => {
                              setSelectedUser(u);
                              setDeleteModalOpen(true);
                            }}
                          >
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 7h12M10 11v6m4-6v6M9 7l1-3h4l1 3"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer: summary + pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t bg-white">
            <div className="text-sm text-slate-600">
              Showing{" "}
              <span className="font-medium text-slate-800">
                {Math.min(users.length, limit)}
              </span>{" "}
              of{" "}
              <span className="font-medium text-slate-800">{items.length}</span>{" "}
              on this page
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-md border bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                <ChevronLeft /> Prev
              </button>

              <div className="px-3 py-1 border rounded-md bg-gray-50">
                Page <span className="font-medium mx-1">{page}</span>
              </div>

              <button
                onClick={() => setPage((p) => p + 1)}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-md border bg-white hover:bg-gray-50"
              >
                Next <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <CreateUserModal
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateAdmin}
        isLoading={isCreating}
      />

      <EditUserModal
        isOpen={editModalOpen}
        onClose={() => {
          setEditModalOpen(false);
          setSelectedUser(null);
        }}
        user={selectedUser}
        onSubmit={handleUpdateUser}
        isLoading={isUpdating}
      />

      <DeleteConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setSelectedUser(null);
        }}
        user={selectedUser}
        onConfirm={handleDeleteUser}
        isLoading={isDeleting}
      />
    </div>
  );
}
