console.clear();
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    RegisterForCourses(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    ;
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    instructor = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    ;
    addStudent(student) {
        this.students.push(student);
        student.RegisterForCourses(this);
    }
    setInstructor(instructor) {
        this.instructor.push(instructor);
        instructor.assignCourse(this);
    }
}
// student create
const student1 = new Student("shoaib", 26, "st1");
const student2 = new Student("sattar", 26, "st2");
// instructor create
const instructor1 = new Instructor("zia", 26, 25000);
const instructor2 = new Instructor("daniyal", 26, 25000);
//courses create
const course1 = new Course("C1", "Metaverse");
const course2 = new Course("C2", "blockChain");
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
// console.log(course1);
course2.addStudent(student1);
course2.addStudent(student2);
course2.setInstructor(instructor2);
// console.log(course2);
console.log(course1.instructor);
export {};
