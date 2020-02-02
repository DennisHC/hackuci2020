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
  
  str = updateTimeAMPM(date);

//  hour = updateTime(hour);
//  min = updateTime(min);
//  sec = updateTime(sec);   document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */

  document.getElementById("clock").innerText = str;
  let t = setTimeout(function(){ currentTime() }, 1000); 
}

function updateTimeAMPM(date)
{
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();

    let ampm = currentHour >= 12 ? 'pm' : 'am';

    if (currentMinute > 60)
    {
        ++currentHour;
        currentMinute = currentMinute % 60;
    }
    else if(currentMinute < 10)
    {
        currentMinute = "0" + currentMinute;
    }

    if (currentHour > 12)
    {
        currentHour = currentHour % 12;
    }
    else if(currentHour < 10)
    {
        str += "0";
    }
    let str = "";
/*
    if(currentHour < 10)
    {
        let str = "0" + currentHour + " : " + currentMinute + ampm;
    }

    if(currentMinute < 10)
    {
        str = currentHour + " : 0" + currentMinute + ampm;
    }
    */
    str = currentHour + " : " + currentMinute + ampm;
    //console.log(str);
    return str;
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
    document.getElementById("positiveAffirmations").innerHTML = "<pre id=positiveAffirmations>" + todayMessage + "</pre>";
}

function generateRandomPositiveAffirmation()
{
    let diceRoll = Math.floor(Math.random() * 10);

    switch (diceRoll)
    {
        case 1:
            return "“The Way Get Started Is To Quit Talking And Begin Doing.” \n– Walt Disney";
            break;
        case 2:
            return "The Pessimist Sees Difficulty In Every Opportunity.\n The Optimist Sees Opportunity In Every Difficulty.”\n – Winston Churchill";
            break;
        case 3:
            return "“Don’t Let Yesterday Take Up Too Much Of Today.”\n – Will Rogers";
            break;
        case 4:
            return "“You Learn More From Failure Than From Success.\n Don’t Let It Stop You. Failure Builds Character.”\n – Unknown";
            break;
        case 5:
            return "“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.”\n – Inspirational Quote By Vince Lombardi";
            break;
        case 6:
            return "“If You Are Working On Something That You Really Care About,\n You Don’t Have To Be Pushed. The Vision Pulls You.”\n – Steve Jobs";
            break;
        case 7:
            return "“People Who Are Crazy Enough To Think They Can Change The World,\n Are The Ones Who Do.”\n – Rob Siltanen";
            break;
        case 8:
            return "“Failure Will Never Overtake Me\n If My Determination To Succeed Is Strong Enough.”\n – Og Mandino";
            break;
        case 9:
            return "“Entrepreneurs Are Great At Dealing With Uncertainty\n And Also Very Good At Minimizing Risk.\n That’s The Classic Entrepreneur.”\n – Mohnish Pabrai";
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



/* TO DO */

let todos = [  ];

function display(){
    document.getElementById('todo-list').innerHTML = "To Do List:";
    todos.forEach(createTodoItem);
    document.getElementById('todo-list').innerHTML += `
        <div class="todo-add-button" onclick="askForTodo();">
            <div class="todo-add-text"> Click to Add </div>
        </div>
    `;
}

function createTodoItem(item, index){
    let template = `
        <div class="todo-item" onclick="toggle(${index});">
            <div class="todo-content ${item.isComplete && "todo-complete"}"> ${item.todoContent} </div>
            <div class="todo-check"> ${item.isComplete ? "⦿" : "◯"} </div>
        </div>
    `;
    document.getElementById('todo-list').innerHTML += template;
}

async function askForTodo()
{
    const { value: text } = await Swal.fire({
        title: 'Add To-Do to List',
        input: 'text',
        inputPlaceholder: 'Enter Name of To-Do'
    });

    if(text){
        addItem(text)
    }
    
}

function addItem(content){
    todos.push({
        todoContent: content,
        isComplete: false
    });
    display();
}

function toggle(index){
    todos[index].isComplete = !todos[index].isComplete;
    display();
}

/* end of TODO */

retrieveDate();

currentTime(); /* calling currentTime() function to initiate the process */

positiveAffirmationsGenerator();

