//оболочка для клавы
let wrapp = document.createElement('div');
wrapp.className = "wrapper";
document.body.append(wrapp);

//сама клава
let div = document.createElement('div');
div.className = "keyboard";
wrapp.append(div);

//поле ввода
const text = document.createElement('textarea');
text.rows = 16;
text.cols = 145;
text.placeholder = 'Press Shift+Alt to change the language...';
text.autofocus='autofocus';
text.value=''
text.className = "text";
wrapp.append(text);


//клавиши букв и цифр

let keyboard = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
    'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift',
    'Ctrl', 'Fn', 'MetaLeft', 'Alt', 'Space', 'Alt', 'Ctrl'];


//let keyboard=[49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47]
// document.onkeypress = function(event){
//     console.log(KeyboardEvent.key)
//     keyboard.push(event.key)
//     console.log(keyboard) //просмотр кодов клавиш (коды цифр и текста в массив )
// }

function addKeyboard(){
    let key=''; //создаем пустую клавишу
    for(let i=0; i<keyboard.length; i++){ //сгружаем туда наши клавиши с массива
    if(keyboard[i]=='backspace'){
        key+='<div class="key back" data="Backspace">'+keyboard[i]+'</div>'; //задаем им класс и дата-атрибут
    }
    else if(keyboard[i]=='`' || keyboard[i]=='ё' || keyboard[i]=='Ё'){
        key+='<div class="key quote" data="'+keyboard[i]+'">'+keyboard[i]+'</div>'; //специфические клавиши
    }
    else if(keyboard[i]=='Tab'){
        key+='<div class="key tab" data="'+keyboard[i]+'">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='\\' || (keyboard[i]=='/' && keyboard[0]!='`') || keyboard[i]=='|'){
        key+='<div class="key slash" data="Backslash">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='Caps'){
        key+='<div class="key caps" data="CapsLock">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='Enter'){
        key+='<div class="key enter" data="Enter">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='Shift' && i<45){
        key+='<div class="key shiftLeft" data="ShiftLeft">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='Shift' && i>45){
        key+='<div class="key shiftRight" data="ShiftRight">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='Ctrl' && i<55){
        key+='<div class="key CtrlLeft" data="ControlLeft">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='Ctrl' && i>55){
        key+='<div class="key CtrlRight" data="ControlRight">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='Alt' && i<58){
        key+='<div class="key AltLeft" data="AltLeft">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='Alt' && i>57){
        key+='<div class="key AltRight" data="AltRight">'+keyboard[i]+'</div>'; 
    }
    else{
        key+='<div class="key '+keyboard[i]+'" data="'+keyboard[i]+'">'+keyboard[i]+'</div>'; //делаем конкатенацию (пишем в новый див нашу клавишу, передавая опред. код)

    }}
    document.querySelector('.keyboard').innerHTML = key; //находим в доке наш новый класс
}

addKeyboard();

function addArrow(){
    //добавляем стрелки
    let arrowKey=['left', 'up', 'down', 'right']
    let arrow =document.createElement('div')
    arrow.className = "arrow";
    div.append(arrow)

    let key=''; 
    for(let i=0; i<arrowKey.length; i++){ 
        key+='<div class='+arrowKey[i]+'>'+arrowKey[i]+'</div>'; 
    }
    document.querySelector('.arrow').innerHTML = key; 
}
addArrow()

const key = document.querySelectorAll('.key')

document.addEventListener('keyup', function(event){
    key.forEach(item=>item.classList.remove('active'))})

//активность стрелок
const left = document.querySelector('.left')
const up = document.querySelector('.up')
const down = document.querySelector('.down')
const right = document.querySelector('.right')

const arrow = [left, right, up, down]

document.addEventListener('keyup', function(event){
    arrow.forEach(item=>item.classList.remove('active'))})

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 37){ left.classList.add('active')}
    else{left.classList.remove('active')
    key.forEach(item=>item.classList.remove('active'))}})

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 38){ up.classList.add('active')}
    else{up.classList.remove('active')
    key.forEach(item=>item.classList.remove('active'))}})

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 39){ right.classList.add('active')}
    else{right.classList.remove('active')
    key.forEach(item=>item.classList.remove('active'))}})

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 40){ down.classList.add('active')}
    else{down.classList.remove('active')
    key.forEach(item=>item.classList.remove('active'))}})


//активность остальных кнопок 
document.addEventListener('keydown', function(event) {
    
        console.log(event.code)
        console.log(event.keyCode)
        console.log(event.key)
        
    
    // key.forEach(item=>item.classList.remove('active'))
    key.forEach(item=>{
        if(item.classList.contains("key")==true && item.classList.contains("active")==false){
    document.querySelector('.key[data="'+event.key+'"]').classList.add('active') //когда срабатывает событие и мы получаем код клавиши, подставляем этот код в дата-атрибут и добавляем класс к клавише
    }
    if(item.classList.contains("active")==true){
        // item.classList.remove('active')
        console.log('ytr')
    }
    // else if(item.classList.contains("key")==false && item.classList.contains("active")==false){
    //     document.querySelector('.key[data="'+event.code+'"]').classList.add('active') //когда срабатывает событие и мы получаем код клавиши, подставляем этот код в дата-атрибут и добавляем класс к клавише
    //     }
})})


//смена раскладки

//виды клавиатуры
//английский
let keyboardEng = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
    'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift',
    'Ctrl', 'Fn', 'MetaLeft', 'Alt', 'Space', 'Alt', 'Ctrl'];

let keyboardEngCaps = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
    'Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift',
    'Ctrl', 'Fn', 'MetaLeft', 'Alt', 'Space', 'Alt', 'Ctrl'];

let keyboardEngShift = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
    'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift',
    'Ctrl', 'Fn', 'MetaLeft', 'Alt', 'Space', 'Alt', 'Ctrl'];

let keyboardEngCapsShift = [
    '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '|',
    'Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift',
    'Ctrl', 'Fn', 'MetaLeft', 'Alt', 'Space', 'Alt', 'Ctrl'];

//русская

let keyboardRus = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
    'Caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift',
    'Ctrl', 'Fn', 'MetaLeft', 'Alt', 'Space', 'Alt', 'Ctrl'];

let keyboardRusCaps = [
    'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\',
    'Caps', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'Shift',
    'Ctrl', 'Fn', 'MetaLeft', 'Alt', 'Space', 'Alt', 'Ctrl'];

let keyboardRusShift = [
    'ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/',
    'Caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift',
    'Ctrl', 'Fn', 'MetaLeft', 'Alt', 'Space', 'Alt', 'Ctrl'];

let keyboardRusCapsShift = [
    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/',
    'Caps', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'Shift',
    'Ctrl', 'Fn', 'MetaLeft', 'Alt', 'Space', 'Alt', 'Ctrl'];



document.addEventListener('keydown', function(event) {
    if((event.altKey && event.shiftKey && keyboard[0]=='`') || ((event.key=='CapsLock' && keyboard[0]=='Ё'))){ 
        keyboard=keyboardRus
            addKeyboard()
            addArrow()
}   
    else if(event.key=='CapsLock'  && keyboard[0]=='ё'){ 
    keyboard=keyboardRusCaps
        addKeyboard()
        addArrow()
}    
else if((event.key=='Shift'  && keyboard[0]=='ё')){ 
    keyboard=keyboardRusShift
        addKeyboard()
        addArrow()
}
    else if((event.key=='Shift'  && keyboard[0]=='Ё')){ 
    keyboard=keyboardRusCapsShift
        addKeyboard()
        addArrow()
}

    else if(event.altKey && event.shiftKey && keyboard[0]=='ё'){ 
    keyboard = [
            '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
            'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
            'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
            'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift',
            'Ctrl', 'Fn', 'MetaLeft', 'Alt', 'Space', 'Alt', 'Ctrl'];
            
        addKeyboard()
        addArrow()
}    
    else if(event.key=='CapsLock'  && keyboard[0]=='`'){ 
    keyboardEngCaps = [
        '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
        'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
        'Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
        'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift',
        'Ctrl', 'Fn', 'MetaLeft', 'Alt', 'Space', 'Alt', 'Ctrl'];
        keyboard=keyboardEngCaps
        addKeyboard()
        addArrow()
}    
    else if(event.key=='CapsLock'  && keyboard[0]=='ё'){ 
    keyboard = [
        'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
        'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\',
        'Caps', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
        'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'Shift',
        'Ctrl', 'Fn', 'MetaLeft', 'Alt', 'Space', 'Alt', 'Ctrl'];
         
        addKeyboard()
        addArrow()
}    
 
else if(event.key=='Shift'  && keyboard==keyboardEngCaps){ 
    keyboardShiftEnCaps = [
        '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace',
        'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '|',
        'Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
        'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift',
        'Ctrl', 'Fn', 'MetaLeft', 'Alt', 'Space', 'Alt', 'Ctrl'];
        keyboard=keyboardShiftEnCaps
        addKeyboard()
        addArrow()
}    
})



document.addEventListener('keyup', function(event){
    if(keyboard==keyboardShiftEnCaps){
        keyboard=keyboardEngCaps
        addKeyboard()
        addArrow()
        console.log('up!')
    }
})



//набор текста при клике мыши
key.forEach(function(item){
    item.onclick = clickMouse})

function clickMouse(){
    key.forEach(item=>item.classList.remove('active'))
    this.classList.add('active')
    
    key.forEach(item=>{
        if(item.classList.contains("active")==true && item.getAttribute('data')=='Space' ){
        text.value+=' '}
        else if(item.classList.contains("active")==true && item.getAttribute('data')=='Backspace' ){
        text.value+=text.value.slice([text.value.length], -1)}
        else if(item.classList.contains("active")==true){text.value+=item.getAttribute('data')
}})}




//активация остальных клавиш
const quote = document.querySelector('.quote')
const back = document.querySelector('.back')
const tab = document.querySelector('.tab')
const slash = document.querySelector('.slash')
const caps = document.querySelector('.caps')
const enter = document.querySelector('.enter')
const shiftLeft = document.querySelector('.shiftLeft')
const shiftRight = document.querySelector('.shiftRight')
const ctrlLeft = document.querySelectorAll('.ControlLeft')
const fn = document.querySelector('.Fn')
const win = document.querySelector('.MetaLeft')
const altLeft = document.querySelector('.AltLeft')
const space = document.querySelector('.space')
const altRight = document.querySelector('.AltRight')
const ctrlRight = document.querySelector('.ControlRight')

const others = [slash, caps, shiftLeft, shiftRight, ctrlLeft, fn, win, altLeft, space, altRight, ctrlRight]

//набор текста при клике мыши
// others.forEach(function(item){
//     item.onclick = clickMouse})

// function clickMouse(){
//     others.forEach(item=>item.classList.remove('active'))
//     this.classList.add('active') 
    
//     others.forEach(item=>{
//         if(item.classList.contains("active")==true){
//     text.value+=item.getAttribute('data')
// }})}

// document.addEventListener('keydown', function(event) {
//     // console.log(event.code);
//     console.log(event.key);
//     // key.forEach(item=>item.classList.remove('active'))
//     others.forEach(item=>{
//         if(item.classList.contains("active")==false){
//             document.querySelector('.key[data="'+event.key+'"]').classList.add('active') 
//             //когда срабатывает событие и мы получаем код клавиши, подставляем этот код в дата-атрибут и добавляем класс к клавише
//     }
// })})

// document.addEventListener('keydown', function(event) {
//     if(event.keyCode === 13){ enter.classList.add('active')}
//     else{enter.classList.remove('active')}})

// // document.addEventListener('keydown', function(event) {
// //     if(event.keyCode === 192){ quote.classList.add('active')}
// //     else{quote.classList.remove('active')
// //     key.forEach(item=>item.classList.remove('active'))}})

// document.addEventListener('keydown', function(event) {
//     if(event.keyCode === 8){ back.classList.add('active')}
//     else{back.classList.remove('active')}})
// //     key.forEach(item=>item.classList.remove('active'))}})

// document.addEventListener('keydown', function(event) {
//     if(event.keyCode === 9){ tab.classList.add('active')}
//     else{tab.classList.remove('active')}})
// //     key.forEach(item=>item.classList.remove('active'))}})

// document.addEventListener('keydown', function(event) {
//     if(event.keyCode === 220){ slash.classList.add('active')}
//     else{slash.classList.remove('active')}})
// //     key.forEach(item=>item.classList.remove('active'))}})

// document.addEventListener('keydown', function(event) {
//     if(event.keyCode === 20){ caps.classList.add('active')}
//     else{caps.classList.remove('active')}})
// //     key.forEach(item=>item.classList.remove('active'))}})

// document.addEventListener('keydown', function(event) {
//     if(event.code === "ShiftLeft"){ shiftLeft.classList.add('active')}
//     else{shiftLeft.classList.remove('active')}})
// //     key.forEach(item=>item.classList.remove('active'))}})

// document.addEventListener('keydown', function(event) {
//     if(event.code === "ShiftRight"){ shiftRight.classList.add('active')}
//     else{shiftRight.classList.remove('active')}})
// //     key.forEach(item=>item.classList.remove('active'))}})

// document.addEventListener('keydown', function(event) {
//     if(event.code === "ControlLeft"){ ctrlLeft.classList.add('active')}
//     else{ctrlLeft.classList.remove('active')}})

// document.addEventListener('keydown', function(event) {
//     if(event.code === "ControlRight"){ ctrlRight.classList.add('active')}
//     else{ctrlRight.classList.remove('active')}})

// document.addEventListener('keydown', function(event) {
//     if(event.code === "AltLeft"){ altLeft.classList.add('active')}
//     else{altLeft.classList.remove('active')}})

// document.addEventListener('keydown', function(event) {
//     if(event.code === "AltRight"){ altRight.classList.add('active')}
//     else{altRight.classList.remove('active')}})
// //     key.forEach(item=>item.classList.remove('active'))}})
    
// document.addEventListener('keydown', function(event) {
//     if(event.keyCode === 91){ win.classList.add('active')}
//     else{win.classList.remove('active')}})
// //     key.forEach(item=>item.classList.remove('active'))}})

// document.addEventListener('keydown', function(event) {
//     if(event.code === "Space"){ space.classList.add('active')}
//     else{space.classList.remove('active')}})
// //     key.forEach(item=>item.classList.remove('active'))}})


//смена языка
