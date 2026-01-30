import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;

    addStudent(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit" disabled={!name.trim()}>
        Add Student
      </button>
    </form>
  );
}

export default AddStudentForm;