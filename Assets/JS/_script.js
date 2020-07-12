// Mountain animation.

const _mountain_Images = document.querySelectorAll("._mountain_Images img");

let _right = 10;

_mountain_Animation();

function _mountain_Animation()
{

    _mountain_Images[0].style.right = ((_mountain_Images[0].getBoundingClientRect().left * -1) + _right + "px");;
    _mountain_Images[1].style.left = ((_mountain_Images[1].getBoundingClientRect().left) - _right + "px");
    
    if ((_mountain_Images[0].getBoundingClientRect().left) < -1370)
    {

        _mountain_Images[0].style.right = 1 + "px";
        _mountain_Images[1].style.left = 1366 + "px";
        
    }

    requestAnimationFrame(_mountain_Animation);
    
}

// Rain.

let _start_Or_Off = true;

let _rain_Image = document.querySelector("._rain img");
let _rain = document.querySelector("._rain");
let _sky = document.querySelector("._sky");

let _rain_Noise = new Audio;
_rain_Noise.src = "/Assets/Musics/_rain_Noise.wav";
_rain_Noise.volume = 0.1;
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

// Pipe.

// Pipe down

const _down_Pipe_Container = document.querySelector("._pipe_Container ._down_Pipe_Container");

let _random_Height_Top;

for(let _index = 0, _left = 30; _index < _down_Pipe_Container.children.length; _index++, _left += 200)
{

    _down_Pipe_Container.children[_index].style.left = `${_left}px`;
    _down_Pipe_Container.children[_index].setAttribute("draggable", "false");

    _random_Height_Top = Math.floor(Math.random() * (250 - 100) + 100); ;
    _down_Pipe_Container.children[_index].style.height = `${_random_Height_Top}px`;

}
let _left_For_Animation = 5;

function _pipe_Down_Animation()
{

    // Pipe 1 to 7 down left to right.
    
    _down_Pipe_Container.children[0].style.left = parseInt(_down_Pipe_Container.children[0].style.left) - _left_For_Animation + "px";
    _down_Pipe_Container.children[1].style.left = parseInt(_down_Pipe_Container.children[1].style.left) - _left_For_Animation + "px";
    _down_Pipe_Container.children[2].style.left = parseInt(_down_Pipe_Container.children[2].style.left) - _left_For_Animation + "px";
    _down_Pipe_Container.children[3].style.left = parseInt(_down_Pipe_Container.children[3].style.left) - _left_For_Animation + "px";
    _down_Pipe_Container.children[4].style.left = parseInt(_down_Pipe_Container.children[4].style.left) - _left_For_Animation + "px";
    _down_Pipe_Container.children[5].style.left = parseInt(_down_Pipe_Container.children[5].style.left) - _left_For_Animation + "px";
    _down_Pipe_Container.children[6].style.left = parseInt(_down_Pipe_Container.children[6].style.left) - _left_For_Animation + "px";

    if (parseInt(_down_Pipe_Container.children[0].style.left) < -105)
    {

        _down_Pipe_Container.children[0].style.left = 1360 + "px";
        _random_Height_Top = Math.floor(Math.random() * (250 - 100) + 100); ;
        _down_Pipe_Container.children[0].style.height = `${_random_Height_Top}px`;

        
    }

    // Pipe two down left to right.

    if (parseInt(_down_Pipe_Container.children[1].style.left) < -105)
    {

        _down_Pipe_Container.children[1].style.left = 1360 + "px";
        _random_Height_Top = Math.floor(Math.random() * (250 - 100) + 100); ;
        _down_Pipe_Container.children[1].style.height = `${_random_Height_Top}px`;

        
    }

    // Pipe three down left to right.

    if (parseInt(_down_Pipe_Container.children[2].style.left) < -105)
    {

        _down_Pipe_Container.children[2].style.left = 1360 + "px";
        _random_Height_Top = Math.floor(Math.random() * (250 - 100) + 100); ;
        _down_Pipe_Container.children[2].style.height = `${_random_Height_Top}px`;

        
    }

    // Pipe four down left to right.

    if (parseInt(_down_Pipe_Container.children[3].style.left) < -105)
    {

        _down_Pipe_Container.children[3].style.left = 1360 + "px";
        _random_Height_Top = Math.floor(Math.random() * (250 - 100) + 100); ;
        _down_Pipe_Container.children[3].style.height = `${_random_Height_Top}px`;

        
    }

    // Pipe five down left to right.

    if (parseInt(_down_Pipe_Container.children[4].style.left) < -105)
    {

        _down_Pipe_Container.children[4].style.left = 1360 + "px";
        _random_Height_Top = Math.floor(Math.random() * (250 - 100) + 100); ;
        _down_Pipe_Container.children[4].style.height = `${_random_Height_Top}px`;

        
    }

    // Pipe six down left to right.

    if (parseInt(_down_Pipe_Container.children[5].style.left) < -105)
    {

        _down_Pipe_Container.children[5].style.left = 1360 + "px";
        _random_Height_Top = Math.floor(Math.random() * (250 - 100) + 100); ;
        _down_Pipe_Container.children[5].style.height = `${_random_Height_Top}px`;

        
    }

    // Pipe seven down left to right.

    if (parseInt(_down_Pipe_Container.children[6].style.left) < -105)
    {

        _down_Pipe_Container.children[6].style.left = 1360 + "px";
        _random_Height_Top = Math.floor(Math.random() * (250 - 100) + 100); ;
        _down_Pipe_Container.children[6].style.height = `${_random_Height_Top}px`;

        
    }

    requestAnimationFrame(_pipe_Down_Animation);

};

_pipe_Down_Animation();

// Pipe top

const _top_Pipe_Container = document.querySelector("._pipe_Container ._top_Pipe_Container");

let _random_Height_Top_Top;

for(let _index = 0, _left = 30; _index < _top_Pipe_Container.children.length; _index++, _left += 200)
{

    _top_Pipe_Container.children[_index].style.left = `${_left}px`;
    _top_Pipe_Container.children[_index].setAttribute("draggable", "false");

    _random_Height_Top_Top = Math.floor(Math.random() * (250 - 100) + 100); ;
    _top_Pipe_Container.children[_index].style.height = `${_random_Height_Top_Top}px`;
    
}

let _left_For_Animation_Top = 5;

function _pipe_Top_Animation()
{
    
    // Pipe 1 to 7 top left to right.
    
    _top_Pipe_Container.children[0].style.left = parseInt(_top_Pipe_Container.children[0].style.left) - _left_For_Animation_Top + "px";
    _top_Pipe_Container.children[1].style.left = parseInt(_top_Pipe_Container.children[1].style.left) - _left_For_Animation_Top + "px";
    _top_Pipe_Container.children[2].style.left = parseInt(_top_Pipe_Container.children[2].style.left) - _left_For_Animation_Top + "px";
    _top_Pipe_Container.children[3].style.left = parseInt(_top_Pipe_Container.children[3].style.left) - _left_For_Animation_Top + "px";
    _top_Pipe_Container.children[4].style.left = parseInt(_top_Pipe_Container.children[4].style.left) - _left_For_Animation_Top + "px";
    _top_Pipe_Container.children[5].style.left = parseInt(_top_Pipe_Container.children[5].style.left) - _left_For_Animation_Top + "px";
    _top_Pipe_Container.children[6].style.left = parseInt(_top_Pipe_Container.children[6].style.left) - _left_For_Animation_Top + "px";

    if (parseInt(_top_Pipe_Container.children[0].style.left) < -105)
    {
        
        _top_Pipe_Container.children[0].style.left = 1360 + "px";
        _random_Height_Top_Top = Math.floor(Math.random() * (250 - 100) + 100); ;
        _top_Pipe_Container.children[0].style.height = `${_random_Height_Top_Top}px`;

        
    }

    // Pipe two down left to right.


    if (parseInt(_top_Pipe_Container.children[1].style.left) < -105)
    {

        _top_Pipe_Container.children[1].style.left = 1360 + "px";
        _random_Height_Top_Top = Math.floor(Math.random() * (250 - 100) + 100); ;
        _top_Pipe_Container.children[1].style.height = `${_random_Height_Top_Top}px`;

        
    }

    // Pipe three down left to right.


    if (parseInt(_top_Pipe_Container.children[2].style.left) < -105)
    {

        _top_Pipe_Container.children[2].style.left = 1360 + "px";
        _random_Height_Top_Top = Math.floor(Math.random() * (250 - 100) + 100); ;
        _top_Pipe_Container.children[2].style.height = `${_random_Height_Top_Top}px`;

        
    }

    // Pipe four down left to right.


    if (parseInt(_top_Pipe_Container.children[3].style.left) < -105)
    {

        _top_Pipe_Container.children[3].style.left = 1360 + "px";
        _random_Height_Top_Top = Math.floor(Math.random() * (250 - 100) + 100); ;
        _top_Pipe_Container.children[3].style.height = `${_random_Height_Top_Top}px`;

        
    }

    // Pipe five down left to right.


    if (parseInt(_top_Pipe_Container.children[4].style.left) < -105)
    {

        _top_Pipe_Container.children[4].style.left = 1360 + "px";
        _random_Height_Top_Top = Math.floor(Math.random() * (250 - 100) + 100); ;
        _top_Pipe_Container.children[4].style.height = `${_random_Height_Top_Top}px`;

        
    }

    // Pipe six down left to right.


    if (parseInt(_top_Pipe_Container.children[5].style.left) < -105)
    {

        _top_Pipe_Container.children[5].style.left = 1360 + "px";
        _random_Height_Top_Top = Math.floor(Math.random() * (250 - 100) + 100); ;
        _top_Pipe_Container.children[5].style.height = `${_random_Height_Top_Top}px`;

        
    }

    // Pipe seven down left to right.


    if (parseInt(_top_Pipe_Container.children[6].style.left) < -105)
    {

        _top_Pipe_Container.children[6].style.left = 1360 + "px";
        _random_Height_Top_Top = Math.floor(Math.random() * (250 - 100) + 100);
        _top_Pipe_Container.children[6].style.height = `${_random_Height_Top_Top}px`;

        
    }

    requestAnimationFrame(_pipe_Top_Animation);

};

_pipe_Top_Animation();