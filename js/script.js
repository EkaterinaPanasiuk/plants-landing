//preloader
window.onload=function(){
    let preloader=document.querySelector('#preloader');
    preloader.classList.add('opacity');
    setTimeout(function(){
        preloader.classList.add('hidden')
    },1000);
}


//burger-menu
let burger=document.querySelector(".header__burger");
let headerMenu=document.querySelector(".header__nav");
burger.addEventListener('click',function(){
    burger.classList.toggle('cross');
    headerMenu.classList.toggle('active');
    document.querySelector('body').classList.toggle('fixed');
});

//modal-window
window.addEventListener('click', function(event){
if(event.target.dataset.modalButton){
    let item=event.target.closest('.gallery__item');
    let modal=item.querySelector('.gallery__modal');
    modal.classList.remove('hidden');
    document.querySelector('body').classList.add('fixed')
}
})
window.addEventListener('click', function(event){
    if(event.target.dataset.modalClose){
        let modal=event.target.closest('.gallery__modal');
        modal.classList.add('hidden');
        document.querySelector('body').classList.remove('fixed')
    }
})


