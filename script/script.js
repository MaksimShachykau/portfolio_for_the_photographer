let post = document.querySelectorAll('.post'),
    portfolioBlock = document.querySelector('.porfolio-block'),
    postFooter = document.querySelectorAll('.img-footer');



portfolioBlock.onmouseover = function(event){
    let target = event.target;
    if(target.classList.contains('post')){
        target.querySelector('.img-footer').style.top = '70%'
        target.querySelector('.img-footer').style.opacity = '1'
        target.querySelector('img').style.opacity = '0.4'
    }
    if(target.classList.contains('post-img')){
        target.parentNode.querySelector('.img-footer').style.top = '70%'
        target.parentNode.querySelector('.img-footer').style.opacity = '1'
        target.style.opacity = '0.4'
        target.parentNode.querySelector('.img-footer').style.zIndex = '2'

    }
   
    
}
portfolioBlock.onmouseout = function(event){
    let target = event.target,
        reTarget = event.relatedTarget;
    if(reTarget.tagName == 'A' || reTarget.getAttribute('src') == 'img/pic.svg'){
        return;
    }
    if(target.classList.contains('post') ){
        target.querySelector('.img-footer').style.top = '80%'
        target.querySelector('.img-footer').style.opacity = '0'
        target.querySelector('img').style.opacity = '1'

    }
    if(target.classList.contains('post-img')){
        target.parentNode.querySelector('.img-footer').style.top = '80%'
        target.parentNode.querySelector('.img-footer').style.opacity = '0'
        target.style.opacity = '1'
        target.parentNode.querySelector('.img-footer').style.zIndex = '0'

    }
}
errorEmagePost = () => {
    post.forEach(element => {
        if(element.querySelector('img').getAttribute('src') == ''){
            element.querySelector('img').setAttribute('src', 'img/pic.svg');
            if(screen.width < 500){
                element.querySelector('img').setAttribute("style", "width:40px; height:40px;"); 

            }else if(screen.width < 600){
                element.querySelector('img').setAttribute("style", "width:70px; height:70px;"); 

            }else if(screen.width < 1000){
                element.querySelector('img').setAttribute("style", "width:100px; height:100px;"); 
            }else{
                element.querySelector('img').setAttribute("style", "width:100px; height:100px;"); 
            }
        }
    });
}
errorEmagePost();





let modalImg = document.querySelector('.modal-img');
let like = document.querySelectorAll('.like');

portfolioBlock.onclick = (event) => {
    let target = event.target;
        if(target.classList.contains('a-zoom')){
            window.scrollTo(0,0)
            modalImg.querySelector('img').setAttribute('src', target.parentNode.parentNode.parentNode.querySelector('img').getAttribute('src'))
            modalImg.style.display = 'block';
            document.body.style.overflowY = 'hidden';
        }
        if(target.classList.contains('a-like')){
            if((target.parentNode.parentNode.parentNode.querySelector('img').getAttribute('src') == 'img/pic.svg')){
                return;
            }else if(target.parentNode.classList.contains('active')){
                target.parentNode.classList.remove('active')
            }else{
                target.parentNode.classList.add('active')
            }
        }
}
let closeModalImg = document.querySelector('.close-modal-img');

closeModalImg.onclick = () => {
    modalImg.style.display = 'none';
    document.body.style.overflowY = 'auto';
}







let tagNews = document.querySelectorAll('.name_tags'),
    tagsBlock = document.querySelector('.tags'),
    newsBlock = document.querySelector('.news'),
    temNews = document.querySelector('.tem_news'),
    headNews = document.querySelector('.news_head_text'),
    newsImg = document.querySelector('.img_news'),
    newsText = document.querySelector('.news_text');

tagsBlock.onclick = (event) => {
    let target = event.target;
    if(target.classList.contains('name_tags')){
        temNews.textContent = `${target.textContent}, Fashion`
        newsImg.setAttribute('src', `img/news/${target.textContent}.jpg`)
        
    }
}






const anchors = document.querySelectorAll('a.ancor')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector('#'+blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
