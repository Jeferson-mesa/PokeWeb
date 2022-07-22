// Function to go to the top

window.onscroll = function() {
  if(document.documentElement.scrollTop > 100){
    document.querySelector('.go-top-container').classList.add('show');
    document.querySelector('.go-bottom-container').classList.add('show');
  }else {
    document.querySelector('.go-top-container').classList.remove('show');
    document.querySelector('.go-bottom-container').classList.remove('show');
  }
}

document.querySelector('.go-top-container')
.addEventListener('click', () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.querySelector('.go-bottom-container')
.addEventListener('click', () =>{
  window.scrollTo(0, document.body.scrollHeight);
});

// Swiper to Images Scroll 
var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 35,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        },
      });
      