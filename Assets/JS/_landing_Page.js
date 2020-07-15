document.onload
{

    var mySwiper = new Swiper('.swiper-container',
    {

        // Optional parameters

        direction: 'horizontal',
        loop: true,

        // If we need pagination

        pagination: 
        {

            el: '.swiper-pagination',

        },

        // Navigation arrows

        navigation: 
        {

            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',

        },
        autoplay:
        {

            delay: (1000 * 4),
            disableOnInteraction: false,

        },

    });

}

// To get smooth scroll.

document.scrollBy(
{ 

    behavior: 'smooth' 

});