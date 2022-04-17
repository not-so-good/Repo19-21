var textArea = document.getElementById("textArea");
var str = "";
var capsValue = false;
var value = "";
var shift = false;

if (document.getElementById("caps-lock").clicked == true) {
    alert("clicked");
}

function btnClick(id) {
    value = document.getElementById(id).innerHTML;
    if (capsValue == true) {
        if (shift == true) {
            textArea.innerHTML += value;
            shift = false;
        } else {
            textArea.innerHTML += value.toUpperCase();
        }
    } else {
        if (shift == true) {
            textArea.innerHTML += value.toUpperCase();
            shift = false;
        } else {
            textArea.innerHTML += value;
        }
    }

    str = textArea.innerHTML;
}

function capsLock() {
    if (capsValue == false) {
        capsValue = true;
    } else {
        capsValue = false;
    }
}

function shiftf() {
    if (shift == false) shift = true;
}

function btnOk() {
    alert(textArea.innerHTML);
}

function backSpace() {
    var newStr = "";
    for (var i = 0; i < str.length - 1; i++) {
        newStr += str[i];
    }
    str = newStr;
    textArea.innerHTML = "";
    textArea.innerHTML = newStr;
}

function space() {
    textArea.innerHTML += " ";
}

function enter() {
    textArea.innerHTML += "\n";
}