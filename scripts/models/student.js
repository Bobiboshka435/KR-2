export default class Student {
  constructor(data) {
    this.id = data.id || Date.now();
    this.fullName = data.fullName;
    this.email = data.email;
    this.phone = data.phone;
    this.faculty = data.faculty;
    this.registrationDate = data.registrationDate || new Date().toISOString();
  }

  toJSON() {
    return {
      id: this.id,
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      faculty: this.faculty,
      registrationDate: this.registrationDate,
    };
  }

  static getFacultyName(facultyCode) {
    const facultyNames = {
      IT: "Технический факультет",
      ECONOMICS: "Экономический факультет",
      MEDICINE: "Медицинский факультет",
      HUMANITIES: "Гуманитарный факультет",
    };
    return facultyNames[facultyCode] || facultyCode;
  }
}
