let colors = ["red", "blue", "green"];
let idx = 0;
let size = colors.length;
function generatePattern() {
let n = parseInt(document.getElementById("n_value").value);
let text = "";
let i = 0;
do {
let j = 0;
while (j < i) {
text += "* ";
j++;
}
text += "<br>";
i++;
} while (i <= n);
document.getElementById("demo_div").innerHTML = text;
document.getElementById("demo_div").style.color = colors[idx];
idx=(idx+1)%size;
}
generatePattern();
