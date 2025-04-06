const me = {
uni: "",
dept: "",
name: "",
color: "",
description: function() {
if (!this.name || !this.uni || !this.dept || !this.color) {
return "No information available yet.";
}
return "This is\n" + this.name + "\n" + this.uni + "\n" + this.dept + "\
nin\n" + this.color + "\ncolor.";
}
};
document.getElementById("demo").innerHTML = me.description();
function show_my_info() {
console.log("Show Info button clicked!");
document.getElementById("demo").innerHTML = me.description();
console.log("Current info in 'me' object: ", me);
}
function insert() {
let uni = document.getElementById("uni").value;
let dept = document.getElementById("dept").value;
let name = document.getElementById("name").value;
let color = document.getElementById("color").value;
if (!uni || !dept || !name || !color) {
alert("All fields must be filled out!");
return;
}
me.uni = uni;
me.dept = dept;
me.name = name;
me.color = color;
document.getElementById("demo").innerHTML = me.description();
console.log("Updated 'me' object: ", me);
}
