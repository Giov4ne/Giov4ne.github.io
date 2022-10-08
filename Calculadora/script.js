const output = document.querySelector('#output');
const ce = document.querySelector('#g1');
const dl = document.querySelector('#g2');
const equal = document.querySelector('#equal');

function insertThroughKeyCode(event){
    switch(event.keyCode){
        case 48:
            insert('0');
            break;
        case 49:
            insert('1');
            break;
        case 50:
            insert('2');
            break;
        case 51:
            insert('3');
            break;
        case 52:
            insert('4');
            break;
        case 53:
            insert('5');
            break;
        case 54:
            insert('6');
            break;
        case 55:
            insert('7');
            break;
        case 56:
            insert('8');
            break;
        case 57:
            insert('9');
            break;
        case 45:
            insert('0');
            break;
        case 35:
            insert('1');
            break;
        case 40:
            insert('2');
            break;
        case 34:
            insert('3');
            break;
        case 37:
            insert('4');
            break;
        case 12:
            insert('5');
            break;
        case 39:
            insert('6');
            break;
        case 36:
            insert('7');
            break;
        case 38:
            insert('8');
            break;
        case 33:
            insert('9');
            break;
        case 13:
            calc();
            break;
        case 190:
            insert('.');
            break;
        case 194:
            insert('.');
            break;
        case 189:
            insert('-');
            break;
        case 109:
            insert('-');
            break;
        case 107:
            insert('+');
            break;
        case 88:
            insert('*');
            break;
        case 106:
            insert('*');
            break;
        case 193:
            insert('/');
            break;
        case 111:
            insert('/');
            break;
        case 67:
            clearAll();
            break;
        case 8:
            erase();
            break;
    }
}

function insert(item){
    if(output.value.length === 0){
        if(item !== '/' && item !== '*' && item !== '.') output.value += item;
    } else{
        output.value += item;
    }
}

function clearAll(){
    output.value = '';
}

function erase(){
    output.value = output.value.substring(0, output.value.length-1);
}

function calc(){
    let result = eval(output.value);
    (result == Infinity || isNaN(result)) ? output.value = 'Impossível ÷ por 0' : output.value = result;
}

document.addEventListener('keydown', insertThroughKeyCode);
ce.addEventListener('click', clearAll);
dl.addEventListener('click', erase);
equal.addEventListener('click', calc);