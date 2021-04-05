export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  centerPadding: "30px",
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
      },
    },
  ],
};
