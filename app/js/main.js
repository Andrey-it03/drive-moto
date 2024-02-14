$(function () {

    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="../images/icon/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="../images/icon/arrow-right.svg" alt=""></button>'
    });
    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="../images/icon/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="../images/icon/arrow-black-right.svg" alt=""></button>'
    });

    $('.tab').on('click', function (e) {
        e.preventDefault(); //отключение ссылок

        $('.tab').removeClass('tab--active'); // удаление 2 класса
        $('.tabs-content').removeClass('tabs-content--active');

        $(this).addClass('tab--active'); // добавление класса при клике
        $($(this).attr('href')).addClass('tabs-content--active'); // добавление класса по id
    })


    $('.product-item__favorite').on('click', function () { // при нажатии
        $(this).toggleClass('product-item__favorite--active') // toggleClass значит что при нажатии класс изменяется, а при еще одном нажатии убирается.
    });

    $('.filter-style').styler();
    $('.filter__item-drop, .filter__extra').on('click', function () {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
    });

    $('.catalog__filter-btngrid').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });

    $('.catalog__filter-btnline').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });
});