
let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");

hours = () => {  
    let listItems = document.getElementsByClassName("hoursList");
    let ul = document.getElementById("hoursContainer");
    ul.style.visibility = "visible";
Array.from(listItems).forEach(li => {
    li.addEventListener("click", ()=>{   
       hour.value = li.textContent;
       ul.style.visibility = "hidden";
    })
})
}

minutes = () => {
    let listItems = document.getElementsByClassName("minutesList");
    let ul = document.getElementById("minutesContainer");
    ul.style.visibility = "visible";
Array.from(listItems).forEach(li => {
    li.addEventListener("click", ()=>{
       minute.value = li.textContent;
       ul.style.visibility = "hidden";
    })
})
}

seconds = () => {
    let listItems = document.getElementsByClassName("secondsList");
    let ul = document.getElementById("secondsContainer");
    ul.style.visibility = "visible";
Array.from(listItems).forEach(li => {
    li.addEventListener("click", ()=>{
       second.value = li.textContent;
       ul.style.visibility = "hidden";
    })
})
}

function updateTime () {
let time = new Date();
let h = document.getElementById("H")
let m = document.getElementById("M")
let s = document.getElementById("S")
h.innerHTML = time.getHours();
m.innerHTML = time.getMinutes();
s.innerHTML = time.getSeconds();
let currentHour = time.getHours();
let currentMinute = time.getMinutes();
let currentSecond = time.getSeconds();
if (currentHour == hour.value && currentMinute == minute.value && currentSecond == second.value ){
play()
}
// else{
//     console.log(typeof(hour))
//     console.log(minute)
//     console.log(second)
// }
}
let audio = new Audio("sound.mp3")
play = () => {
audio.play();
let pause = document.getElementById("pause");
pause.style.display = "block";
}

pause = () =>{
audio.pause();
}

setInterval(updateTime, 1000)
updateTime();

function alarm(){
    console.log(hour.value +":"+ minute.value +":"+ second.value);
}

