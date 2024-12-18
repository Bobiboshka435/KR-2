export default class RegistrationController {
  constructor(studentService, formElement, onSuccessCallback) {
    this.studentService = studentService;
    this.formElement = formElement;
    this.onSuccessCallback = onSuccessCallback;
    this.initEventListeners();
  }

  initEventListeners() {
    this.formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this.handleRegistration();
    });
  }

  handleRegistration() {
    const formData = this.collectFormData();

    try {
      this.studentService.registerStudent(formData);
      this.onSuccessCallback();
      this.resetForm();
    } catch (error) {
      alert(error.message);
    }
  }

  collectFormData() {
    return {
      fullName: this.formElement.querySelector("#fullname").value.trim(),
      email: this.formElement.querySelector("#email").value.trim(),
      phone: this.formElement.querySelector("#phone").value.trim(),
      faculty: this.formElement.querySelector("#faculty").value,
    };
  }

  resetForm() {
    this.formElement.reset();
  }
}
