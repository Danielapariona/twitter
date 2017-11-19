var area = document.getElementById('insert-text');
var button = document.getElementById('save');
var list = document.getElementById('content-tweets');
var count = document.getElementById('count');

function stateLetter(countLetter) {
  var mediumLetter = 120;
  var minimumLetter = 130;
  var maxLetter = 140;

  if (countLetter > mediumLetter && countLetter < minimumLetter) {
    count.className = "blue";
  } else if(countLetter > minimumLetter && countLetter < maxLetter) {
    count.className = "red";
  } else if (countLetter > maxLetter) {
    count.classList.add('background-red');
  } else if(countLetter < mediumLetter) {
    count.className = "twitterBlue";
  }
}

var buttonEnable = function(contentArea, count) {
  if(contentArea !== "") {
    button.classList.remove('buttonDisabled');
  } else if(contentArea == "") {
    button.classList.add('buttonDisabled');
  };

  if(count < 0) {
    button.classList.add('buttonDisabled');
  }
}

var countLetters = function() {
  count.textContent = 140;
  var maxLetter = 140;
  var contentArea= (area.value).trim();
  var textLenght = contentArea.length;
  var currentLetter = maxLetter - textLenght;
  count.textContent = currentLetter;
  stateLetter(textLenght);
  buttonEnable(contentArea, parseInt(count.textContent));
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