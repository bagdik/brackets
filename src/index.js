module.exports = function check(str, bracketsConfig) {

let stack = [];
let last;

for(let s = 0; s < str.length; s++ ){
  for(let i = 0; i < bracketsConfig.length; i++){
    if(bracketsConfig[i][1] === bracketsConfig[i][0]){
      if(!stack.length % 2 && last !== bracketsConfig[i][1]){
        stack.push(str[s]);
        last = bracketsConfig[i][0];
      } else {
        stack.pop();
      }
    } else if(str[s] === bracketsConfig[i][0]){
      stack.push(str[s]);
      last = str[s];
    } else if(last){
      if (str[s] === bracketsConfig[i][1] && last === bracketsConfig[i][0]){
        stack.pop();
        last = stack.length > 0 ? stack[stack.length - 1] : undefined;
      }
    }
  }
}

return stack.length === 0;   
}
