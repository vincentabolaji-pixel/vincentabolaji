function StudentCard({ student, toggleStudentStatus }) {
  return (
    <li
      style={{
        marginBottom: "10px",
        padding: "10px",
        border: "1px solid #ccc",
        backgroundColor: student.isActive ? "#e6ffe6" : "#ffe6e6",
      }}
    >
      <strong>{student.name}</strong> —{" "}
      <span>{student.isActive ? "Active" : "Inactive"}</span>

      <button
        onClick={() => toggleStudentStatus(student.id)}
        style={{ marginLeft: "10px" }}
      >
        Toggle Status
      </button>
    </li>
  );
}

export default StudentCard;