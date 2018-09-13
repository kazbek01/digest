var btnburger = document.getElementById('btn-burger');
var over = document.getElementById('over');
var menu = document.getElementById('menu-fix');
function opennav() {
    menu.style.opacity = '1';
    menu.style.zIndex = '3';
    over.style.opacity = '1';
    over.style.zIndex = '2';
    over.style.backgroundColor = 'rgba(0, 0, 0, 0.54)';
}
function closenav() {
    menu.style.opacity = '0';
    menu.style.zIndex = '-1';
    // menu.style.display = 'none';
    over.style.opacity = '0';
    over.style.zIndex = '-1';
}

over.onclick = function () {
    over.style.zIndex = '-1'
    over.style.opacity = '0';
    menu.style.opacity = '0';
    menu.style.zIndex = '-1';
}