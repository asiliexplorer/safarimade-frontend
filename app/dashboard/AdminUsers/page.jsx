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
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Pencil,
  Plus,
  RefreshCw,
  Search,
  ShieldCheck,
  Trash2,
  UserRound,
  Users,
  X,
} from "lucide-react";

// Modals
function CreateUserModal({ isOpen, onClose, onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData({ email: "", password: "", name: "" });
      setShowPassword(false);
    }
  }, [isOpen]);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-[#e8ddcd] bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#efe5d8] px-6 py-4">
          <h3 className="text-lg font-semibold text-slate-900">Create New Admin</h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4" autoComplete="off">
          <input
            type="text"
            name="fake-username"
            autoComplete="username"
            className="hidden"
            tabIndex={-1}
            aria-hidden="true"
          />
          <input
            type="password"
            name="fake-password"
            autoComplete="new-password"
            className="hidden"
            tabIndex={-1}
            aria-hidden="true"
          />
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="admin-name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Admin name"
              autoComplete="off"
              className="w-full rounded-xl border border-[#ddcfbc] px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]/35"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="admin-email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="admin@example.com"
              autoComplete="off"
              className="w-full rounded-xl border border-[#ddcfbc] px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]/35"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="admin-password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Secure password"
                autoComplete="new-password"
                className="w-full rounded-xl border border-[#ddcfbc] px-3 py-2.5 pr-11 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]/35"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute inset-y-0 right-3 inline-flex items-center text-slate-500 hover:text-slate-700"
                aria-label={showPassword ? "Hide password" : "Show password"}
                disabled={isLoading}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-[#ddcfbc] px-4 py-2 text-slate-700 hover:bg-[#f8f3ea]"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-xl bg-[#8B6F47] px-4 py-2 text-white hover:bg-[#735a3b] disabled:opacity-50"
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
  const [showPassword, setShowPassword] = useState(false);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-[#e8ddcd] bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#efe5d8] px-6 py-4">
          <h3 className="text-lg font-semibold text-slate-900">Edit User</h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
          >
            <X size={18} />
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
              className="w-full rounded-xl border border-[#ddcfbc] px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]/35"
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
              className="w-full rounded-xl border border-[#ddcfbc] px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]/35"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              New Password (leave blank to keep current)
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Optional: Enter new password"
                className="w-full rounded-xl border border-[#ddcfbc] px-3 py-2.5 pr-11 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]/35"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute inset-y-0 right-3 inline-flex items-center text-slate-500 hover:text-slate-700"
                aria-label={showPassword ? "Hide password" : "Show password"}
                disabled={isLoading}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-[#ddcfbc] px-4 py-2 text-slate-700 hover:bg-[#f8f3ea]"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-xl bg-[#8B6F47] px-4 py-2 text-white hover:bg-[#735a3b] disabled:opacity-50"
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-[#e8ddcd] bg-white shadow-2xl">
        <div className="border-b border-[#efe5d8] px-6 py-4">
          <h3 className="text-lg font-semibold text-slate-900">Delete User</h3>
        </div>

        <div className="p-6">
          <p className="text-slate-700 mb-4">
            Are you sure you want to delete <strong>{user.email}</strong>? This action cannot be undone.
          </p>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 rounded-xl border border-[#ddcfbc] px-4 py-2 text-slate-700 hover:bg-[#f8f3ea]"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 rounded-xl bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-50"
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
    role: "admin",
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

  const totalAdmins = items.length;
  console.log("[AdminUsers][Frontend] total admins:", users);

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
    <div className="min-h-screen bg-gradient-to-b from-[#fffdf9] to-[#f6efe3]">
      <div>
        {/* Header */}
        <div className="mb-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#ebdfce] bg-white/90 p-5 shadow-sm sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Users</h1>
            <p className="text-sm text-slate-500">
              Manage admin users —{" "}
              <span className="font-medium text-slate-700">
                Total: {totalAdmins}
              </span>
              {isFetching && (
                <span className="ml-2 text-xs text-[#8B6F47]">Updating...</span>
              )}
            </p>
          </div>

          <button
            onClick={() => setCreateModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-[#8B6F47] px-6 py-2.5 font-medium text-white shadow hover:bg-[#735a3b]"
          >
            <Plus size={16} />
            Add New User
          </button>
        </div>

        

        {/* Filters */}
        <div className="mb-6 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <div className="relative flex w-full items-center sm:w-80">
            <span className="absolute left-3">
              <Search className="h-4 w-4 text-[#857764]" />
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by name or email"
              className="w-full rounded-xl border border-[#ddcfbc] py-2.5 pl-11 pr-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8B6F47]/20"
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

          <button
            onClick={() => {
              setQ("");
              setPage(1);
            }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#8B6F47] px-4 py-2.5 text-white shadow hover:bg-[#735a3b]"
          >
            <RefreshCw size={16} />
            Reset
          </button>
        </div>

        {error && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            Failed to load users. Please refresh and try again.
          </div>
        )}

        {/* Card container with table */}
        <div className="overflow-hidden rounded-2xl border border-[#eadfcd] bg-white shadow-md">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#efe4d4]">
              <thead className="bg-gradient-to-r from-[#f8f1e5] to-[#fffaf3]">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-[#6b5d4a]">
                    Id
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-[#6b5d4a]">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-[#6b5d4a]">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-[#6b5d4a]">
                    Password
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-[#6b5d4a]">
                    Joined
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-[#6b5d4a]">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#f2e8da] bg-white">
                {isLoading ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-8 text-center text-sm text-gray-500"
                    >
                      Loading users...
                    </td>
                  </tr>
                ) : users.length === 0 ? (
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
                      className={`${idx % 2 === 0 ? "bg-white" : "bg-[#fffcf7]"} hover:bg-[#f8f2e8]`}
                    >
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {u._id.slice(-6)}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#b29670] to-[#8B6F47] font-bold text-white">
                            {(u.name || u.email || "U").charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">
                              {u.name || "—"}
                            </div>
                            
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-700">
                        {u.email}
                      </td>

                      <td className="px-6 py-4 text-sm">
                        {u.password || u.passwordHash ? (
                          <code className="rounded bg-[#f7f2ea] px-2 py-1 font-mono text-xs text-[#5b4a36]">
                            {u.password || u.passwordHash}
                          </code>
                        ) : (
                          <span className="text-xs text-gray-400">—</span>
                        )}
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-600">
                        {u.createdAt
                          ? new Date(u.createdAt).toLocaleDateString()
                          : "—"}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <div className="inline-flex items-center gap-2">
                          <button
                            className="inline-flex items-center gap-1 rounded-md bg-[#8B6F47] px-3 py-1 text-sm text-white hover:bg-[#735a3b] disabled:opacity-60"
                            onClick={() => handleEditUser(u)}
                            disabled={isLoadingUser}
                          >
                            <Pencil size={14} />
                            {isLoadingUser && selectedUser?._id === u._id
                              ? "Loading..."
                              : "Edit"}
                          </button>

                          <button
                            title="Delete user"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-red-50 text-red-600 hover:bg-red-100"
                            onClick={() => {
                              setSelectedUser(u);
                              setDeleteModalOpen(true);
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
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
          <div className="flex flex-col items-center justify-between gap-3 border-t border-[#efe4d4] bg-white px-6 py-4 sm:flex-row">
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
                className="inline-flex items-center gap-2 rounded-md border border-[#ddcfbc] bg-white px-3 py-1 hover:bg-[#f8f3ea] disabled:opacity-50"
              >
                <ChevronLeft className="h-4 w-4" /> Prev
              </button>

              <div className="rounded-md border border-[#ddcfbc] bg-[#f8f3ea] px-3 py-1">
                Page <span className="font-medium mx-1">{page}</span>
              </div>

              <button
                onClick={() => setPage((p) => p + 1)}
                className="inline-flex items-center gap-2 rounded-md border border-[#ddcfbc] bg-white px-3 py-1 hover:bg-[#f8f3ea]"
              >
                Next <ChevronRight className="h-4 w-4" />
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
