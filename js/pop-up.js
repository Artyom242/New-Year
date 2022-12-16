
let elements = document.querySelectorAll(".gift");

let pp = document.querySelector("#test_p");
let emty = document.querySelector("#emty_img");
let xxx = document.querySelector("#elem_modal_img");
let empty_tyt = document.querySelector("#empty_tytle");

let myModal = document.querySelector("#myModal");
let cont = document.querySelector(".modal");
var buttonClose = document.querySelector(".close");

var btns = document.getElementsByClassName('dift_image');
var par = document.getElementsByClassName('emty_gift');


let list = {
    1: ['1 декабря', 'Первый день зимы. На фоне лиса, и нет, она не грустит... Она пытается осознать, что Новый год через 30 дней ', 'image/days/1.jpeg'],
    2: ['2 декабря', 'Этот праздник ждут везде, даже там, где нет снега', 'image/days/2.jpeg'],
    3: ['3 декабря', 'Самое время вспомнить свои летние деньки... Как вы купались в море, ели мягкое мороженое, гуляли под теплыми лучами солнца...  ', 'image/days/3.jpeg'],
    4: ['4 декабря', '4 декабря отмечается интересный и особенный праздник – День заказов подарков и написания писем Деду Морозу ', 'image/days/4.jpeg'],
    5: ['5 декабря', 'Задание на день - слепить 3 снеговика, иначе Новый год не наступит', 'image/days/5.jpg'],
    6: ['6 декабря', 'Можете выпить чашечку кофе) ', 'image/days/6.jpeg'],
    7: ['7 декабря', 'А вы знали, что далматины рождаются без своих фирменных чёрных пятен ', 'image/days/7.jpg'],
    8: ['8 декабря', 'Осталось 23 дня, а пока можете сделать новогодние игрушки', 'image/days/8.jpeg'],
    9: ['9 декабря', 'А сколько книг в этом году прочли вы? ', 'image/days/9.jpg'],
    10: ['10 декабря', '- Умом Россию не понять, <br>- Аршином общим не измерить:<br>- У ней особенная стать<br>- В Россию можно только верить.<br> Именно в этот день Тютчев написал это стихотворение  ', 'image/days/10.jpeg'],
    11: ['11 декабря', 'Ваши подарки уже в пути', 'image/days/11.jpeg'],
    12: ['12 декабря', 'Снова понедельник и снова на работу/учебу', 'image/days/12.jpeg'],
    13: ['13 декабря', 'Конкурс - "кто сделает больше фото за декабрь" объявляю открытым!', 'image/days/13.jpeg'],
    14: ['14 декабря', 'По мнению британских исследователей, среда считается самым здоровым днем недели  ', 'image/days/14.jpeg'],
    15: ['15 декабря', 'Сходите в поход', 'image/days/15.jpeg'],
    16: ['16 декабря', 'Ура! Пятница! Можно и отдохнуть', 'image/days/16.jpeg'],
    17: ['17 декабря', 'А вы когда-нибудь видели северное сияние вживую?', 'image/days/17.jpeg'],
    18: ['18 декабря', 'Съездите в путешествие!', 'image/days/18.jpeg'],
    19: ['19 декабря', 'Узнали откуда фотка?  ', 'image/days/19.jpg'],
    20: ['20 декабря', 'Обычный зимний денек в небольшом городке, жители которого во всю готовятся к новогодней ночи', 'image/days/20.jpeg'],
    21: ['21 декабря', 'Сегодня день зимнего солнцестояния! Природа включила "темную тему" ', 'image/days/21.jpeg'],
    22: ['22 декабря', 'Как предпочитаете отдыхать зимой?', 'image/days/22.jpeg'],
    23: ['23 декабря', 'Уже приготовили подарки близким?', 'image/days/23.jpeg'],
    24: ['24 декабря', 'Извините, слишком много отмотал назад ', 'image/days/24.jpg'],
    25: ['25 декабря', 'Остается уже совсем чуть-чуть! ', 'image/days/25.jpg'],
    26: ['26 декабря', 'Пошла последняя неделя 2022 года! ', 'image/days/26.jpeg'],
    27: ['27 декабря', 'Подготавливаемся к Новому Году! Не забываем про салатики и елку!', 'image/days/27.jpeg'],
    28: ['28 декабря', 'Пока другие суетятся можно подвести итоги года)', 'image/days/28.jpeg'],
    29: ['29 декабря', 'Просили печеньки?', 'image/days/29.jpeg'],
    30: ['30 декабря', 'Вся Россия уже готова праздновать, а вы?', 'image/days/30.jpeg'],
    31: ['31 декабря', 'Берем друзей, фейерверки, веселое настроение и идем встречать Новый Год!!!', 'image/days/31.jpeg'],
    32: ['1 января', ' Не знаю, какие сюрпризы подготовил для нас 2023 год, но знаю одно - "Этот год был непростым для нас... <br>С новым 2023 годом!!!" ', 'image/days/32.jpg'],
}

function test(i) {
    myModal.style.display = "block";
    console.log(i);
    xxx.src = list[i][2];
    pp.innerHTML = list[i][1];
    empty_tyt.innerHTML = list[i][0];


    btns[i - 1].classList.add('none')
    par[i - 1].classList.remove('none')
    par[i - 1].classList.add('block')
}
// document.querySelectorAll(".check")[i].src =  list[i][2];

buttonClose.onclick = function () {
    myModal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == cont) {
        cont.style.display = "none";
    }
};

for (let elem of elements) {
    elem.addEventListener("click", (e) => {
        test(elem.dataset.num);
        //document.querySelector('[data-num="' + elem.dataset.num + '"').style.backgroundImage = 'url("' + list[elem.dataset.num][1] + '")';
        // document.querySelector('[data-num="' + elem.dataset.num + '"').style.backgroundImage = 'url("image/photo_2022-12-08_19-47-08.png")'
    })
}

//document.querySelector("[data-num='1'")






/*
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/