/* _ * _ * _ * _ * _ * SHOW MENU _ * _ * _ * _ * _ * */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* _ * _ * _ * _ * _ *  MENU SHOW _ * _ * _ * _ * _ *  */
/* validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

/* _ * _ * _ * _ * _ *  MENU HIDDEN _ * _ * _ * _ * _ *  */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}
/* _ * _ * _ * _ * _ *  REMOVE MENU MOBILE _ * _ * _ * _ * _ *  */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//*_ * _ * _ * _ * _ *  SWIPER PROJECTS _ * _ * _ * _ * _ * 

let swiperProjects = new Swiper(".projects__container", {
    loop:true,
    spaceBetween: 24,


    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
    }
});

/* _ * _ * _ * _ * _ *  SWIPER TESTIMONIAL _ * _ * _ * _ * _ *  */
let swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});



/* _ * _ * _ * _ * _ *  SCROLL SECTION ACTIVE LINK _ * _ * _ * _ * _ *  */
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
  

/*  _ * _ * _ * _ * _ *  SHOW SCROLL UP _ * _ * _ * _ * _ * */
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

   // _ * _ * _ * _ * _ *  DARK LIGHT THEME _ * _ * _ * _ * _ * 
   const themeButton = document.getElementById('theme-button')
   const darkTheme = 'dark-theme'
   const iconTheme = 'ri-sun-line'
   
   // Previously selected topic (if user selected)
   const selectedTheme = localStorage.getItem('selected-theme')
   const selectedIcon = localStorage.getItem('selected-icon')
   
   // We obtain the current theme that the interface has by validating the dark-theme class
   const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
   const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
   
   // We validate if the user previously chose a topic
   if (selectedTheme) {
     // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
     themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
   }
   
   // Activate / deactivate the theme manually with the button
   themeButton.addEventListener('click', () => {
       // Add or remove the dark / icon theme
       document.body.classList.toggle(darkTheme)
       themeButton.classList.toggle(iconTheme)
       // We save the theme and the current icon that the user chose
       localStorage.setItem('selected-theme', getCurrentTheme())
       localStorage.setItem('selected-icon', getCurrentIcon())
   })

   // _ * _ * _ * _ * _ * CHANGE BACKGROUND HEADER _ * _ * _ * _ * _ * */
   const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


/* _ * _ * _ * _ * _ * SCROLL REVEAL ANIMATION _ * _ * _ * _ * _ * */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset: true /* Animations repeat */
})

sr.reveal(`.home__data, .projects__container, .testimonial__container, .footer__container`)
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`,{ origin: 'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, { origin: 'right'})
sr.reveal(`.qualification__content, .services__card`, { interval: 100})