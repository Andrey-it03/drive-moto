$(function(){

    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="../images/icon/arrow-left.svg" alt=""></button>',
        nextArrow:'<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="../images/icon/arrow-right.svg" alt=""></button>'
    });


    $('.search__tabs-item').on('click', function(e){
        e.preventDefault(); //отключение ссылок
        
        $('.search__tabs-item').removeClass('search__tabs-item--active'); // удаление 2 класса
        $('.search__content-item').removeClass('search__content-item--active');

        $(this).addClass('search__tabs-item--active'); // добавление класса при клике
        $($(this).attr('href')).addClass('search__content-item--active'); // добавление класса по id
    })
});