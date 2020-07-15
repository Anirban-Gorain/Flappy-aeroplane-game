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

// On the manual guide section which li tags used making two consecutive two li tag's color different to a gives better reading experience.

const _li_Tags = document.querySelectorAll("#_play ._guide ul li");
let _odd_Position_Li = 1;

for(_one_By_One_Each_Element of _li_Tags)
{

    if(!(_odd_Position_Li & 1))
    {

        _one_By_One_Each_Element.style.color = "rgb(253, 242, 140)";

    }

    _odd_Position_Li++;

}

// User name section for play and play button.

const _name = document.querySelector("#_name");
const _play_Button = document.querySelector("#_play_Button");

let _criteria = /^[a-zA-Z\-]+$/;

_play_Button.addEventListener("click", () => 
{

    if((_name.value.length >= 10 && _name.value.length <= 20) && _name.value.match(_criteria))
    {

        document.querySelector("#_error_Message").style.display = "none";
        
        // Setting the user name for the high score functionality.

        localStorage.setItem("_name", _name.value);
        
        window.location.href = "_game.htm";

    } 
    else
    {

        document.querySelector("#_error_Message").style.display = "block";

    }

}); 