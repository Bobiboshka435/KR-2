export default class Validation {
  static validateStudent(student) {
    const errors = [];

    if (!student.fullName || student.fullName.trim().length < 3) {
      errors.push("Введите корректное полное имя");
    }

    if (!this.isValidEmail(student.email)) {
      errors.push("Некорректный email");
    }

    if (!this.isValidPhone(student.phone)) {
      errors.push("Номер телефона должен содержать 10-11 цифр");
    }

    if (!student.faculty) {
      errors.push("Выберите факультет");
    }

    return errors;
  }

  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static isValidPhone(phone) {
    const cleanPhone = phone.replace(/\D/g, "");
    return cleanPhone.length >= 10 && cleanPhone.length <= 11;
  }
}
