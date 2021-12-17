var score = 0;
var maths = 1;
function wro()
{
    maths += 1;
    document.getElementById('wro').style.visibility = "visible";
    setTimeout(hide , 1000);
}function cor()
{
    maths += 1;
    score += 1;
    document.getElementById('cor').style.visibility = "visible";
    setTimeout(hide , 1000);
}
function hide()
{
    document.getElementById('score').innerHTML = score;
   
    window.open(`#a${maths}` , '_self');
    document.getElementById('cor').style.visibility  = "hidden";
    document.getElementById('wro').style.visibility  = "hidden";
}
window.addEventListener('load' , ()=>{
document.getElementById('loading').style.visibility = "hidden";
});