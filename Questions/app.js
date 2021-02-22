// select every buttons at once
const btns = document.querySelectorAll('.question-btn');


btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        // search for the parent class to traverse the DOM i.e '.questions' class
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
});