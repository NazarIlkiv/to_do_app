let myNodelist = document.getElementsByTagName('li');
for (let i = 0; i < myNodelist.length; i++) {
let span = document.createElement('span') ;
let txt = document.createTextNode('\u00D7');
span.className = 'close';
span.appendChild(txt);
myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName('close') ;

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none" ;
    }
}

let list = document.querySelector('ul') ;
list.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function createNewElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('myInput').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === ''){
        alert("Please fill this field");
    } else {
        document.querySelector('.myUL').appendChild(li);
    }
document.getElementById('myInput').value = "";

let span = document.createElement('span');
let txt = document.createTextNode('\u00D7');
span.className = 'close';
span.appendChild(txt);
li.appendChild(span);

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none" ;
    }
  }
}
