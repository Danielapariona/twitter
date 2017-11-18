var area = document.getElementById('insert-text');
var button = document.getElementById('save');
var list = document.getElementById('content-tweets');
var count = document.getElementById('count');

function stateLetter(countLetter) {
  var minimumLetter = 10;
  if(countLetter <= 10 && countLetter >= 0) {
    count.className = "red";
  } else if(countLetter < 0) {
    count.className = "twitterBlue background-red";
  } 
}

var countLetters = function() {
  count.textContent = 140;
  var maxLetter = 140;
  var currentLetter = maxLetter - ((area.value).trim()).length;
  count.textContent = currentLetter;
  stateLetter(count.textContent);
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
  button.addEventListener('click', showTweet);
  area.addEventListener('keydown', countLetters );
}