$(document).ready(function () {
    var currentFloor = 2;/*переменная, где храниться текуший этаж*/
    var floorPath = $('.home-image path');/*Каждый отдельный этах в SVG*/
    var counterUp = $(".counter-up");/*Кнопка увеличения этажа*/ 
    var counterDown = $(".counter-down");/*Кнопка уменьшения этажа*/ 
    /*Функция при наведении на этаж*/ 
    floorPath.on('mouseover', function () {
        floorPath.removeClass("current-floor");/*удаляем активный класс у этажей*/
        currentFloor = $(this).attr("data-floor");/*подучаем значение текущего этажа*/ 
        $(".counter").text(currentFloor);/*записываем значение текущего этажа в счетчик*/
    });

    /*Функция при нажатии стрелки вверх*/ 
    counterUp.on("click",function () { /*отслеживаем клик по кнопке вверх*/
        if (currentFloor < 18) { /*проверяем значение этажа*/
            currentFloor++; /*прибавляем один этаж*/
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})/*форматируем переменную с этажом */
            $(".counter").text(usCurrentFloor); /*записываем значение текущего этажа в счетчик*/
            floorPath.removeClass("current-floor");/*удаляем активный класс у этажей*/
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");/*подсвечиваем текущий этаж*/
        }
    });

    /*Функция при нажатии стрелки вниз*/ 
    counterDown.on("click",function () { /*отслеживаем клик по кнопке вниз */
        if (currentFloor > 2) { /*проверяем значение этажа*/
            currentFloor--;/*уменьшаем один этаж*/
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})/*форматируем переменную с этажом */
            $(".counter").text(usCurrentFloor);/*записываем значение текущего этажа в счетчик*/
            floorPath.removeClass("current-floor");/*удаляем активный класс у этажей*/
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");/*подсвечиваем текущий этаж*/
        }
    });
});