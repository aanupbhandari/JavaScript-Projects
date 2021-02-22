import people from "./data.js"
import getElement from "./utils/getElement.js"

const container = getElement(".slide-container")
const nextBtn = getElement(".next-btn")
const prevBtn = getElement(".prev-btn")

container.innerHTML = people.map((person,slideIndex)=>{
    const { img, name, job, text } = person;
    let position = 'next'
    console.table(position);
    if(slideIndex === 0){
        position = 'active'
    }
    if(slideIndex === people.length -1){
        position = 'last'
    }
    return `<article class="slide ${position}">
            <img src= "${img}" class="img"
            alt="">
            <h4>"${name}"</h4>
            <p class="title">"${job}"</p>
            <p class="text">"${text}"</p>
        </article>`
}).join(" ")

const startSlide = (type)=>{
    const active = document.querySelector('.active')
    const last = document.querySelector('.last');
    let next = active.nextElementSibling;
    if(!next){
        next = container.firstElementChild
    }
    console.log(next);
    active.classList.remove(['active']);
    last.classList.remove(['last']);
    next.classList.remove(['next'])

    if(type === 'prev'){
        active.classList.add('next');
        last.classList.add('active');
        next = last.previousElementSibling
        if(!next){
            next = container.lastElementChild
        }
        next.classList.remove(['next'])
        next.classList.add('last')
        return
    }
    active.classList.add('last');
    last.classList.add('next');
    next.classList.add('active')

}

nextBtn.addEventListener('click', ()=>{
    startSlide('next');
})
prevBtn.addEventListener('click', ()=>{
    startSlide('prev');
})