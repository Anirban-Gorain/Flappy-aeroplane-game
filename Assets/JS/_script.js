document.onload
{

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

// Aeroplane controls

const _aeroplane_Controller = document.querySelector("._aeroplane_And_Front_Fan_Of_Aeroplane_Container #_aeroplane_Controller");

let _clint_Rect;

document.addEventListener("keydown", (_event) =>
{

    _clint_Rect = _aeroplane_Controller.getBoundingClientRect();    

    if (_event.key == "ArrowUp")
    {
        
        if(_clint_Rect.top != 3)
        _aeroplane_Controller.style.top = _clint_Rect.top - 8 + "px";
        
    }
    else if(_event.key == "ArrowDown")
    {

        if(_clint_Rect.top != 523)
        _aeroplane_Controller.style.top = _clint_Rect.top + 8 + "px";

    }
    else if(_event.key == "ArrowLeft")
    {

        _left_For_Animation_Top = 2;
        _left_For_Animation = 2;
        _right = 6
        _left = 1;

        if(_clint_Rect.left != 2)
        {

            _aeroplane_Controller.style.left = _clint_Rect.left - 2 + "px";

        }
        
    }
    else if(_event.key == "ArrowRight")
    {

        _left_For_Animation_Top = 8;
        _left_For_Animation = 8;
        _right = 14;
        _left = 7;
        
        if(_clint_Rect.left != 1178)

        _aeroplane_Controller.style.left = _clint_Rect.left + 8 + "px";
        
    }
    
});

document.addEventListener("keyup", (_event) =>
{

    if (_event.key == "ArrowLeft")
    {

        _left_For_Animation_Top = 5;
        _left_For_Animation = 5;
        _right = 10;
        _left = 4;
        
    }

    if (_event.key == "ArrowRight")
    {

        _left_For_Animation_Top = 5;
        _left_For_Animation = 5;
        _right = 10;
        _left = 4;
        
    }

});


// Opposite aeroplane

const _opposite_Aeroplane = document.querySelector("#_opposite_Aeroplane");
let _left = 4;
let _to_Cancel_Animation_Frame;
let _control_opposite_Aeroplane_Interval;

let _danger_Sound = new Audio();
_danger_Sound.src = "Assets/Musics/_danger_Alarm.mp3";
_danger_Sound.volume = 0.2;
_danger_Sound.loop = true;

_control_opposite_Aeroplane_Interval = setInterval(() =>
{

    _danger_Sound.play();

    setTimeout(() =>
    {
        
    }, 1000 * 4);
    _opposite_Aeroplane_Animation();


}, 1000 * 30);

function _opposite_Aeroplane_Animation()
{

    _opposite_Aeroplane.style.left = parseInt((_opposite_Aeroplane.getBoundingClientRect().left)) - _left + "px";
    console.log();

    _to_Cancel_Animation_Frame = requestAnimationFrame(_opposite_Aeroplane_Animation);

    if (parseInt((_opposite_Aeroplane.getBoundingClientRect().left)) < -400)
    {

        _opposite_Aeroplane.style.left =  1380 + "px";
        cancelAnimationFrame(_to_Cancel_Animation_Frame);

        _danger_Sound.pause();
        _danger_Sound.currentTime = 0;
        
    }

    
}

// Collision detection.

// Down collision detection.

let _aeroplane_Controller_2;
let _down_Pipe_Container_2 = document.querySelector("._down_Pipe_Container");

function _collision_Detector_Down()
{
    
    _aeroplane_Controller_2 = document.querySelector("#_aeroplane_Controller").getBoundingClientRect();

    // Pipe 1

    if(!(_down_Pipe_Container_2.children[0].getBoundingClientRect().top > _aeroplane_Controller_2.bottom) && !(_down_Pipe_Container_2.children[0].getBoundingClientRect().left > _aeroplane_Controller_2.right) && !(_down_Pipe_Container_2.children[0].getBoundingClientRect().right < _aeroplane_Controller_2.left))
    {

        // Collision detected for pipe 1

         _collision_Time();
        

    }

    // Pipe 2

    if(!(_down_Pipe_Container_2.children[1].getBoundingClientRect().top > _aeroplane_Controller_2.bottom) && !(_down_Pipe_Container_2.children[1].getBoundingClientRect().left > _aeroplane_Controller_2.right) && !(_down_Pipe_Container_2.children[1].getBoundingClientRect().right < _aeroplane_Controller_2.left))
    {

        // Collision detected for pipe 2.

         _collision_Time();
        

    }

    // Pipe 3

    if(!(_down_Pipe_Container_2.children[2].getBoundingClientRect().top > _aeroplane_Controller_2.bottom) && !(_down_Pipe_Container_2.children[2].getBoundingClientRect().left > _aeroplane_Controller_2.right) && !(_down_Pipe_Container_2.children[2].getBoundingClientRect().right < _aeroplane_Controller_2.left))
    {

        // Collision detected for pipe 3.

         _collision_Time();
        

    }

    // Pipe 4

    if(!(_down_Pipe_Container_2.children[3].getBoundingClientRect().top > _aeroplane_Controller_2.bottom) && !(_down_Pipe_Container_2.children[3].getBoundingClientRect().left > _aeroplane_Controller_2.right) && !(_down_Pipe_Container_2.children[3].getBoundingClientRect().right < _aeroplane_Controller_2.left))
    {

        // Collision detected for pipe 4.

         _collision_Time();
        

    }

    // Pipe 5

    if(!(_down_Pipe_Container_2.children[4].getBoundingClientRect().top > _aeroplane_Controller_2.bottom) && !(_down_Pipe_Container_2.children[4].getBoundingClientRect().left > _aeroplane_Controller_2.right) && !(_down_Pipe_Container_2.children[4].getBoundingClientRect().right < _aeroplane_Controller_2.left))
    {

        // Collision detected for pipe 5.

         _collision_Time();
        

    }

    // Pipe 6

    if(!(_down_Pipe_Container_2.children[5].getBoundingClientRect().top > _aeroplane_Controller_2.bottom) && !(_down_Pipe_Container_2.children[5].getBoundingClientRect().left > _aeroplane_Controller_2.right) && !(_down_Pipe_Container_2.children[5].getBoundingClientRect().right < _aeroplane_Controller_2.left))
    {

        // Collision detected for pipe 6.

         _collision_Time();
        

    }

    // Pipe 7

    if(!(_down_Pipe_Container_2.children[6].getBoundingClientRect().top > _aeroplane_Controller_2.bottom) && !(_down_Pipe_Container_2.children[6].getBoundingClientRect().left > _aeroplane_Controller_2.right) && !(_down_Pipe_Container_2.children[6].getBoundingClientRect().right < _aeroplane_Controller_2.left))
    {

        // Collision detected for pipe 7.

         _collision_Time();
        

    }

}

// Top or up collision detection.

let _top_Pipe_Container_2 = document.querySelector("._top_Pipe_Container");

function _collision_Detector_Up()
{

    // Pipe 1

    if(!(_top_Pipe_Container_2.children[0].getBoundingClientRect().bottom < _aeroplane_Controller_2.top) &&  !(_down_Pipe_Container_2.children[0].getBoundingClientRect().left > _aeroplane_Controller_2.right) && !(_down_Pipe_Container_2.children[0].getBoundingClientRect().right < _aeroplane_Controller_2.left))
    {

        // Collision detected for pipe 1.
        
         _collision_Time();

    }
    if(!(_top_Pipe_Container_2.children[1].getBoundingClientRect().bottom < _aeroplane_Controller_2.top) &&  !(_down_Pipe_Container_2.children[1].getBoundingClientRect().left > _aeroplane_Controller_2.right) && !(_down_Pipe_Container_2.children[1].getBoundingClientRect().right < _aeroplane_Controller_2.left))

    {

        // Collision detected for pipe 2.
        
         _collision_Time();

    }

    if(!(_top_Pipe_Container_2.children[2].getBoundingClientRect().bottom < _aeroplane_Controller_2.top) &&  !(_down_Pipe_Container_2.children[2].getBoundingClientRect().left > _aeroplane_Controller_2.right) && !(_down_Pipe_Container_2.children[2].getBoundingClientRect().right < _aeroplane_Controller_2.left))

    {

        // Collision detected for pipe 3.
        
         _collision_Time();

    }

    if(!(_top_Pipe_Container_2.children[3].getBoundingClientRect().bottom < _aeroplane_Controller_2.top) &&  !(_down_Pipe_Container_2.children[3].getBoundingClientRect().left > _aeroplane_Controller_2.right) && !(_down_Pipe_Container_2.children[3].getBoundingClientRect().right < _aeroplane_Controller_2.left))

    {

        // Collision detected for pipe 4.
        
         _collision_Time();

    }

    if(!(_top_Pipe_Container_2.children[4].getBoundingClientRect().bottom < _aeroplane_Controller_2.top) &&  !(_down_Pipe_Container_2.children[4].getBoundingClientRect().left > _aeroplane_Controller_2.right) && !(_down_Pipe_Container_2.children[4].getBoundingClientRect().right < _aeroplane_Controller_2.left))

    {

        // Collision detected for pipe 5.
        
         _collision_Time();

    }

    if(!(_top_Pipe_Container_2.children[5].getBoundingClientRect().bottom < _aeroplane_Controller_2.top) &&  !(_down_Pipe_Container_2.children[5].getBoundingClientRect().left > _aeroplane_Controller_2.right) && !(_down_Pipe_Container_2.children[5].getBoundingClientRect().right < _aeroplane_Controller_2.left))

    {

        // Collision detected for pipe 6.
        
         _collision_Time();

    }

    if(!(_top_Pipe_Container_2.children[6].getBoundingClientRect().bottom < _aeroplane_Controller_2.top) &&  !(_down_Pipe_Container_2.children[6].getBoundingClientRect().left > _aeroplane_Controller_2.right) && !(_down_Pipe_Container_2.children[6].getBoundingClientRect().right < _aeroplane_Controller_2.left))

    {

        // Collision detected for pipe 7.
        
         _collision_Time();

    }
    
}

// Opposite aeroplane collision detection.

function _collision_Detection_For_Opposite_Aeroplane()
{

    if(!(_aeroplane_Controller_2.right < _opposite_Aeroplane.getBoundingClientRect().left) && !(_aeroplane_Controller_2.left > _opposite_Aeroplane.getBoundingClientRect().right) && !(_aeroplane_Controller_2.top > _opposite_Aeroplane.getBoundingClientRect().bottom) && !(_aeroplane_Controller_2.bottom < _opposite_Aeroplane.getBoundingClientRect().top))
    {

        _collision_Time();

    }
    
}

// When will be collision what will be then.

let _one_Time = true;

// The main motive to declare the score variable here for the scope issue.

let _score = 9;

function _collision_Time()
{

    if(_one_Time == true)
    {

        document.querySelector("._combined_Aeroplane").classList.add("_collision_Animation");
        document.querySelector("._fire_Container").style.visibility = "visible";

        // Canceling the opposite aeroplane function caller interval.

        clearInterval(_control_opposite_Aeroplane_Interval);

        setTimeout(() =>
        {

            let _collision_Text = 
            `

                <div class="_collision_Text">

                    <h1>Oops, ${localStorage.getItem("_name")} you loose this round</h1> 
                    <h2>You May try again further</h2> 
                    <h2><span id="_score">${(_score >= parseInt(localStorage.getItem("_highest_Score")))? `You made a new high score which is ${_score}`: `Your score is ${_score}, And the high score is ${localStorage.getItem("_highest_Score")}`}</span></h2>
                    <button class="_button">PLAY Again</button>
                    <a href="#here will be come the main page" target="_blank">Go to the main page.</a>

                </div>

            `;

            // Collision text.

            let _collision_Text_Container = document.createElement("div");
            document.querySelector("body").appendChild(_collision_Text_Container);
            _collision_Text_Container.innerHTML = _collision_Text;
            _collision_Text_Container.setAttribute("class", "_collision_Text");
            


            document.querySelector("._combined_Aeroplane").style.visibility = "hidden";
            document.querySelector("._fire_Container").style.visibility = "hidden";
            
        }, 1000 * 5);

        _one_Time = false;

    }

    
    
}

function _execute_Collision_Checkers_Functions_Infinite_Time()
{

    _collision_Detector_Down();
    _collision_Detector_Up();

    _collision_Detection_For_Opposite_Aeroplane();

    requestAnimationFrame(_execute_Collision_Checkers_Functions_Infinite_Time);

}

_execute_Collision_Checkers_Functions_Infinite_Time();


}