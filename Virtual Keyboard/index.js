
let div = document.createElement('div');
div.className = "keyboard";
document.body.append(div);

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
const key = document.querySelectorAll('.key')


document.onkeypress = function(event){
    // console.log(event.code);
    // console.log(event.keyCode);
    key.forEach(item=>item.classList.remove('active'))
    document.querySelector('.key[data="'+event.keyCode+'"]').classList.add('active') //когда срабатывает событие и мы получаем код клавиши, подставляем этот код в дата-атрибут и добавляем класс к клавише

}


key.forEach(function(item){
    item.onclick = clickMouse})

function clickMouse(){
    key.forEach(item=>item.classList.remove('active'))
    this.classList.add('active')
}


// let others = []
// document.onkeypress = function(event){
//     console.log(event)
//     others.push(event.code)
//     console.log(others) //просмотр кодов клавиш (коды цифр и текста в массив )
// }
// document.addEventListener('keydown', function(event) {
//     if (event.code == 'Backspace') {
//       alert('Отменить!')
//     }
//   });

let others = [0, ]
//добавляем кнопку бэкспэйс
function back(){
    let plus = document.querySelector('div[data="61"]') //перед клавишей +
    let back =document.createElement('div')
    back.className = "back";
    plus.after(back);
    back='backspace'; 
    document.querySelector('.back').innerHTML = back;
}
back()

function quote(){
    let one = document.querySelector('div[data="49"]') //перед клавишей 1
    let quote =document.createElement('div')
    quote.className = "quote";
    one.before(quote);
    quote=String.fromCharCode(96) 
    document.querySelector('.quote').innerHTML = quote;
}
quote()

function tab(){
    let q = document.querySelector('div[data="113"]') 
    let tab =document.createElement('div')
    tab.className = "tab";
    q.before(tab);
    tab='Tab'
    document.querySelector('.tab').innerHTML = tab;
}
tab()

function slash(){
    let a = document.querySelector('div[data="97"]') 
    let slash =document.createElement('div')
    slash.className = "slash";
    a.before(slash);
    slash=String.fromCharCode(92); 
    document.querySelector('.slash').innerHTML = slash;
}
slash()

function caps(){
    let slash = document.querySelector('.slash') 
    let caps =document.createElement('div')
    caps.className = "caps";
    slash.after(caps);
    caps='Caps'; 
    document.querySelector('.caps').innerHTML = caps;
}
caps()

function enter(){
    let x = document.querySelector('div[data="39"]') 
    let enter =document.createElement('div')
    enter.className = "enter";
    x.after(enter);
    enter="Enter";
    document.querySelector('.enter').innerHTML = enter;
}
enter()

function shiftLeft(){
    let enter =document.querySelector('.enter') 
    let shiftLeft =document.createElement('div')
    shiftLeft.className = "shiftLeft";
    enter.after(shiftLeft);
    shiftLeft="Shift";
    document.querySelector('.shiftLeft').innerHTML = shiftLeft;
}
shiftLeft()

function shiftRight(){
    let sl = document.querySelector('div[data="47"]') 
    let shiftRight =document.createElement('div')
    shiftRight.className = "shiftRight";
    sl.after(shiftRight);
    shiftRight="Shift";
    document.querySelector('.shiftRight').innerHTML = shiftRight;
}
shiftRight()