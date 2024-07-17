const second_handle = document.getElementById("seconds");
const minute_handle = document.getElementById("minutes");
const hour_handle = document.getElementById("hours");

function getTime()
{
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();
    console.log(hour, minute, second);

    const timeInterval = 6;

    second_handle.style.transform = "rotate("+(second * timeInterval)+"deg)";
    minute_handle.style.transform = "rotate("+(minute*timeInterval + second/10)+"deg)";
    hour_handle.style.transform = "rotate("+(hour*30 + minute/2)+"deg)";
   
}

setInterval(getTime,100);