

var btns = document.getElementsByClassName('dift_image');
var par = document.getElementsByClassName('emty_gift');


btns[0].onclick = function () {
    btns[0].classList.add("none");
    par[0].classList.add("block");
}
btns[1].onclick = function () {
    btns[1].classList.add("none");
    par[1].classList.add("block");
}
btns[2].onclick = function () {
    btns[2].classList.add("none");
    par[2].classList.add("block");
}
btns[3].onclick = function () {
    btns[3].classList.add("none");
    par[3].classList.add("block");
}
btns[4].onclick = function () {
    btns[4].classList.add("none");
    par[4].classList.add("block");
}



/*
let block = document.querySelector('.dift_image')
let block_2 = document.querySelector('.emty_gift')



block.addEventListener('click', () => {
    block.classList.add('none')
    block_2.classList.remove('none')
    block_2.classList.add('block')

})
*/