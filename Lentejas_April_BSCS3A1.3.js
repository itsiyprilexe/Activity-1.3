
// 1. CONST & LET VARIABLES
// 10 CONST VARIABLES
const schoolName = "Northwest Samar State University";
const passingScore = 75;
const maxCapacity = 100;
const yearFounded = 2010;
const baseFee = 5000;
const labFee = 1000;
const adminName = "Yuri Ortiz";
const term = "Semester 1";
const roomNumber = "Room 301";
const maxGrade = 100;

// 10 LET VARIABLES
let studentCount = 0;
let totalSales = 0;
let isPassed = false;
let currentCity = "Calbayog";
let statusMessage = "Active";
let userRole = "Student";
let attempts = 1;
let averageScore = 0;
let courseName = "Computer Science";
let currentDate = "2026-09-07";

// Object 1
const student = {
  id: 101,
  info: { name: "Ana Cruz", address: { city: "Calbayog" } }
};

// Object 2 
const course = {
  title: "JavaScript",
  teacher: { name: "Prof. Ortiz" }
};

const studentCity = student?.info?.address?.city;
const teacherRoom = course?.teacher?.room?.building ?? "Main Hall";

// 3. ARROW FUNCTIONS (5 Total)
const addNumbers = (a, b) => a + b;
const checkPassed = (score) => score >= passingScore;
const getGreeting = (name) => `Hello, ${name}!`;
const multiplyByTwo = (num) => num * 2;
const logData = (msg) => console.log(`[LOG]: ${msg}`);

// 4. DESTRUCTURING (3 Arrays, 3 Objects)
const scores = [90, 85, 80];
const colors = ["Red", "Blue", "Green"];
const coords = [10, 20];

const user = { username: "yuri123", email: "yuri@mail.com" };
const item = { itemName: "Laptop", price: 25000 };
const settings = { theme: "Dark", volume: 80 };

// 3 Destructured Arrays
const [score1, score2] = scores;
const [color1, color2] = colors;
const [x, y] = coords;

// 3 Destructured Objects
const { username, email } = user;
const { itemName, price } = item;
const { theme, volume } = settings;

// 5. SPREAD OPERATOR (2 Arrays, 2 Objects)
const listA = [1, 2, 3];
const listB = [4, 5, 6];
//array spread 1 and 2
const combinedList = [...listA, ...listB]; 
const copyScores = [...scores, 95];        

const personInfo = { name: "Ben", age: 20 };
//object spread 1 and 2
const studentDetails = { ...personInfo, grade: 12 }; 
const fullItem = { ...item, inStock: true };          

// 6. MAP & FILTER (2 .map(), 2 .filter())
const numbers = [60, 75, 80, 90, 95];

// 2 .map()
const doubleNumbers = numbers.map((n) => n * 2);
const scoreLabels = numbers.map((n) => `Score: ${n}`);

// 2 .filter()
const highScores = numbers.filter((n) => n >= 80);
const failingScores = numbers.filter((n) => n < passingScore);

// 7. TEMPLATE LITERALS (10 Total) & OUTPUT
const t1 = `Welcome to ${schoolName}!`;
const t2 = `Created by: ${adminName}`;
const t3 = `Term: ${term} - Year: ${yearFounded}`;
const t4 = `Student lives in: ${studentCity}`;
const t5 = `Teacher Room: ${teacherRoom}`;
const t6 = `User Profile: ${username} (${email})`;
const t7 = `Item Purchased: ${itemName} for PHP ${price}`;
const t8 = `Total Fee: PHP ${addNumbers(baseFee, labFee)}`;
const t9 = `Passing Status for 80: ${checkPassed(80)}`;
const t10 = `Total High Performers: ${highScores.length} students`;

// Print execution
logData(t1);
console.log(t2);
console.log(t3);
console.log(t4);
console.log(t5);
console.log(t6);
console.log(t7);
console.log(t8);
console.log(t9);
console.log(t10);