import Student from "../models/student.js";

export default class ListController {
  constructor(studentService, listContainer, totalCountElement) {
    this.studentService = studentService;
    this.listContainer = listContainer;
    this.totalCountElement = totalCountElement;
    this.initEventListeners();
  }

  initEventListeners() {
    this.listContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-btn")) {
        const studentId = parseInt(event.target.dataset.id);
        this.deleteStudent(studentId);
      }
    });
  }

  renderStudentList(students) {
    this.listContainer.innerHTML = "";
    this.totalCountElement.textContent = students.length;

    students.forEach((studentData) => {
      const student = new Student(studentData);
      const studentElement = this.createStudentElement(student);
      this.listContainer.appendChild(studentElement);
    });
  }

  createStudentElement(student) {
    const div = document.createElement("div");
    div.classList.add("applicant-card");
    div.innerHTML = `
            <div>
                <strong>${student.fullName}</strong><br>
                Email: ${student.email}<br>
                Телефон: ${student.phone}<br>
                Факультет: ${Student.getFacultyName(student.faculty)}
            </div>
            <button class="delete-btn" data-id="${student.id}">Удалить</button>
        `;
    return div;
  }

  deleteStudent(id) {
    this.studentService.deleteStudent(id);
    this.updateList();
  }

  updateList() {
    const students = this.studentService.getAllStudents();
    this.renderStudentList(students);
  }
}
