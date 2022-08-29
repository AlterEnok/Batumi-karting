$('.rev_slider').slick({
  arrows: true,
  
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 5000,

 responsive: [
 
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  
  ]

});


