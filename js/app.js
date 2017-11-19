var area = document.getElementById('insert-text');
var button = document.getElementById('save');
var list = document.getElementById('content-tweets');
var count = document.getElementById('count');

function stateLetter(countLetter) {
  var mediumLetter = 120;
  var minimumLetter = 130;
  var maxLetter = 140;

  if (countLetter > mediumLetter && countLetter < minimumLetter) {
    console.log('soy mayor de 120 y menor de 130');
    count.className = "blue";
  } else if(countLetter > minimumLetter && countLetter < maxLetter) {
    count.className = "red";
  } else if (countLetter > maxLetter) {
    console.log('soy mayor de 140');
    button.classList.add('buttonDisabled');
    count.classList.add('background-red');
  }
}

var buttonEnable = function() {
  if((area.value).trim() !== "") {
    button.classList.remove('buttonDisabled');
  } else if((area.value).trim() == "") {
    button.classList.add('buttonDisabled');
  }
}

var countLetters = function() {
  count.textContent = 140;
  var maxLetter = 140;
  var textLenght = (area.value).trim().length;
  var currentLetter = maxLetter - textLenght;
  count.textContent = currentLetter;
  stateLetter(textLenght);
  buttonEnable();
}

var showTime = function () {
  var f = new Date();
  var time = f.getHours() + ":" + f.getMinutes();
  var currentTime = '';
  if(f.getHours() <= 12) {
    currentTime = time + ' AM';
  } else {
    currentTime = time + ' PM';
  }
  return currentTime;
}

function showTweet (event) {
  event.preventDefault()
  if (area.value !== '') {
    var div = document.createElement('div');
    var p = document.createElement('p');
    p.textContent = area.value;
    var time = document.createElement('p');
    time.textContent = showTime();
    div.classList.add('content-twitter');
    div.appendChild(p);
    div.appendChild(time);
    list.appendChild(div);
    area.value = "";
  }
}

window.onload = function() {
  count.textContent = 140;
  button.addEventListener('click', showTweet);
  area.addEventListener('keyup', countLetters);
}