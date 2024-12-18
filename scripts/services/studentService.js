import StorageManager from "../utils/storage.js";
import Student from "../models/student.js";
import Validation from "../utils/validation.js";

export default class StudentService {
  constructor() {
    this.storageManager = new StorageManager("students");
  }

  registerStudent(studentData) {
    const validationErrors = Validation.validateStudent(studentData);

    if (validationErrors.length > 0) {
      throw new Error(validationErrors.join("\n"));
    }

    const student = new Student(studentData);
    return this.storageManager.add(student.toJSON());
  }

  getAllStudents() {
    return this.storageManager.get();
  }

  deleteStudent(id) {
    this.storageManager.remove(id);
  }

  filterStudents(searchTerm, facultyFilter) {
    const students = this.getAllStudents();

    return students.filter((student) => {
      const matchesSearch =
        !searchTerm ||
        student.fullName.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFaculty =
        !facultyFilter || student.faculty === facultyFilter;

      return matchesSearch && matchesFaculty;
    });
  }
}
