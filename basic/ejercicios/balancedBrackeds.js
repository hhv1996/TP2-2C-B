// Complete the isBalanced function below.
class Stack {
    constructor() {
      this.stack = [];
    }
    
    push(element) {
      this.stack.push(element);
      return this.stack;
    }
    
    pop() {
      return this.stack.pop();
    }
    
    peek() {
      return this.stack[this.stack.length - 1];
    }
    
    size() {
      return this.stack.length;
    }
  
    print() {
      console.log(this.stack);
    }
  }
  
function isBalanced(s) {
    let retorno = 'YES';
    let pilaApertura = new Stack();
    for (let i =0;i<s.length;i++){
        if (esApertura(s[i]))
            {pilaApertura.push(s[i]);}
        else{
            if (esCierre(s[i])){
                if(!esCierreDe(s[i],pilaApertura.pop()))
                    return 'NO';
            }
        }
    }
    return 'YES';
}
function esApertura (caracter){
    let retorno=false;
    switch (caracter){
        case '{':
            retorno = true;
            break;
        case '(':
            retorno = true;
            break;
        case '[':
            retorno = true;
            break;
    }
    return retorno;
}

function esCierre (caracter){
    let retorno=false;
    switch (caracter){
        case '}':
            retorno = true;
            break;
        case ')':
            retorno = true;
            break;
        case ']':
            retorno = true;
            break;
    }
    return retorno;
}

function esCierreDe(car1, car2){
    let retorno=false;
    switch (car2){
        case '{':
            if (car1=='}')
                retorno= true;
        break;

        case '[':
            if (car1==']')
            retorno= true;
        break;

        case '(':
            if (car1==')')
            retorno= true;
        break;

        default:
            retorno=false;
    }
    return retorno;
}

// TESTS
console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES');
//adicionales
console.log(isBalanced('()'));
console.log(isBalanced('(]'));
console.log(isBalanced('(}'));
console.log(isBalanced('{}{{[[(())]]}}{}()[]({)') == 'YES');
