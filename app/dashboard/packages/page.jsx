"use client";

import { useEffect, useState } from "react";
import ViewPacges from "../components/ViewPacges";
import AddEditPacage from "../components/AddEditPacage";

export default function PackagesPage() {
  const [mode, setMode] = useState("view");
  const [editingPackage, setEditingPackage] = useState(null);

  useEffect(() => {
    if (mode !== "form") return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mode]);

  const openCreate = () => {
    setEditingPackage(null);
    setMode("form");
  };

  const openEdit = (pkg) => {
    setEditingPackage(pkg);
    setMode("form");
  };

  const handleSaved = () => {
    setEditingPackage(null);
    setMode("view");
  };

  return (
    <div className="space-y-4">
      {mode === "view" ? (
        <ViewPacges onCreate={openCreate} onEdit={openEdit} />
      ) : (
        <div className="fixed inset-0 z-[120] bg-[#f7efe2]">
          <AddEditPacage
            initialData={editingPackage}
            onCancel={() => setMode("view")}
            onSuccess={handleSaved}
          />
        </div>
      )}
    </div>
  );
}
