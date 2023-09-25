let givennumber=13;
let value=parseInt(prompt("Enter the number"));
document.write(`Given number : ${givennumber}<br><br>New number : ${value}<br><br>`);

if(value<13){
  document.write(`Difference between two numbers : ${13-value}<br><br>`);
}
else if(value>13){
 let c=value-13;
 document.write(`Difference between two numbers : ${c}<br><br>`)
 document.write(`Double the absolute value : ${c*2}`);
}
else{
  document.write(0);
}