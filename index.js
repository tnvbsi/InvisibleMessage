var readline = require('readline');
const clipboardy = require('clipboardy');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var issuccess=true;
function s(t){
	console.log("["+require("chalk").green.bold("InvisibleMessage")+"]: "+t)
}
function e(t){
	console.log("["+require("chalk").red.bold("InvisibleMessage")+"]: "+t)
}
console.log(`Example: \"<https://www.roblox.com>(nl)https://www.youtube.com\"`);
function Q(){
rl.question("> ",function(aboba) {
if(!aboba.includes("(nl)")){e("This message is not valid.");issuccess=false;}
var split=aboba.split("(nl)");
if(split.length >2 || split[0] == null || split[0] == undefined || split[1] == null || split[1] == undefined || split[1].toString()==""){if(issuccess==true){e("Incorrect Usage!");issuccess=false;};}
var content=`${split[0]}** **||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||||||||||${split[1]}`;
try{
clipboardy.writeSync(content);
}catch(err){
	issuccess=false;
	e(err);
}
if(issuccess == true){
s("Success!");
}else{
	issuccess=true;
}
Q();
})
}
Q();