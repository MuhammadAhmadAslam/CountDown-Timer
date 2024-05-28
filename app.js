var now = new Date()
var now1 = new Date(`17 June 2024`)
var days = Math.floor((now1 - now) / (1000*60*60*24))
console.log(days);
var hours = 24
var minutes = 60;
var seconds = 60
var daysSpan = document.getElementById('days')
var HoursSpan = document.getElementById('hours')
var minutesSpan = document.getElementById('minutes')
var secondsSpan = document.getElementById('seconds')
let milliSeconds = 0
var timer = setInterval(() => {
    milliSeconds++
    if (milliSeconds >= 100) {
        if (seconds > 1) {
            seconds--
            milliSeconds = 0
        }else{
            seconds = 59;
            milliSeconds = 0
            
        }

        if (seconds == 1) {
            if (minutes > 0) {
                minutes--
                seconds = 0
            }else{
                minutes = 59
                seconds = 0
                if (hours >= 1) {
                    hours--
                }else{
                    hours = 24;
                    if (days >= 1) {
                        days--
                    }else{
                        days = 0
                    }
                }
                
            }

        }
        
    }
    document.getElementById('days').innerText = `${days}:`;
    document.getElementById('hours').innerText = `${hours}:`;
    document.getElementById('minutes').innerText = `${minutes}:`;
    document.getElementById('seconds').innerText = `${seconds}`;
    
}, 10);