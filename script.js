/*---------slider-------------*/
let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;
function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}
function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    });
}
function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}
function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}
function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}
document.querySelector('.control.left').addEventListener('click', function () {
    if (isEnabled) {
        previousItem(currentItem);
    }
});
document.querySelector('.control.right').addEventListener('click', function () {
    if (isEnabled) {
        nextItem(currentItem);
    }
});
const vertic = document.getElementById('IV');
const horiz = document.getElementById('IH');
const shadow_V = document.getElementById('shadow_V');
const shadow_H = document.getElementById('shadow_H');
horiz.addEventListener('click', () => {
    if (shadow_H.style.display == "none")
        shadow_H.style.display = "block";
    else
        shadow_H.style.display = "none";
});
vertic.addEventListener('click', () => {
    if (shadow_V.style.display == "none")
        shadow_V.style.display = "block";
    else
        shadow_V.style.display = "none";
});
