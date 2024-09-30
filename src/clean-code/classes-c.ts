
(() => {

  // Applying the Single Responsibility Principle

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

  interface UserProps {
    email: string;
    password: string;
    role: string;
    lastLogin: Date;
  }

  class User {
    public email: string;
    public password: string;
    public role: string;
    public lastLogin: Date;

    constructor({
      email,
      password,
      role,
      lastLogin
    }: UserProps) {
      this.email = email;
      this.password = password;
      this.role = role;
      this.lastLogin = lastLogin;
    }

    checkCredentials() {
      return true;
    }

  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
    }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      person,
      user,
      settings
    }: {
      person: Person,
      user: User,
      settings: Settings
    }) {
      this.person = person;
      this.user = user;
      this.settings = settings;
    }
  }
})();


