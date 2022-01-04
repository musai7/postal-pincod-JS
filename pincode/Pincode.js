let pattern = RegExp('^[1-9]{1}[0-9]{5}$');
const readline = require('readline');
const readCmd = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});
readCmd.question('enter pin code : ' ,(input)=>{
    if(pattern.test(input)){
        console.log("valide postal pin");
    }else{
        console.log("invalide postal pin ");
    }
    readCmd.close();
})