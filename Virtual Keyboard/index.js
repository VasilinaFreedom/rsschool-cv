alert('ОС: Windows')

const body = document.querySelector('body');
//оболочка для клавы
const wrapp = document.createElement('div');
wrapp.className = "wrapper";
document.body.append(wrapp);

//сама клава
let div = document.createElement('div');
div.className = "keyboard";
wrapp.append(div);

//поле ввода
const text = document.createElement('textarea');
text.rows = 8;
text.cols = 138;
text.placeholder = 'Press Ctrl+Alt to change the language...';
text.autofocus='autofocus';
text.value=''
text.className = "text";
wrapp.append(text);


const eventCode = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const eventKeyCode = [
  96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8,
  9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 127,
  20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13,
  16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38, 16,
  17, 0, 18, 32, 18, 37, 40, 39, 17];


//русская раскладка
const keyboardRus = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', '|',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift',
    'Ctrl', 'win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
  const keyboardRusShift = [
    'Ё', '!', "'", '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', '|',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift',
    'Ctrl', 'win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];
  const keyboardRusCapsLock = [
    'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', '|',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift',
    'Ctrl', 'win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];


//английская раскладка
const keyboardEng = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', '|',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift',
  'Ctrl', 'win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];

const keyboardEngCapsLock = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '|', '/',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '?', '↑', 'Shift',
  'Ctrl', 'win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];

const keyboardEngShift = [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', '/',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', "'", 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift',
    'Ctrl', 'win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];




//заполнение клавиатуры
let langMarker;

function markerLang() {
  if (localStorage.getItem('localVariable') == 'true') {
    langMarker = true;
    langEng();
  } else {
    langMarker = false;
    langRus();
  }
}
markerLang();

//переключение на русский ctrl+Alt
function langRus() {
    document.addEventListener('keydown', (event) => {
      if (event.keyCode == 17) flag = true;
      document.addEventListener('keyup', (event) => {
        if (event.keyCode == 18 && flag && !langMarker) {
          if (!CapsLock) {
            btnRus.forEach((item) => item.classList.add('hidden'));
            btnRusCapsLock.forEach((item) => item.classList.add('hidden'));
            btnEngCapsLock.forEach((item) => item.classList.remove('hidden'));
          } else {
            btnRus.forEach((item) => item.classList.add('hidden'));
            btnRusCapsLock.forEach((item) => item.classList.add('hidden'));
            btnEngDownCapsLock.forEach((item) => item.classList.remove('hidden'));
            btnRusDownCapsLock.forEach((item) => item.classList.add('hidden'));
          }
          flag = false;
          localStorage.setItem('localVariable', true);
          markerLang();
        }
      });
    });
  }

// переключение на англ.
function langEng() {
    document.addEventListener('keydown', (event) => {
      if (event.keyCode == 17) flag = true;
      document.addEventListener('keyup', (event) => {
        if (event.keyCode == 18 && flag && langMarker) {
          if (!CapsLock) {
            btnEng.forEach((item) => item.classList.add('hidden'));
            btnEngCapsLock.forEach((item) => item.classList.add('hidden'));
            btnRusCapsLock.forEach((item) => item.classList.remove('hidden'));
          } else {
            btnEng.forEach((item) => item.classList.add('hidden'));
            btnEngCapsLock.forEach((item) => item.classList.add('hidden'));
            btnRusDownCapsLock.forEach((item) => item.classList.remove('hidden'));
            btnEngDownCapsLock.forEach((item) => item.classList.add('hidden'));
          }
          if (event.keyCode == 18 && flag && !langMarker) {
            if (!CapsLock) {
              btnRus.forEach((item) => item.classList.add('hidden'));
              btnRusCapsLock.forEach((item) => item.classList.add('hidden'));
              btnEngCapsLock.forEach((item) => item.classList.remove('hidden'));
            } else {
              btnRus.forEach((item) => item.classList.add('hidden'));
              btnRusCapsLock.forEach((item) => item.classList.add('hidden'));
              btnEngDownCapsLock.forEach((item) => item.classList.remove('hidden'));
              btnRusDownCapsLock.forEach((item) => item.classList.add('hidden'));
            }
          }
          flag = false;
          localStorage.setItem('localVariable', false);
          markerLang();
        }
      });
    });
  }
  
let block = '';

if (langMarker) {
  for (let i = 0; i < 64; i++) {
    block += `<div class="key ${eventCode[i]}" data = "${eventKeyCode[i]}">`
                      + '<div class="eng">'
                          + `<div class="caseUp">${keyboardEng[i]}</div>`
                          + `<div class="caseDown hidden">${keyboardEngShift[i]}</div>`
                          + `<div class="CapsLockDown hidden">${keyboardEngCapsLock[i]}</div>`
                      + '</div>'
                      + '<div class="rus">'
                          + `<div class="caseUp hidden">${keyboardRus[i]}</div>`
                          + `<div class="caseDown hidden">${keyboardRusShift[i]}</div>`
                          + `<div class="CapsLockDown hidden">${keyboardRusCapsLock[i]}</div>`
                      + '</div>'
                  + '</div>';
  }
  document.querySelector('.keyboard').innerHTML = block;
} else {
  for (let i = 0; i < 64; i++) {
    block += `<div class="key ${eventCode[i]}" data = "${eventKeyCode[i]}">`
                      + '<div class="eng">'
                          + `<div class="caseUp hidden">${keyboardEng[i]}</div>`
                          + `<div class="caseDown hidden">${keyboardEngShift[i]}</div>`
                          + `<div class="CapsLockDown hidden">${keyboardEngCapsLock[i]}</div>`
                      + '</div>'

                      + '<div class="rus">'
                          + `<div class="caseUp">${keyboardRus[i]}</div>`
                          + `<div class="caseDown hidden">${keyboardRusShift[i]}</div>`
                          + `<div class="CapsLockDown hidden">${keyboardRusCapsLock[i]}</div>`
                      + '</div>'
                  + '</div>';
  }
  document.querySelector('.keyboard').innerHTML = block;
}


const btnEngCapsLock = document.querySelectorAll('.eng > .caseUp');
const btnEng = document.querySelectorAll('.eng > .caseDown');
const btnEngDownCapsLock = document.querySelectorAll('.eng > .CapsLockDown');
const btnRusCapsLock = document.querySelectorAll('.rus > .caseUp');
const btnRus = document.querySelectorAll('.rus > .caseDown');
const btnRusDownCapsLock = document.querySelectorAll('.rus > .CapsLockDown');

let flag = false;
let CapsLock= false;
let Shift = false;

//особые случаи ввода
function addSimbol(N) {
  switch (N) {
    case 13:
      text.value = text.value.substr(0, text.value.length - 1);
      break;
    case 29: case 42: case 54: case 55: case 56: case 57: case 59: case 63:
      break;
    case 58:
      text.value += ' ';
      break;
    case 41:
      text.value += '\n';
      break;
    case 14:
      text.value += '   ';
      break;
    default:
      if (langMarker) {
        if (Shift && !CapsLock) {
          text.value += keyboardEngShift[N];
        } else if (!Shift && !CapsLock) {
          text.value += keyboardEng[N];
        } if (!Shift && CapsLock) {
          text.value += keyboardEngCapsLock[N];
        } if (Shift && CapsLock) {
          text.value += keyboardEng[N];
        }
      } else {
        if (Shift && !CapsLock) {
          text.value += keyboardRusShift[N];
        } else if (!Shift && !CapsLock) {
          text.value += keyboardRus[N];
        } if (!Shift && CapsLock) {
          text.value += keyboardRusCapsLock[N];
        } if (Shift && CapsLock) {
          text.value += keyboardRus[N];
        }
      }
  }
}

//анимация и шифт
function addAnimationBtn() {
  // eslint-disable-next-line func-names
  document.onkeydown = function (event) {
    event.preventDefault();
    document.querySelector(`.keyboard > .${event.code}`).classList.add('active');
    const B = eventCode.indexOf(event.code);
    addSimbol(B);

    // изменение символов при нажатии шифт
    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
      Shift = true;
      if (langMarker && !CapsLock) {
        btnEngCapsLock.forEach((item) => item.classList.add('hidden'));
        btnEng.forEach((item) => item.classList.remove('hidden'));
      } else if (langMarker && CapsLock) {
        btnEngDownCapsLock.forEach((item) => item.classList.add('hidden'));
        btnEng.forEach((item) => item.classList.add('hidden'));
        btnEngCapsLock.forEach((item) => item.classList.remove('hidden'));
      } else if (!langMarker && !CapsLock) {
        btnRusCapsLock.forEach((item) => item.classList.add('hidden'));
        btnRus.forEach((item) => item.classList.remove('hidden'));
      } else if (!langMarker && CapsLock) {
        btnRusDownCapsLock.forEach((item) => item.classList.add('hidden'));
        btnRus.forEach((item) => item.classList.add('hidden'));
        btnRusCapsLock.forEach((item) => item.classList.remove('hidden'));
      }
    }
  };
}
addAnimationBtn();

// убираем анимацию при отпускании клавиши
function delAnimationBtn() {
  // eslint-disable-next-line func-names
  document.onkeyup = function (event) {
    if (event.keyCode > 7) {
      document.querySelector(`.keyboard > .${event.code}`).classList.remove('active');

      // работа шифта
      if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        Shift = false;
        if (langMarker && !CapsLock) {
          btnEngCapsLock.forEach((item) => item.classList.remove('hidden'));
          btnEng.forEach((item) => item.classList.add('hidden'));
        } else if (langMarker && CapsLock) {
          btnEngDownCapsLock.forEach((item) => item.classList.remove('hidden'));
          btnEngCapsLock.forEach((item) => item.classList.add('hidden'));
        } else if (!langMarker && !CapsLock) {
          btnRusCapsLock.forEach((item) => item.classList.remove('hidden'));
          btnRus.forEach((item) => item.classList.add('hidden'));
        } else if (!langMarker && CapsLock) {
          btnRusDownCapsLock.forEach((item) => item.classList.remove('hidden'));
          btnRusCapsLock.forEach((item) => item.classList.add('hidden'));
        }
      }
    }
  };
}
delAnimationBtn();

// работа CapsLock
function controlCapsLock() {
  document.addEventListener('keydown', (event) => {
    if (event.code == 'CapsLock' && CapsLock) {
    	if (langMarker) {
    		btnEngCapsLock.forEach((item) => item.classList.remove('hidden'));
    		btnEng.forEach((item) => item.classList.add('hidden'));
    		btnEngDownCapsLock.forEach((item) => item.classList.add('hidden'));
    	} else {
    		btnRusCapsLock.forEach((item) => item.classList.remove('hidden'));
    		btnRus.forEach((item) => item.classList.add('hidden'));
    		btnRusDownCapsLock.forEach((item) => item.classList.add('hidden'));
    	}
      CapsLock= false;
    } else if (event.code == 'CapsLock' && !CapsLock) {
      if (langMarker) {
    		btnEngCapsLock.forEach((item) => item.classList.add('hidden'));
    		btnEng.forEach((item) => item.classList.add('hidden'));
    		btnEngDownCapsLock.forEach((item) => item.classList.remove('hidden'));
    	} else {
    		btnRusCapsLock.forEach((item) => item.classList.add('hidden'));
    		btnRus.forEach((item) => item.classList.add('hidden'));
    		btnRusDownCapsLock.forEach((item) => item.classList.remove('hidden'));
    	}
      CapsLock= true;
    }
  });
}
controlCapsLock();

//заполнение при клике
function ClickMouse() {
  // eslint-disable-next-line func-names
  document.querySelector('.keyboard').onclick = function (event) {
    const A = eventKeyCode.indexOf(Number(event.target.getAttribute('data')));
    addSimbol(A);
    if (event.toElement.getAttribute('data') == 20 && CapsLock) {
      if (langMarker) {
        btnEngCapsLock.forEach((item) => item.classList.remove('hidden'));
        btnEng.forEach((item) => item.classList.add('hidden'));
        btnEngDownCapsLock.forEach((item) => item.classList.add('hidden'));
      } else {
        btnRusCapsLock.forEach((item) => item.classList.remove('hidden'));
        btnRus.forEach((item) => item.classList.add('hidden'));
        btnRusDownCapsLock.forEach((item) => item.classList.add('hidden'));
      }
      CapsLock= false;
    } else if (event.toElement.getAttribute('data') == 20 && !CapsLock) {
      if (langMarker) {
        btnEngCapsLock.forEach((item) => item.classList.add('hidden'));
        btnEng.forEach((item) => item.classList.add('hidden'));
        btnEngDownCapsLock.forEach((item) => item.classList.remove('hidden'));
      } else {
        btnRusCapsLock.forEach((item) => item.classList.add('hidden'));
        btnRus.forEach((item) => item.classList.add('hidden'));
        btnRusDownCapsLock.forEach((item) => item.classList.remove('hidden'));
      }
      CapsLock= true;
    }
  };
}
ClickMouse();

//анимация при клике и ее закрытие
const keys=document.querySelectorAll('.key')
keys.forEach(function(item){
    item.onclick = animClick})

function animClick(){
    keys.forEach(item=>item.classList.remove('active'))
    this.classList.add('active') 
    setTimeout(TimeOut, 100);}

function TimeOut(){
  keys.forEach((item) => {
    item.classList.remove('active');
  });
}
