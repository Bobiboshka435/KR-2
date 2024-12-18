import StudentService from "./services/studentService.js";
import RegistrationController from "./controllers/registrationController.js";
import ListController from "./controllers/listController.js";

document.addEventListener("DOMContentLoaded", () => {
  const studentService = new StudentService();

  const registrationForm = document.getElementById("applicant-form");
  const studentsContainer = document.getElementById("applicants-container");
  const totalCountElement = document.getElementById("total-applicants");
  const searchInput = document.getElementById("search-input");
  const facultyFilter = document.getElementById("faculty-filter");

  const listController = new ListController(
    studentService,
    studentsContainer,
    totalCountElement
  );

  const registrationController = new RegistrationController(
    studentService,
    registrationForm,
    () => listController.updateList()
  );

  function applyFilter() {
    const searchTerm = searchInput.value.trim();
    const facultyFilterValue = facultyFilter.value;
    const filteredStudents = studentService.filterStudents(
      searchTerm,
      facultyFilterValue
    );
    listController.renderStudentList(filteredStudents);
  }

  searchInput.addEventListener("input", applyFilter);
  facultyFilter.addEventListener("change", applyFilter);

  listController.updateList();
});
