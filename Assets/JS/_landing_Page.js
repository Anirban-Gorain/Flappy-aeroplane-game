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

// Contact form validation.

const _user_Name = document.querySelector("#_user_Name");
const _user_Mail_Address = document.querySelector("#_user_Mail_Address");
const _user_Message = document.querySelector("#_user_Message");
const _form = document.querySelector("#_form");

const _user_Name_Error = document.querySelector("#_user_Name_Error");
const _mail_Error_ = document.querySelector("#_mail_Error");
const _message_Error = document.querySelector("#_message_Error");

const _mail_Criteria = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Conditions.

_form.addEventListener("submit", (_event) =>
{

    if(!((_user_Name.value.length >= 10 && _user_Name.value.length <= 20) && _user_Name.value.match(_criteria)))
    {

        _user_Name_Error.style.visibility = "visible";
        _event.preventDefault();

    }
    else
    {

        _user_Name_Error.style.visibility = "hidden";

    }

    if(!(_user_Mail_Address.value.match(_mail_Criteria)))
    {

        _mail_Error_.style.visibility = "visible";
        _event.preventDefault();

    }
    else
    {

        _mail_Error_.style.visibility = "hidden";

    }

    if(!(_user_Message.value.length >= 100))
    {

        _message_Error.style.visibility = "visible";
        _event.preventDefault();

    }
    else
    {

        _message_Error.style.visibility = "none";

    }



});

// updating copyright date.

let _date = new Date().getFullYear();

document.querySelector("#_copy_Right_Year").innerText = _date;