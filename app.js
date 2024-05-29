var btn = document.getElementById('btn')
var input = document.getElementById('dateinput')
var div = document.getElementById('countdown')
var span = document.getElementsByTagName('span')
btn.addEventListener('click', () => {
    for (let i = 0; i < span.length; i++) {
        span[i].style.display = 'inline'
    }
    btn.style.display = 'none'
    input.style.display = 'none'
    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    div.style.color = 'goldenrod'
    div.style.border = '1px solid white'
    // div.style.flexDirection = 'column'
    div.style.alignItems = 'center'
    var timer = setInterval(() => {
        var now = new Date()
        var now1 = new Date(`${input.value}`)
        var days = Math.floor((now1 - now) / (1000*60*60*24))
        var currentHour = now.getHours();
        var remainingHours = 24 - currentHour;
        var currentminutes = now.getMinutes()
        var remainingMinutes = 60 - currentminutes;
        var currentSeconds = now.getSeconds()
        var remainnigSeconds = 60 - currentSeconds
        if (days <= 9) {
            document.getElementById('days').innerText = `0${days}:`;
        }else{
            document.getElementById('days').innerText = `${days}:`;
        }
        if (remainingHours <= 9) {
            document.getElementById('hours').innerText = `0${remainingHours}:`;
        }else{
            document.getElementById('hours').innerText = `${remainingHours}:`;
        }
        if (remainingMinutes <= 9) {
            document.getElementById('minutes').innerText = `0${remainingMinutes}:`;
        }else{
            document.getElementById('minutes').innerText = `${remainingMinutes}:`;
        }
        if (remainnigSeconds <= 9) {
            document.getElementById('seconds').innerText = `0${remainnigSeconds}`;
        }else{
            document.getElementById('seconds').innerText = `${remainnigSeconds}`;
        }
    }, 1000);
})
































// var daysSpan = document.getElementById('days')
// var HoursSpan = document.getElementById('hours')
// var minutesSpan = document.getElementById('minutes')
// var secondsSpan = document.getElementById('seconds')
// let milliSeconds = 0
// var timer = setInterval(() => {
//     milliSeconds++
//     if (milliSeconds >= 100) {
//         if (seconds > 1) {
//             seconds--
//             milliSeconds = 0
//         }else{
//             seconds = 59;
//             milliSeconds = 0
            
//         }

//         if (seconds == 1) {
//             if (minutes > 0) {
//                 minutes--
//                 seconds = 0
//             }else{
//                 minutes = 59
//                 seconds = 0
//                 if (hours >= 1) {
//                     hours--
//                 }else{
//                     hours = 24;
//                     if (days >= 1) {
//                         days--
//                     }else{
//                         days = 0
//                     }
//                 }
                
//             }

//         }
        
//     }
//     document.getElementById('days').innerText = `${days}:`;
//     document.getElementById('hours').innerText = `${hours}:`;
//     document.getElementById('minutes').innerText = `${minutes}:`;
//     document.getElementById('seconds').innerText = `${seconds}`;
    
// }, 10);