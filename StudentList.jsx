import StudentCard from "./StudentItem";

function StudentList({ students, toggleStudentStatus }) {
  if (students.length === 0) {
    return <p>No students added yet.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          toggleStudentStatus={toggleStudentStatus}
        />
      ))}
    </ul>
  );
}

export default StudentList;