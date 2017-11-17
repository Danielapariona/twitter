var area = document.getElementById('insert-text');
var button = document.getElementById('save');
var list = document.getElementById('content-tweets');

function showTweet (event) {
  event.preventDefault()
  if (area.value !== '') {
    var div = document.createElement('div');
    var p = document.createElement('p');
    p.textContent = area.value;
    var time = document.createElement('p');
    time.textContent = 'hora';
    div.classList.add('content-twitter');
    div.appendChild(p);
    div.appendChild(time);
    list.appendChild(div);
    area.value = "";
  }
}

button.addEventListener('click', showTweet);
