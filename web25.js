
/*==================== MENU SHOW Y HIDDEN ====================*/

            const navMenu = document.getElementById('header-menu'),
        navToggle = document.getElementById('header-bar'),
        navClose = document.getElementById('header-close')

                if(navToggle){

                    navToggle.addEventListener('click', () =>{

                        navMenu.classList.add('show-menu')


                    })
                }

                if(navClose){

                    navClose.addEventListener('click', () =>{

                        navMenu.classList.remove('show-menu')


                    })
                }
  
/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link'),
        scrollup = document.querySelectorAll('.scroll__up-link')

function linkAction(){
    const navMenu = document.getElementById('header-menu')
    const scroll__up = document.getElementById('scroll-up')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    scroll__up.classList.remove('show-menu')
    
}
navLink.forEach(n => n.addEventListener('click', linkAction)),
scrollup.forEach(n => n.addEventListener('click', linkAction))


/*==================== skill ====================*/

const skillsContent = document.getElementsByClassName('skill__mainbox'),
       skillsHeader = document.querySelectorAll('.skill__box')
    
          
          
function toggleSkills(){
          let itemClass = this.parentNode.className
          
              for(i = 0; i < skillsContent.length; i++){
                  skillsContent[i].className = 'skill__mainbox skills__close'
              }
              if(itemClass === 'skill__mainbox skills__close'){
                  this.parentNode.className = 'skill__mainbox skills__open'
              }
             
          }
skillsHeader.forEach((el) =>{
            el.addEventListener('click', toggleSkills)
     })

/*==================== swiper ====================*/

var swiper = new Swiper(".mySwiper", {
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        loop : true,
        grabCursor:true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
          },
});     


 /*==================== ScrollReveal ====================*/

 const sr = ScrollReveal({

    origin:'top',
    distance:'100px',
    duration:2500,
    delay:400,

    //reset:true

    
});
sr.reveal(`.home__img-pokemon`);
sr.reveal(`.home__textleft`,{duration:2800, delay: 500, origin: 'left'});
sr.reveal(`.home__textright`,{duration:2800, delay: 500, origin: 'right'});
sr.reveal(`.home__icon-mainlink-left `,{duration:3000, delay: 500, origin: 'bottom'});
sr.reveal(`.home__icon-mainlink-right `,{duration:3000, delay: 500, origin: 'top'});
sr.reveal(`.home__scroll-icon,.home__scroll-text,.home__scroll-arrow `,{duration:3000, delay: 500, origin: 'bottom'});


sr.reveal(`.about__info-pokemon`,{delay: 200, origin: 'left'});
sr.reveal(`.about__info-text`,{delay:200,origin:'right'});
sr.reveal(`.about__infotext-top,.about__infotext-bottom`,{interval: 300});

sr.reveal(`.skill__mainbox `,{interval: 300});

sr.reveal(`.footer__mainbox  `,{delay: 500,});


sr.reveal(`.certificate__box-img`,{interval: 300});

sr.reveal(`.footer__img-pokemon`,{delay: 100, origin: 'right'});
sr.reveal(`.footer__info-maintext `,{delay: 100, origin: 'left'});
sr.reveal(`.footer__mainicon  `,{delay: 100,});
sr.reveal(`.footer__copy  `,{delay: 200,origin: 'bottom'});
 /*==================== Scroll-up====================*/

function Scrollup() {

    const up  = document.getElementById('scroll-up')
    if(this.scrollY >= 100) up.classList.add('scroll-header'); 
    else up.classList.remove('scroll-header')
}
window.addEventListener('scroll', Scrollup)

