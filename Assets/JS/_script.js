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