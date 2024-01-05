$(function(){

    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="../images/icon/arrow-left.svg" alt=""></button>',
        nextArrow:'<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="../images/icon/arrow-right.svg" alt=""></button>'
    });
    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="../images/icon/arrow-black-left.svg" alt=""></button>',
        nextArrow:'<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="../images/icon/arrow-black-right.svg" alt=""></button>'
    });

    $('.tab').on('click', function(e){
        e.preventDefault(); //отключение ссылок
        
        $('.tab').removeClass('tab--active'); // удаление 2 класса
        $('.tabs-content').removeClass('tabs-content--active');

        $(this).addClass('tab--active'); // добавление класса при клике
        $($(this).attr('href')).addClass('tabs-content--active'); // добавление класса по id
    })


    $('.product-item__favorite').on('click',function(){ // при нажатии
        $(this).toggleClass('product-item__favorite--active') // toggleClass значит что при нажатии класс изменяется, а при еще одном нажатии убирается.
    });

    
});