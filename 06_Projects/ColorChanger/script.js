const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = "#";
    for(i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let intervalvalid;
const startChangingColor = function(){
    if(!intervalvalid){
    intervalvalid= setInterval(changeBgColor,1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }};

const stopChangingColor=
function(){
    clearInterval(intervalvalid);
    intervalvalid=null;
}



document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);