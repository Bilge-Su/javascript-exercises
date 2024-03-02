const repeatString = function(string, num) {
    if(num<0) return "ERROR";
    result = "";
    let i = 0;
    while(i<num){
        result += string;
        i += 1; }
    return result;
};



// Do not edit below this line
module.exports = repeatString;
