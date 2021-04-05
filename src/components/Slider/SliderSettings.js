export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  swipeToSlide: true,

  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "30px",
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "10px",
      },
    },
  ],
};
