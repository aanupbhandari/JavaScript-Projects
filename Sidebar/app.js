// select items
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');

// toggle button functionality
toggleBtn.addEventListener('click', function(){
    console.log(sideBar.classList);
    sideBar.classList.toggle('show-sidebar');
});

// close button functionality
closeBtn.addEventListener('click', function(){
    sideBar.classList.remove('show-sidebar');
})