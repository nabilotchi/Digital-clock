//*time

function showTime(){
    let date = new Date();
    let h    = date.getHours();
    let m    = date.getMinutes();
    let s    = date.getSeconds();
    let d    = date.toDateString();
    let num  = d.substr(8, 2);
    let str  = d.substr(0, 8);

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("h").textContent = h;
    document.getElementById("m").textContent = m;
    document.getElementById("s").textContent = s;
    document.getElementById("str").textContent = str;
    document.getElementById("num").textContent = num;

    setTimeout(showTime, 1000);
}
showTime();

//*toggle

const body = document.querySelector('body');
const switcher = document.querySelector('.switch');

switcher.addEventListener("click", ()=>{
        body.classList.toggle('toggle');
});