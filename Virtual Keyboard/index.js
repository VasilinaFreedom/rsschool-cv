//оболочка для клавы
let wrapp = document.createElement('div');
wrapp.className = "wrapper";
document.body.append(wrapp);

//сама клава
let div = document.createElement('div');
div.className = "keyboard";
wrapp.append(div);

//клавиши букв и цифр
let keyboard=[49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47]
// document.onkeypress = function(event){
//     // console.log(event)
//     keyboard.push(event.keyCode)
//     console.log(keyboard) //просмотр кодов клавиш (коды цифр и текста в массив )
// }

function addNumAndLett(){
    let key=''; //создаем пустую клавишу
    for(let i=0; i<keyboard.length; i++){ //сгружаем туда наши клавиши с массива
        key+='<div class="key" data="'+keyboard[i]+'">'+String.fromCharCode(keyboard[i])+'</div>'; //делаем конкатенацию (пишем в новый див нашу клавишу, передавая опред. код)
    }
    document.querySelector('.keyboard').innerHTML = key; //находим в доке наш новый класс
}

addNumAndLett();


//добавляем кнопку бэкспэйс
function backKey(){
    let plus = document.querySelector('div[data="61"]') //перед клавишей +
    let back =document.createElement('div')
    back.className = "back";
    plus.after(back);
    back='backspace'; 
    document.querySelector('.back').innerHTML = back;
}
backKey()

function quoteKey(){
    let one = document.querySelector('div[data="49"]') //перед клавишей 1
    let quote =document.createElement('div')
    quote.className = "quote";
    one.before(quote);
    quote=String.fromCharCode(96) 
    document.querySelector('.quote').innerHTML = quote;
}
quoteKey()

function tabKey(){
    let q = document.querySelector('div[data="113"]') 
    let tab =document.createElement('div')
    tab.className = "tab";
    q.before(tab);
    tab='Tab'
    document.querySelector('.tab').innerHTML = tab;
}
tabKey()

function slashKey(){
    let a = document.querySelector('div[data="97"]') 
    let slash =document.createElement('div')
    slash.className = "slash";
    a.before(slash);
    slash=String.fromCharCode(92); 
    document.querySelector('.slash').innerHTML = slash;
}
slashKey()

function capsKey(){
    let slash = document.querySelector('.slash') 
    let caps =document.createElement('div')
    caps.className = "caps";
    slash.after(caps);
    caps='Caps'; 
    document.querySelector('.caps').innerHTML = caps;
}
capsKey()

function enterKey(){
    let x = document.querySelector('div[data="39"]') 
    let enter =document.createElement('div')
    enter.className = "enter";
    x.after(enter);
    enter="Enter";
    document.querySelector('.enter').innerHTML = enter;
}
enterKey()

function shiftLeftKey(){
    let enter =document.querySelector('.enter') 
    let shiftLeft =document.createElement('div')
    shiftLeft.className = "shiftLeft";
    enter.after(shiftLeft);
    shiftLeft="Shift";
    document.querySelector('.shiftLeft').innerHTML = shiftLeft;
}
shiftLeftKey()

function shiftRightKey(){
    let sl = document.querySelector('div[data="47"]') 
    let shiftRight =document.createElement('div')
    shiftRight.className = "shiftRight";
    sl.after(shiftRight);
    shiftRight="Shift";
    document.querySelector('.shiftRight').innerHTML = shiftRight;
}
shiftRightKey()




//добавление последней строки клавиатуры

let lastString =document.createElement('div')
lastString.className = "lastString";
div.append(lastString)

let lastKey = ['Ctrl', 'Fn', 'win', 'Alt', 'space', 'Alt', 'Ctrl']
let last =document.createElement('div')
last.className = "last";
lastString.append(last)

function addLastStr(){
    
    let key=''; //создаем пустую клавишу
    for(let i=0; i<lastKey.length; i++){ //сгружаем туда наши клавиши с массива
        key+='<div class="'+lastKey[i]+'">'+lastKey[i]+'</div>'; //делаем конкатенацию (пишем в новый див нашу клавишу, передавая опред. код)
    }

    document.querySelector('.last').innerHTML = key; //находим в доке наш новый класс
}
addLastStr()


let arrowKey=['left', 'up', 'down', 'right']
let arrow =document.createElement('div')
arrow.className = "arrow";
lastString.append(arrow)

function addArrow(){
    let key=''; 
    for(let i=0; i<arrowKey.length; i++){ 
        key+='<div class="key '+arrowKey[i]+'">'+arrowKey[i]+'</div>'; 
    }
    document.querySelector('.arrow').innerHTML = key; 
}
addArrow()

//активация остальных клавиш
const quote = document.querySelector('.quote')
const back = document.querySelector('.back')
const tab = document.querySelector('.tab')
const slash = document.querySelector('.slash')
const caps = document.querySelector('.caps')
const enter = document.querySelector('.enter')
const shiftLeft = document.querySelector('.shiftLeft')
const shiftRight = document.querySelector('.shiftRight')
const ctrl = document.querySelectorAll('.Ctrl')
const fn = document.querySelector('.Fn')
const win = document.querySelector('.win')
const alt = document.querySelector('.Alt')
const space = document.querySelector('.space')
const altRight = document.querySelector('.altRight')
const ctrlRight = document.querySelector('.ctrlRight')
const left = document.querySelector('.left')
const up = document.querySelector('.up')
const down = document.querySelector('.down')
const right = document.querySelector('.right')

// function activeKey(){
//     if(event.keyCode === 13){
//         enter.classList.add('active')
// }
// }
// enter.addEventListener('keyup', activeKey)
const key = document.querySelectorAll('.key')


document.onkeypress = function(event){
    // console.log(event.code);
    // console.log(event.keyCode);
    key.forEach(item=>item.classList.remove('active'))
    key.forEach(item=>{
    if(item.classList.contains("key")==true){
    document.querySelector('.key[data="'+event.keyCode+'"]').classList.add('active') //когда срабатывает событие и мы получаем код клавиши, подставляем этот код в дата-атрибут и добавляем класс к клавише
    }
    
})}



key.forEach(function(item){
    item.onclick = clickMouse})

function clickMouse(){
    key.forEach(item=>item.classList.remove('active'))
    this.classList.add('active')
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 13){ enter.classList.add('active')}
    else{enter.classList.remove('active')
    key.forEach(item=>item.classList.remove('active'))}})


document.addEventListener('keydown', function(event) {
    if(event.keyCode === 192){ quote.classList.add('active')}
    else{quote.classList.remove('active')
    key.forEach(item=>item.classList.remove('active'))}})

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 8){ back.classList.add('active')}
    else{back.classList.remove('active')
    key.forEach(item=>item.classList.remove('active'))}})

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 9){ tab.classList.add('active')}
    else{tab.classList.remove('active')
    key.forEach(item=>item.classList.remove('active'))}})

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 220){ slash.classList.add('active')}
    else{slash.classList.remove('active')
    key.forEach(item=>item.classList.remove('active'))}})

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 20){ caps.classList.add('active')}
    else{caps.classList.remove('active')
    key.forEach(item=>item.classList.remove('active'))}})

document.addEventListener('keydown', function(event) {
    if(event.code === "ShiftLeft"){ shiftLeft.classList.add('active')}
    else{shiftLeft.classList.remove('active')
    key.forEach(item=>item.classList.remove('active'))}})

document.addEventListener('keydown', function(event) {
    if(event.code === "ShiftRight"){ shiftRight.classList.add('active')}
    else{shiftRight.classList.remove('active')
    key.forEach(item=>item.classList.remove('active'))}})

// document.addEventListener('keydown', function(event) {
//     if(event.code === "ControlLeft"){ shiftLeft.classList.add('active')}
//     else{shiftLeft.classList.remove('active')}})

document.addEventListener('keydown', function(event) {
    if(event.code === "ShiftLeft"){ shiftLeft.classList.add('active')}
    else{shiftLeft.classList.remove('active')
    key.forEach(item=>item.classList.remove('active'))}})
    
document.addEventListener('keydown', function(event) {
    if(event.keyCode === 91){ win.classList.add('active')}
    else{win.classList.remove('active')
    key.forEach(item=>item.classList.remove('active'))}})

document.addEventListener('keydown', function(event) {
    if(event.code === "Space"){ space.classList.add('active')}
    else{space.classList.remove('active')
    key.forEach(item=>item.classList.remove('active'))}})

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

    document.addEventListener('keydown', function(event) {
        console.log(event)
    })
