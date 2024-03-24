// Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 
//A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.

function calculateGrade(marks) {
    if (marks >= 80) {
      return "A";
    } else if (marks >= 60) {
      return "B";
    } else if (marks >= 49) {
      return "C";
    } else if (marks >= 40) {
      return "D";
    } else {
      return "E";
    }
}

function getValidMarks() {
    while (true) {
      const marks = parseInt(prompt("Enter student marks (0-100): "));
      if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        return marks;
      } else {
        alert("Invalid marks. Please enter a number between 0 and 100.");
      }
    }
}

const marks = getValidMarks
const grade = calculateGrade(marks)
console.log(`The grade is: ${grade}`);
