import { useState } from "react";
import StudentList from "./StudentList";
import AddStudentForm from "./AddStudentForm";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (name) => {
    const newStudent = {
      id: Date.now(),
      name,
      isActive: true,
    };
    setStudents([...students, newStudent]);
  };

  const toggleStudentStatus = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, isActive: !student.isActive }
          : student
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Management App</h2>

      <AddStudentForm addStudent={addStudent} />

      <StudentList
        students={students}
        toggleStudentStatus={toggleStudentStatus}
      />
    </div>
  );
}

export default App;