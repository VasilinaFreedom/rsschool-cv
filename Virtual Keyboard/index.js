//оболочка для клавы
let wrapp = document.createElement('div');
wrapp.className = "wrapper";
document.body.append(wrapp);

//сама клава
let div = document.createElement('div');
div.className = "keyboard";
wrapp.append(div);

//клавиши букв и цифр
let keyboard = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
    'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift',
    'Ctrl', 'Fn', 'win', 'Alt', 'space', 'Alt', 'Ctrl'];
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
        key+='<div class="key back" data="'+keyboard[i]+'">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='`'){
        key+='<div class="key quote" data="'+keyboard[i]+'">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='Tab'){
        key+='<div class="key tab" data="'+keyboard[i]+'">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='\\'){
        key+='<div class="key slash" data="'+keyboard[i]+'">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='Caps'){
        key+='<div class="key caps" data="'+keyboard[i]+'">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='Enter'){
        key+='<div class="enter" data="'+keyboard[i]+'">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='Shift' && i<45){
        key+='<div class="key shiftLeft" data="'+keyboard[i]+'">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='Shift' && i>45){
        key+='<div class="key shiftRight" data="'+keyboard[i]+'">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='Ctrl' && i<55){
        key+='<div class="key CtrlLeft" data="'+keyboard[i]+'">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='Ctrl' && i>55){
        key+='<div class="key CtrlRight" data="'+keyboard[i]+'">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='Alt' && i<58){
        key+='<div class="key AltLeft" data="'+keyboard[i]+'">'+keyboard[i]+'</div>'; 
    }
    else if(keyboard[i]=='Alt' && i>58){
        key+='<div class="key AltRight" data="'+keyboard[i]+'">'+keyboard[i]+'</div>'; 
    }
    else{
        key+='<div class="key '+keyboard[i]+'" data="'+keyboard[i]+'">'+keyboard[i]+'</div>'; //делаем конкатенацию (пишем в новый див нашу клавишу, передавая опред. код)

    }}
    document.querySelector('.keyboard').innerHTML = key; //находим в доке наш новый класс
}

addKeyboard();

//добавляем стрелки
let arrowKey=['left', 'up', 'down', 'right']
let arrow =document.createElement('div')
arrow.className = "arrow";
div.append(arrow)

function addArrow(){
    let key=''; 
    for(let i=0; i<arrowKey.length; i++){ 
        key+='<div class='+arrowKey[i]+'>'+arrowKey[i]+'</div>'; 
    }
    document.querySelector('.arrow').innerHTML = key; 
}
addArrow()

const key = document.querySelectorAll('.key')

//активность стрелок
const left = document.querySelector('.left')
const up = document.querySelector('.up')
const down = document.querySelector('.down')
const right = document.querySelector('.right')

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
    // console.log(event.code);
    console.log(event.key);
    // key.forEach(item=>item.classList.remove('active'))
    key.forEach(item=>{
        if(item.classList.contains("key")==true){
    document.querySelector('.key[data="'+event.key+'"]').classList.add('active') //когда срабатывает событие и мы получаем код клавиши, подставляем этот код в дата-атрибут и добавляем класс к клавише
    }
})})

//поле ввода
const text = document.createElement('textarea');
text.rows = 16;
text.cols = 145;
text.placeholder = 'Press Shift+Alt to change the language...';
text.autofocus='autofocus';
text.value=''
text.className = "text";
wrapp.append(text);
// placeholder="Your request..." value="" autocomplete="off" autofocus="autofocus"


//набор текста при клике мыши
key.forEach(function(item){
    item.onclick = clickMouse})

function clickMouse(){
    key.forEach(item=>item.classList.remove('active'))
    this.classList.add('active')
    
    key.forEach(item=>{
        if(item.classList.contains("active")==true){
    text.value+=item.getAttribute('data')
}})}

// //добавляем кнопку бэкспэйс
// function backKey(){
//     let plus = document.querySelector('div[data="61"]') //перед клавишей +
//     let back =document.createElement('div')
//     back.className = "back";
//     plus.after(back);
//     back='backspace'; 
//     document.querySelector('.back').innerHTML = back;
// }
// backKey()

// function quoteKey(){
//     let one = document.querySelector('div[data="49"]') //перед клавишей 1
//     let quote =document.createElement('div')
//     quote.className = "quote";
//     one.before(quote);
//     quote=String.fromCharCode(96) 
//     document.querySelector('.quote').innerHTML = quote;
// }
// quoteKey()

// function tabKey(){
//     let q = document.querySelector('div[data="113"]') 
//     let tab =document.createElement('div')
//     tab.className = "tab";
//     q.before(tab);
//     tab='Tab'
//     document.querySelector('.tab').innerHTML = tab;
// }
// tabKey()

// function slashKey(){
//     let a = document.querySelector('div[data="97"]') 
//     let slash =document.createElement('div')
//     slash.className = "slash";
//     a.before(slash);
//     slash=String.fromCharCode(92); 
//     document.querySelector('.slash').innerHTML = slash;
// }
// slashKey()

// function capsKey(){
//     let slash = document.querySelector('.slash') 
//     let caps =document.createElement('div')
//     caps.className = "caps";
//     slash.after(caps);
//     caps='Caps'; 
//     document.querySelector('.caps').innerHTML = caps;
// }
// capsKey()

// function enterKey(){
//     let x = document.querySelector('div[data="39"]') 
//     let enter =document.createElement('div')
//     enter.className = "enter";
//     x.after(enter);
//     enter="Enter";
//     document.querySelector('.enter').innerHTML = enter;
// }
// enterKey()

// function shiftLeftKey(){
//     let enter =document.querySelector('.enter') 
//     let shiftLeft =document.createElement('div')
//     shiftLeft.className = "shiftLeft";
//     enter.after(shiftLeft);
//     shiftLeft="Shift";
//     document.querySelector('.shiftLeft').innerHTML = shiftLeft;
// }
// shiftLeftKey()

// function shiftRightKey(){
//     let sl = document.querySelector('div[data="47"]') 
//     let shiftRight =document.createElement('div')
//     shiftRight.className = "shiftRight";
//     sl.after(shiftRight);
//     shiftRight="Shift";
//     document.querySelector('.shiftRight').innerHTML = shiftRight;
// }
// shiftRightKey()




// //добавление последней строки клавиатуры

// let lastString =document.createElement('div')
// lastString.className = "lastString";
// div.append(lastString)

// let lastKey = ['CtrlLeft', 'Fn', 'win', 'AltLeft', 'space', 'AltRight', 'CtrlRight']
// let last =document.createElement('div')
// last.className = "last";
// lastString.append(last)

// function addLastStr(){
    
//     let key=''; //создаем пустую клавишу
//     for(let i=0; i<lastKey.length; i++){ //сгружаем туда наши клавиши с массива
//         key+='<div class="'+lastKey[i]+'">'+lastKey[i]+'</div>'; //делаем конкатенацию (пишем в новый див нашу клавишу, передавая опред. код)
//     }

//     document.querySelector('.last').innerHTML = key; //находим в доке наш новый класс
// }
// addLastStr()



//активация остальных клавиш
const quote = document.querySelector('.quote')
const back = document.querySelector('.back')
const tab = document.querySelector('.tab')
const slash = document.querySelector('.slash')
const caps = document.querySelector('.caps')
const enter = document.querySelector('.enter')
const shiftLeft = document.querySelector('.shiftLeft')
const shiftRight = document.querySelector('.shiftRight')
const ctrlLeft = document.querySelectorAll('.CtrlLeft')
const fn = document.querySelector('.Fn')
const win = document.querySelector('.win')
const altLeft = document.querySelector('.AltLeft')
const space = document.querySelector('.space')
const altRight = document.querySelector('.AltRight')
const ctrlRight = document.querySelector('.CtrlRight')

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 13){ enter.classList.add('active')}
    else{enter.classList.remove('active')}})

// document.addEventListener('keydown', function(event) {
//     if(event.keyCode === 192){ quote.classList.add('active')}
//     else{quote.classList.remove('active')
//     key.forEach(item=>item.classList.remove('active'))}})

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 8){ back.classList.add('active')}
    else{back.classList.remove('active')}})
//     key.forEach(item=>item.classList.remove('active'))}})

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 9){ tab.classList.add('active')}
    else{tab.classList.remove('active')}})
//     key.forEach(item=>item.classList.remove('active'))}})

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 220){ slash.classList.add('active')}
    else{slash.classList.remove('active')}})
//     key.forEach(item=>item.classList.remove('active'))}})

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 20){ caps.classList.add('active')}
    else{caps.classList.remove('active')}})
//     key.forEach(item=>item.classList.remove('active'))}})

document.addEventListener('keydown', function(event) {
    if(event.code === "ShiftLeft"){ shiftLeft.classList.add('active')}
    else{shiftLeft.classList.remove('active')}})
//     key.forEach(item=>item.classList.remove('active'))}})

document.addEventListener('keydown', function(event) {
    if(event.code === "ShiftRight"){ shiftRight.classList.add('active')}
    else{shiftRight.classList.remove('active')}})
//     key.forEach(item=>item.classList.remove('active'))}})

document.addEventListener('keydown', function(event) {
    if(event.code === "ControlLeft"){ ctrlLeft.classList.add('active')}
    else{ctrlLeft.classList.remove('active')}})

document.addEventListener('keydown', function(event) {
    if(event.code === "ControlRight"){ ctrlRight.classList.add('active')}
    else{ctrlRight.classList.remove('active')}})

document.addEventListener('keydown', function(event) {
    if(event.code === "AltLeft"){ altLeft.classList.add('active')}
    else{altLeft.classList.remove('active')}})

document.addEventListener('keydown', function(event) {
    if(event.code === "AltRight"){ altRight.classList.add('active')}
    else{altRight.classList.remove('active')}})
//     key.forEach(item=>item.classList.remove('active'))}})
    
document.addEventListener('keydown', function(event) {
    if(event.keyCode === 91){ win.classList.add('active')}
    else{win.classList.remove('active')}})
//     key.forEach(item=>item.classList.remove('active'))}})

document.addEventListener('keydown', function(event) {
    if(event.code === "Space"){ space.classList.add('active')}
    else{space.classList.remove('active')}})
//     key.forEach(item=>item.classList.remove('active'))}})



    document.addEventListener('keydown', function(event) {
        console.log(event.code)
        console.log(event.keyCode)
    })



//     //добавляем поле ввода



        

// //   var kb = {area: document.querySelector('.text')

// //   };
// //   function func(select) {

// //     kb.area.value += select.value;
// //     select.selectedIndex = 0;

// //   }