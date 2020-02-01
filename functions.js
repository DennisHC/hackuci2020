let date = new Date();

function retrieveDate()
{
    let month = date.getMonth();
    month = updateMonth(month);

    let day = date.getDay();
    day = updateDay(day);

    let year = date.getFullYear();

    document.getElementById("date").innerText = month + " " + day + ", " + year;
}

function updateDay(n)
{
    if (n < 10)
    {
        return "0" + n;
    }
    else
    {
        return n;
    }
}

function updateMonth(month)
{
    switch (month + 1)
    {
        case 1: 
            return "January";
            break;
        case 2: 
            return "February";
            break;
        case 3: 
            return "March";
            break;
        case 4: 
            return "April";
            break;
        case 5: 
            return "May";
            break;
        case 6: 
            return "June";
            break;
        case 7: 
            return "July";
            break;
        case 8: 
            return "August";
            break;
        case 9: 
            return "September";
            break;
        case 10: 
            return "October";
            break;
        case 11: 
            return "November";
            break;
        case 12: 
            return "December";
            break;
    }
}

function currentTime()
{
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
}



function currentTime() {
  let hour = date.getHours();
  let min = date.getMinutes();
  var sec = date.getSeconds();

  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
  let t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

function updateTime(n) {
  if (n < 10) {
    return "0" + n;
  }
  else {
    return n;
  }
}

function positiveAffirmationsGenerator()
{
    let todayMessage = generateRandomPositiveAffirmation();
    document.getElementById("positiveAffirmations").innerText = todayMessage;
}

function generateRandomPositiveAffirmation()
{
    let diceRoll = Math.floor(Math.random() * 10)

    switch (diceRoll)
    {
        case 1:
            return "“The Way Get Started Is To Quit Talking And Begin Doing.” – Walt Disney";
            break;
        case 2:
            return "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill";
            break;
        case 3:
            return "“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers";
            break;
        case 4:
            return "“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown";
            break;
        case 5:
            return "“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi";
            break;
        case 6:
            return "“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs";
            break;
        case 7:
            return "“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen";
            break;
        case 8:
            return "“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino";
            break;
        case 9:
            return "“Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.” – Mohnish Pabrai";
            break;
        default:
            return "If you change nothing, nothing will change.";
            break;
    }
}
let i = 0;
let word = "Hello friend!"
let speed = 50;
function corgiButtonHandler()
{
    if (i < word.length)
    {
        document.getElementById("corgiButtonId").innerHTML += word.charAt(i);
        i++;
        setTimeout(corgiButtonHandler,speed)
    }
}

retrieveDate();

currentTime(); /* calling currentTime() function to initiate the process */

positiveAffirmationsGenerator();
