// let div = document.createElement('div');
//   div.className = "text";
//   div.innerHTML = "<h1>Hello, Nik!</h1>";
//   document.body.append(div);

//   let div2=div.cloneNode(true)

//   div2.innerHTML = "<h1>Hello, Vas!</h1>";
// //   document.body.append(div);
// div.after(div2)

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