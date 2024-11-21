import { useState } from "react";

export default function EditableNavbar({ name }: { name: string }) {
  const [editableName, setEditableName] = useState(name);

  const handleSave = async () => {
    // Save API call
  };

  return (
    <div className="navbar bg-gray-100 p-4">
      <input
        type="text"
        value={editableName}
        onChange={(e) => setEditableName(e.target.value)}
        onBlur={handleSave}
        className="border p-2"
      />
    </div>
  );
}
