// set an array of months and weekdays

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

//  select the items for functionality
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items =document.querySelectorAll('.deadline-format h4')

// functionality: whenever page loads set the date automatically after 10 days
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2020, 11, 31, 16, 20, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay +10, 11, 30,0)


// now for the countdown
// functionality for year, hrs, min and sec
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const sec = futureDate.getSeconds();

// fucntionality for month
let month = futureDate.getMonth();
month = months[month];

// fucntionality for date
const date = futureDate.getDate();

// fucntionality for days
let weekday = futureDate.getDay();
weekday = weekdays[weekday];

// displayes in the html
giveaway.textContent = `Giveaway Ends at ${weekday} ${date} ${month} ${year} ${hours}:${minutes}`;

// calculating miliseconds 

const futureTime = futureDate.getTime();
function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;

    // values in ms
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60 min
    // 1d = 24hr

    // ms in a day
    const oneDay = 24 * 60 * 60 * 1000;
    // ms in an hour
    const oneHour = 60 * 60 * 1000;
    // ms in a min
    const oneMin = 60 * 1000;

    // calculate all values

    let days = t / oneDay;
    days = Math.floor(days)
    let hours = Math.floor((t%oneDay) / oneHour);
    let minutes = Math.floor((t%oneHour)/oneMin)
    let seconds = Math.floor((t%oneMin)/1000);
    console.log(sec);

    // set values array

    const values = [days, hours, minutes, seconds];

    function format(item){
        if(item<10){
            return (item = `0${item}`);
        }
        return item
    }
    

    items.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    });
if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4>Sorry Your Giveaway Has Been Expired</h4>`  
    }
    
}

// countdown

let countdown = setInterval(getRemainingTime,1000);


getRemainingTime()

