function grade() {
let score = document.getElementById("score").value;
let grade = "";
if (score === "") {
document.getElementById("grade_span").innerHTML = "Please enter a score.";
return;
}
score = parseInt(score);
if (score >= 80) {
grade = "A";
} else if (score >= 60 && score <= 79) {
grade = "B";
} else if (score >= 40 && score <= 59) {
grade = "C";
} else {
grade = "F";
}
document.getElementById("grade_span").innerHTML = grade;
}
