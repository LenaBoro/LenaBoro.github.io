//add

/*
let nameEvent =document.querySelector('#name-event-js');
let dateEvent =document.querySelector('#date-event-js');
const addButton = document.getElementById('button-add-js');


<section id="form-event" class="hidden">
                <input type="text" placeholder="название события" id="name-event-js" class="name-event">
                <input type="date" placeholder="дата" id="date-event-js" class="date-event">
                <button id="button-add-js">Добавить</button>
            </section>
let click=0;

let formEvent = document.getElementById('form-event');
const buttonShow =document.querySelector('#button-js');

buttonShow.addEventListener('click',function(){
    click++;
    if(click == 1){
        formEvent.classList.remove('hidden');
        formEvent.classList.add('show')
    }else if(click==2){
        click=0;
        formEvent.classList.add('hidden');
        formEvent.classList.remove('show')
    }

});

//addButton.addEventListener('click',function(){})

/*
 const table = document.querySelector('.table-calendar');
    const tbo = table.querySelector('tbody');
    let td;
    const tr = tbo.childNodes;

 for(let i=0; i< tr.length; i++){
        td = tr[i].childNodes;
        for(let y = 0; y<td.length; y++){
            if(td[y].innerHTML == Number(dateEvent.value)){
                let text = nameEvent.value;
                td[y].innerHTML += `<span class="description">${text}</span> `;
                td[y].classList.add("events");
            }
        }
    }*/


