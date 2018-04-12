const months = ['Январь', 'Февраль', 'Март', 'Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
const nameDays =['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресение'];
//take mouth
const inputMonth = document.querySelector('#month');
//take a current date
let data = new Date();
let dataYear = data.getFullYear();
let dataMonth = data.getMonth();
//current number
let dataDay =data.getDate();
//show month
    if(dataMonth){
        inputMonth.innerHTML = `${months[dataMonth]} ${dataYear}`;
    }
//days in month and chech leap-year(feb)++
let dataDays = 33 - new Date(dataYear, dataMonth, 33).getDate();
console.log(`number days in month ${dataDays}`);

//function for name day 0-monday,1-thuesday, ...
function getDay(data){
    let day = data.getDay();
    if (day === 0) day = 7;
    return day-1;
}
//click button

function createCalendar(year,month) {
    //first current data
    let currentData = new Date(year, month, 1);
    let lastData = new Date(year, month - 1, 1);
    let lastDaysLastMonth = (33 - new Date(lastData.getFullYear(), lastData.getMonth(), 33).getDate()) - (getDay(currentData)) + 1;
    let lastDateMonth = new Date(year, month + 1, 0);
    //next month
    let f = 1;
    //console.log(`current data all${currentData} month ${month} year ${year} name day ${nameDays[dataDayName]} number day ${dataDayName}`);
    let tableCalendar = '<table class="table-calendar"><tr>';
    //past month
    for (let i = 0; i < getDay(currentData); i++) {
        tableCalendar += `<td class="past-month">${lastDaysLastMonth}</td>`;
        lastDaysLastMonth++;
    }
    //currently month
    while (currentData.getMonth() === month) {
        if(currentData.getDate() === dataDay){
            tableCalendar += `<td class="today"> ${currentData.getDate()}</td>`;
        }else{
            tableCalendar += `<td class="day"> ${currentData.getDate()}</td>`;
        }
        if (getDay(currentData) % 7 === 6) {
            tableCalendar += `</tr><tr>`
        }
        currentData.setDate(currentData.getDate() + 1)

    }
    //next month
    for (let i = getDay(lastDateMonth); i < 6; i++) {
        tableCalendar += `<td class="future-month" >${f}</td>`;
        f++;
    }

    tableCalendar += `</tr></table>`;
    document.querySelector('#calendar').innerHTML = tableCalendar;
}
createCalendar(dataYear,dataMonth);
addNameDay();

const back = document.querySelector('#back');
const up = document.querySelector('#up');
back.addEventListener('click',function(){
    if(dataMonth === 0){
        dataMonth = 11;
        dataYear--;
    }else {
        dataMonth--;
    }
    inputMonth.innerHTML = `${months[dataMonth]} ${dataYear}`;
    createCalendar(dataYear,dataMonth);
    addNameDay()
});

up.addEventListener('click',function(){
    if(dataMonth === 11){
        dataMonth = 0;
        dataYear++;
    }else {
        dataMonth++;
    }
    inputMonth.innerHTML = `${months[dataMonth]} ${dataYear}`;
    createCalendar(dataYear, dataMonth);
    addNameDay()
});
//
function addNameDay(){
    const table = document.querySelector('.table-calendar');
    const tbo = table.querySelector('tbody');
    const firstTr = tbo.firstElementChild;
    let firstTd = firstTr.querySelectorAll('td');
    for (let i = 0; i < firstTd.length; i++) {
        let text = firstTd[i].innerHTML;
        firstTd[i].innerHTML = `${nameDays[i]}, ${text}`
    }
}