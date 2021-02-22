// reviews data
const reviews = [
    {
        id: 1,
        author: 'Anup Bhandari',
        job:'UX/UI Designer',
        img:'https://res-console.cloudinary.com/anupbhandari/thumbnails/v1/image/upload/v1607435002/QW51cF9oa3Ntd2g=/preview',
        info:'Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Vel, Eum. Excepturi Consequatur Possimus Ducimus Facilis Corporis Neque Velit Voluptatem Nostrum?',
    },
    {
        id: 2,
        author: 'Vardan Raj Karki',
        job:'Public Health Advisor',
        img:'https://res.cloudinary.com/anupbhandari/image/upload/v1607435149/Vardan_wdsmdu.jpg',

        info:'Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Vel, Eum. Excepturi Consequatur Possimus Ducimus Facilis Corporis Neque Velit Voluptatem Nostrum?',
    },
    {
        id: 3,
        author: 'Ananta Pathak',
        job:'Web Developer',
        img:'https://res.cloudinary.com/anupbhandari/image/upload/v1607435379/Ananta_c6eji9.jpg',

        info:'Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Vel, Eum. Excepturi Consequatur Possimus Ducimus Facilis Corporis Neque Velit Voluptatem Nostrum?',
    },
    {
        id: 4,
        author: 'Anupam Kunwar',
        job:'Public Health Advisor',
        img:'https://res.cloudinary.com/anupbhandari/image/upload/v1607435380/Anupam_mvg3tl.jpg',

        info:'Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Vel, Eum. Excepturi Consequatur Possimus Ducimus Facilis Corporis Neque Velit Voluptatem Nostrum?',
    },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevbtn = document.querySelector('.prev-button');
const nextbtn = document.querySelector('.next-button');

// assigning initial value

let currentItem = 0;

// load initial item

window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
    
})
// show person based on item
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent  = item.info;
}
// show next person

nextbtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);

})

// show previous person
prevbtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})
