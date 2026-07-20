/* 1. Smart University Scholarship System ⭐⭐⭐⭐
Scenario

A university gives scholarships based on GPA and attendance.

Rules:

GPA ≥ 3.90 AND Attendance ≥ 95 → 100% Scholarship
GPA ≥ 3.75 AND Attendance ≥ 90 → 75%
GPA ≥ 3.50 AND Attendance ≥ 85 → 50%
GPA ≥ 3.20 AND Attendance ≥ 80 → 25%
Otherwise → No Scholarship

Extra Rules

If the student has disciplinary action
→ No scholarship regardless of GPA.

Example

GPA = 3.95
Attendance = 96
Discipline = false

Output:
Congratulations!
100% Scholarship Awarded. */

let gpa = 3.50;
let attendance = 90;
Discipline = false;

if(gpa >=3.90 && attendance >= 95 && Discipline == false){
    console.log("Congratulations! 100% Scholarship Awarded.");
}
else if(gpa >=3.75 && attendance >= 90 && Discipline == false){
    console.log("Congratulations! 75% Scholarship Awarded.");
}
else if(gpa >=3.50 && attendance >= 85 && Discipline == false){
    console.log("Congratulations! 50% Scholarship Awarded.");
}
else if(gpa >=3.20 && attendance >= 80 && Discipline == false){
    console.log("Congratulations! 25% Scholarship Awarded.");
}
else{
    console.log("No Scholarship");
}