const MENU = document.getElementById('home');
    MENU.addEventListener('click', (event) => {
       
        
        MENU.querySelectorAll('nav>a').forEach(el => el.classList.remove('active_a'));
        event.target.classList.add('active_a');
    });
    
















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




/*---------portfolio-------------*/

const images = document.querySelectorAll('#imgs img');
    const all = document.getElementById('all');
    const wd = document.getElementById('wd');
    const graph = document.getElementById('graph');
    const art = document.getElementById('art');
    const portfolio_nav = document.getElementById("portf");

    const changePositions = aidi => {
        var positioningArr = [];
        switch (aidi) {
        case 'all':
            positioningArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            break;

        case 'wd':
            positioningArr = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
            break;

        case 'graph':
            positioningArr = [2, 4, 6 ,8 ,10, 12, 1, 3, 5, 7, 9, 11];
            break;

        case 'art':
            positioningArr = [11, 9, 7, 3, 1, 2, 4, 6, 8, 12, 10];
            break;

    }
    images.forEach((img, i) => {
        img.setAttribute('style', `order: ${positioningArr[i]}`);
    });
}

[art, graph, wd, all].forEach((el) => {
    el.addEventListener('click', (e) => {
        changePositions(e.target.getAttribute('id'));
    });


});

portfolio_nav.addEventListener('click', (event) => {
    portfolio_nav.querySelectorAll('nav>a').forEach(el => el.classList.remove('active_nav'));
    event.target.classList.add('active_nav');
});

const img_border = document.querySelectorAll('#imgs img');

img_border.forEach((img) => {
    img.addEventListener('click', (event) => {
        if (event.target.classList == "img_border")
            img_border.forEach((el) => {
                el.classList.remove('img_border');
            });
        else {
            img_border.forEach((el) => {
                el.classList.remove('img_border');
            });
            event.target.classList.add('img_border');
        }
    });
});








function isEmpty(str) {
    if (str.trim() == '')
        return true;

    return false;
}

const BUTTON = document.getElementById('form');
const CLOSE_BUTTON = document.getElementById('close-btn');
const form = document.getElementById('form');
form.addEventListener('submit', (e) => e.preventDefault());
BUTTON.addEventListener('submit', () => {

    var subject = document.getElementById('subject').value.toString();
    var describe = document.getElementById('describe').value.toString();
    if (isEmpty(subject)) subject = "No subject";
    else subject = "Subject :" + subject;
    if (isEmpty(describe)) describe = "No description ";
    else describe = "Description :" + describe;
    document.getElementById('result').innerText = subject;
    document.getElementById('result1').innerText = describe;
    document.getElementById('message-block').classList.remove('hidden');

});


CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('result').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
});
