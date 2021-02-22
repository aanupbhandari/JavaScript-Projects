// select items i.e. about, tab-tn, articles

const about = document.querySelector('.about');
const tabBtn = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');
about.addEventListener('click',function(e){
    const id = e.target.dataset.id;
    if (id){
        // remove active from the buttons
        tabBtn.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        })
        // hide other articles
        articles.forEach(function(article){
            article.classList.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add('active')
    }
})