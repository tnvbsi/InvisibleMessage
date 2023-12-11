const readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout),
    clipboardy = require("clipboardy"),
    chalk = require("chalk");
    
function s(t) {
    console.log(`[${chalk.green.bold("InvisibleMessage")}]: ${t}`);
}

function e(t) {
    console.log(`[${chalk.red.bold("InvisibleMessage")}]: ${t}`);
}

console.log(`Example: \"<https://www.roblox.com>(nl)https://www.youtube.com\"`);
rl.setPrompt('> ');
rl.prompt();

rl.on('line', function(line) {
     let data = line.trim();
     if (!data.includes("(nl)")) {
        return e("This message is not valid.");
     }
     var split = data.split("(nl)");
     if (split.length > 2 || split[0] == null || split[0] == undefined || split[1] == null || split[1] == undefined || split[1].toString() == "") {
         return e("Incorrect Usage!");
     }
     var content = `${split[0]}** **||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||||||||||${split[1]}`;
     clipboardy.write(content).then(() => {
         return s("Success! Copied to clipboard.");
     }).catch((err) => {
         return e(err.toString());
     });
})
