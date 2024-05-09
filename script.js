var targetElement = document.getElementById('level');
var domLevel = 1;

while (targetElement !== document.documentElement) {
    targetElement = targetElement.parentElement;
    domLevel++;
}

alert('The level of the element is: ' + domLevel);
