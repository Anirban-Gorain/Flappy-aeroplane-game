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

// Scroll time navbar color changing.

const _navbar = document.querySelector("nav");
const _anchor = document.querySelectorAll("nav ul li a");
const _logo = document.querySelector("nav div")

window.addEventListener("scroll", () =>
{

    if(this.scrollY > 10)
    {

        _navbar.style.backgroundColor = "rgb(46, 43, 46)";
        _logo.style.color = "white";
        
        for(let _index = 0; _index < _anchor.length; _index++)
        {

            _anchor[_index].style.color = "white";

        }

    }
    else
    {

        _navbar.style.backgroundColor = "white";
        _logo.style.color = "rgb(46, 43, 46)";
        
        for(let _index = 0; _index < _anchor.length; _index++)
        {

            _anchor[_index].style.color = "black";

        }

    }

    
});