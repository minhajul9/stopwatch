const hr = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
let myInterval;
let minValue = parseInt(min.innerText)
let secValue = parseInt(sec.innerText);
let hrValue = parseInt(hr.innerText)

const increaseTime = () => {
    secValue += 1;
    if (secValue === 60) {
        minValue += 1;
        if (minValue === 60) {
            hrValue += 1;
            hr.innerText = hrValue;
            min.innerText = '00';
            sec.innerText = '00';
            minValue = 0;
            secValue = 0;
        }
        else{
            min.innerText = minValue;
            sec.innerText = '00';
            secValue = 0;
        }
    }
    else{
        sec.innerText = secValue;
    }
}

const counterTimer = () => {
    myInterval = setInterval(increaseTime, 1000);
}

const resetTimer = () => {
    hr.innerText = '00';
    min.innerText = '00';
    sec.innerText = '00';
    hrValue = 0;
    minValue = 0;
    secValue = 0;
    clearInterval(myInterval);
}

const pauseTimer = () => {
    clearInterval(myInterval);
}