//
const months = ['Январь', 'Февраль', 'Март', 'Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
const nameDays =['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресение'];
const back = document.querySelector('#back');
const up = document.querySelector('#up');
const inputMonth = document.querySelector('#month'); //take month
//take a current date
let data = new Date();
let dataYear = data.getFullYear();
let dataMonth = data.getMonth();

let car = new Date(2018,3,1);
let carText ='take a car';

if(dataMonth) inputMonth.innerHTML = `${months[dataMonth]} ${dataYear}`;//show month
let dataDays = 33 - new Date(dataYear, dataMonth, 33).getDate();//days in month and chech leap-year(feb)++

function getDay(data){  //function tale name day 0-monday,1-thuesday, ...
    let day = data.getDay();
    if (day === 0) day = 7;
    return day-1;
}
const nameEvent = document.querySelector('#event-name-js');
const dateEvent = document.getElementById('event-date-js');
const buttonEvent = document.querySelector('#event-add-js');
const descriptionEvent = document.querySelector('#event-description-js');
const buttonAdd = document.querySelector('#button-js');

function createCalendar(year,month,eventDate,eventName) {
    //first current data
    let currentData = new Date(year, month, 1);
    let lastData = new Date(year, month - 1, 1);
    let lastDaysLastMonth = (33 - new Date(lastData.getFullYear(), lastData.getMonth(), 33).getDate()) - (getDay(currentData)) + 1;
    let lastDateMonth = new Date(year, month + 1, 0);
    let f = 1; //next month
    let tableCalendar = '<table class="table-calendar"><tbody><tr>';
    //past month
    for (let i = 0; i < getDay(currentData); i++) {
        tableCalendar += `<td data-month=${currentData.getMonth()-1} data-date=${lastDateMonth} class="past-month">${lastDaysLastMonth}</td>`;
        lastDaysLastMonth++;
    }
    //currently month
    while (currentData.getMonth() === month) {

        if(data.getDate() === currentData.getDate() && data.getMonth() === month && data.getFullYear() === currentData.getFullYear() ){
            tableCalendar += `<td data-month=${currentData.getMonth()} data-date=${currentData.getDate()} class="today"> ${currentData.getDate()}</td>`;
        }
        //events
        else if(dataMonth === eventDate.getMonth() &&
            eventDate.getDate()!== null &&
            eventDate.getDate()===currentData.getDate() &&
            eventDate.getFullYear()===currentData.getFullYear()){
            tableCalendar += `<td data-month=${currentData.getMonth()} data-date=${currentData.getDate()} class="events">${currentData.getDate()}<span class="description">${eventName}</span></td>`;
        }
        else {
            tableCalendar += `<td data-month=${currentData.getMonth()} data-date=${currentData.getDate()} class="day"> ${currentData.getDate()}</td>`;
        }

        if (getDay(currentData) === 6) {//7 days in a week
            tableCalendar += `</tr><tr>`
        }
        currentData.setDate(currentData.getDate() + 1)
    }
    //next month
    for (let i = getDay(lastDateMonth); i < 6; i++) {
        tableCalendar += `<td data-month=${currentData.getMonth()+1} data-date=${f} class="future-month" >${f}</td>`;
        f++;
    }
    tableCalendar += `</tr><tbody></table>`;
    document.querySelector('#calendar').innerHTML = tableCalendar;
}
createCalendar(dataYear,dataMonth,car,carText);
addNameDays();

function createEvent() {
    let currentData = new Date(dataYear,dataMonth);//current data
    let data = new Date(dateEvent.value); //date event 2018-3-17
    let eventDay = data.getDate();//date event
    const table = document.querySelector('.table-calendar');
    const tbody = table.querySelector('tbody');
    let td;
    const tr = tbody.childNodes;
    for(let i=0; i< tr.length; i++){
        td = tr[i].childNodes;
        for(let y = 0; y < td.length; y++){
           let tdDay =td[y].innerHTML;//text td[y]
           let tdMonth = currentData.getMonth(); //month td[y] where integrate our event
           let tdYear = currentData.getFullYear(); //year td[y]
           let tdData = `${tdYear}-${tdMonth+1}-${tdDay}`;
           let tD = new Date(tdData);// date td[y] xxxx-xx-xx
            let innerText = td[y].innerHTML;
            if(td[y].getAttribute("data-month") == data.getMonth() && td[y].getAttribute('data-date') == eventDay) {
                let event = nameEvent.value;
                let text = descriptionEvent.value;
                td[y].innerHTML = `${innerText} <h4><b>${event}</b></h4><span class="description">${text}</span> `;
                td[y].classList.add("events");

           }
        }
    }
}
    buttonEvent.addEventListener('click',createEvent);


//add name days in first the row
function addNameDays(){
    const table = document.querySelector('.table-calendar');
    const tbody = table.querySelector('tbody');
    const firstTr = tbody.firstElementChild;
    let firstTd = firstTr.querySelectorAll('td');
    for (let i = 0; i < firstTd.length; i++) {
        let text = firstTd[i].innerHTML;
        firstTd[i].innerHTML = `${nameDays[i]}, ${text}`
    }
}
//actions arrows
function pressUp(){
    if(dataMonth === 11){
        dataMonth = 0;
        dataYear++;
    }else dataMonth++;
    inputMonth.innerHTML = `${months[dataMonth]} ${dataYear}`;
    createCalendar(dataYear, dataMonth,car,carText);
    addNameDays()
}
function pressBack(){
    if(dataMonth === 0){
        dataMonth = 11;
        dataYear--;
    }else dataMonth--;
    inputMonth.innerHTML = `${months[dataMonth]} ${dataYear}`;
    createCalendar(dataYear,dataMonth,car,carText);
    addNameDays()
}
back.addEventListener('click',pressBack);
up.addEventListener('click',pressUp);
document.addEventListener('keydown',event =>{
    //next
    if(event.keyCode == 39){
        pressUp()}
    else if(event.keyCode == 37){
        pressBack()
    }
});


let flag = false;
buttonAdd.addEventListener('click',(event)=>{
   event.preventDefault();
    if(!flag){
       document.querySelector('.form-event').classList.remove('hidden');
       flag =true;
    }else {
       flag=false;
       document.querySelector('.form-event').classList.add('hidden');
   }
});