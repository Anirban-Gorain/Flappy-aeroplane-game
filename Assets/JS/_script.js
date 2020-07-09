// Mountain animation.

const _mountain_Images = document.querySelectorAll("._mountain_Images img");

let _right = 1;

_mountain_Animation();

function _mountain_Animation()
{

    _mountain_Images[0].style.right = `${_right}px`;
    _mountain_Images[1].style.left = `${1366 - _right}px`;
    
    if (_right == 1369)
    {

        _right = 1;
        
    }

    _right += 8;

    requestAnimationFrame(_mountain_Animation);
    
}

// Rain.

let _start_Or_Off = true;

let _rain_Image = document.querySelector("._rain img");
let _rain = document.querySelector("._rain");
let _sky = document.querySelector("._sky");

let _rain_Noise = new Audio;
_rain_Noise.src = "/Assets/Musics/_rain_Noise.wav";
_rain_Noise.volume = 0.2;
_rain_Noise.loop = true;


setInterval(() =>
{

    if (_start_Or_Off == true)
    {

        _rain_Image.setAttribute("src", "Assets/_images/_rain.png");
        _rain_Image.style.opacity = 0;

        let _time = 1;
        let _opacity = 0.1;

        _rain_Noise.play();

        let _clear_Interval = setInterval(() =>
        {


            _rain_Image.style.opacity = _opacity;
            _rain.style.background = `linear-gradient(180deg, rgb(0, 0, 0, ${_opacity-0.100}), rgba(0, 0, 255, 0))`;

            _sky.style.filter = `grayscale(${_opacity * 50}%)`;

            if (_time == 9)
            {

               clearInterval(_clear_Interval); 
                
            }

            _time++;
            _opacity += 0.1;
            
        }, 80);

        _start_Or_Off = false;

    }
    else if (_start_Or_Off == false)
    {

        let _time = 1;
        let _opacity = 0.9;

        let _clear_Interval = setInterval(() =>
        {


            _rain_Image.style.opacity = _opacity;
            _rain.style.background = `linear-gradient(180deg, rgb(0, 0, 0, ${_opacity-0.100}), rgba(0, 0, 255, 0))`;

            _sky.style.filter = `grayscale(${_opacity * 50}%)`;

            _rain_Noise.pause();

            if (_time == 9)
            {

               clearInterval(_clear_Interval); 
                
            }

            _time++;
            _opacity -= 0.1;
            
        }, 80);

        _start_Or_Off = true;
        
    }
    
}, 1000 * 60);