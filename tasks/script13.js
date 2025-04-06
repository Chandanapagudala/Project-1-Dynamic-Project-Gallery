const me = {
uni: "",
dept: "",
name: "",
color: "",
description: function() {
return `This is\n${this.name}\n${this.uni}\n${this.dept}\nin\n$
{this.color}\ncolor.`;
}
};
function insert() {
let uni = document.getElementById("uni").value;
let dept = document.getElementById("dept").value;
let name = document.getElementById("name").value;
let color = document.getElementById("color").value;
me.uni = uni;
me.dept = dept;
me.name = name;
me.color = color;
document.getElementById("demo").innerHTML = me.description();
console.log("Updated 'me' object: ", me);
}
function show_my_info() {
console.log("Show Info button clicked!");
document.getElementById("demo").innerHTML = me.description();
console.log("Current info in 'me' object: ", me);
}
function clear_inputs(){
document.getElementById("uni").value = "";
document.getElementById("dept").value = "";
document.getElementById("name").value = "";
document.getElementById("color").value = "";
}
function clear_display(){
document.getElementById("demo").innerHTML = "";
}
function search(){
let key=document.getElementById("search_field").value;
output="";
for(let me of mes){
if(me.uni.includes(key)||me.name.includes(key))
{
output==me.description();
}
}
document.getElementById("output_div").innerHTML=output;
}
