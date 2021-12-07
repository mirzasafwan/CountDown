const happyBirthday='19 Feb 2022';
const daysEl =document.getElementById('days')
const hoursEl =document.getElementById('hours')
const minsEl =document.getElementById('mins')
const secondsEl =document.getElementById('seconds')
function countDown(){
    const happyBirthdayDate=new Date(happyBirthday);
    const currentDate=new Date();

    //console.log(currentDate);
    //console.log(happyBirthdayDate);
    const totalSeconds=(happyBirthdayDate-currentDate)/1000;

    console.log(totalSeconds);
    const days=Math.floor(totalSeconds/3600/24)
    //console.log(days);
    const hours=Math.floor(totalSeconds/3600)%24;
    //console.log(hours);
    const mins=Math.floor(totalSeconds/60)%60;
    //console.log(mins)
    const seconds=Math.floor(totalSeconds)%60;
    
    console.log(days,hours,mins,seconds)
        
daysEl.innerHTML=days
hoursEl.innerHTML=hours
minsEl.innerHTML=mins
secondsEl.innerHTML=seconds
    //const hours=Math.floor(seconds)
    //console.log(hours);

}
countDown();

setInterval(countDown,1000);