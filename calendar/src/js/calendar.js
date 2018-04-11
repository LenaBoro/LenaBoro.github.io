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

let birthday = new Date(2018,3,17);
let car = new Date(2018,3,1);
let sport = new Date(2018,4,2);

if(dataMonth) inputMonth.innerHTML = `${months[dataMonth]} ${dataYear}`;//show month
let dataDays = 33 - new Date(dataYear, dataMonth, 33).getDate();//days in month and chech leap-year(feb)++

function getDay(data){  //function tale name day 0-monday,1-thuesday, ...
    let day = data.getDay();
    if (day === 0) day = 7;
    return day-1;
}
function createCalendar(year,month) {
    //first current data
    let currentData = new Date(year, month, 1);
    let lastData = new Date(year, month - 1, 1);
    let lastDaysLastMonth = (33 - new Date(lastData.getFullYear(), lastData.getMonth(), 33).getDate()) - (getDay(currentData)) + 1;
    let lastDateMonth = new Date(year, month + 1, 0);
    let f = 1; //next month

    let tableCalendar = '<table class="table-calendar"><tbody><tr>';
    //past month
    for (let i = 0; i < getDay(currentData); i++) {
        tableCalendar += `<td class="past-month">${lastDaysLastMonth}</td>`;
        lastDaysLastMonth++;
    }

    //currently month
    while (currentData.getMonth() === month) {
        if(data.getDate() === currentData.getDate() && data.getMonth() === month && data.getFullYear() === currentData.getFullYear() ){
            tableCalendar += `<td class="today"> ${currentData.getDate()}</td>`;
        }
        //events
        else if(dataMonth === car.getMonth() &&
            car.getDate()!== null &&
            car.getDate()===currentData.getDate() &&
            car.getFullYear()===currentData.getFullYear()){
            tableCalendar += `<td class="events">${currentData.getDate()}<span class="description">take a car </span></td>`;
        }
        else if(dataMonth === birthday.getMonth() &&
            birthday.getDate()!== null &&
            birthday.getDate()===currentData.getDate() &&
            birthday.getFullYear() === currentData.getFullYear()){
            tableCalendar += `<td class="events"> ${currentData.getDate()}<span class="description">birthday Andrey</span></td>`;
        }
        else if(dataMonth === sport.getMonth() &&
            sport.getDate()!== null &&
            sport.getDate()===currentData.getDate() &&
            sport.getFullYear()===currentData.getFullYear()){
            tableCalendar += `<td class="events"> ${currentData.getDate()}<span class="description">go to sport</span></td>`;
        }
        else {
            tableCalendar += `<td class="day"> ${currentData.getDate()}</td>`;
        }
        if (getDay(currentData) === 6) {//7 days in a week
            tableCalendar += `</tr><tr>`
        }
        currentData.setDate(currentData.getDate() + 1)
    }
    //next month
    for (let i = getDay(lastDateMonth); i < 6; i++) {
        tableCalendar += `<td class="future-month" >${f}</td>`;
        f++;
    }
    tableCalendar += `</tr><tbody></table>`;
    document.querySelector('#calendar').innerHTML = tableCalendar;
}
createCalendar(dataYear,dataMonth);
addNameDays();

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

//arrows
function pressUp(){
    if(dataMonth === 11){
        dataMonth = 0;
        dataYear++;
    }else dataMonth++;
    inputMonth.innerHTML = `${months[dataMonth]} ${dataYear}`;
    createCalendar(dataYear, dataMonth);
    addNameDays()
}
function pressBack(){
    if(dataMonth === 0){
        dataMonth = 11;
        dataYear--;
    }else dataMonth--;
    inputMonth.innerHTML = `${months[dataMonth]} ${dataYear}`;
    createCalendar(dataYear,dataMonth);
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


