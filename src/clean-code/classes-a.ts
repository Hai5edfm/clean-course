
(() => {

  // Does not apply the Single Responsibility Principle

  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string;
    gender: Gender;
    age: number;
  }

  class Person {
    public name: string
    public gender: Gender;
    public age: number;

    constructor({ name, gender, age }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.age = age;
    }
  }

  interface UserProps extends PersonProps {
    email: string;
    password: string;
    role: string;
    lastLogin: Date;
  }

  class User extends Person {
    public email: string;
    public password: string;
    public role: string;
    public lastLogin: Date;

    constructor({
      email,
      password,
      role,
      lastLogin,
      name,
      gender,
      age
    }: UserProps) {
      super({
        name,
        gender,
        age
      });
      this.email = email;
      this.password = password;
      this.role = role;
      this.lastLogin = lastLogin;
    }

    checkCredentials() {
      return true;
    }

  }

  interface UserSettingsProps extends UserProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      password,
      role,
      lastLogin,
      name,
      gender,
      age
    }: UserSettingsProps) {
      super({
        email,
        password,
        role,
        lastLogin,
        name,
        gender,
        age
      });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

})();


