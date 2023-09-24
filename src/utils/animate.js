import gsap from "gsap";

const animate = () => {
  // play the video when user starts scrolling
  gsap.to("#page>video", {
    scrollTrigger: {
      trigger: `#page>video`,
      start: `3% top`, //start when user scrolls 3% of the page
      end: `bottom top`,
      markers: true,
      scroller: `#main`,
    },
    onStart: () => {
      document.querySelector("#page>video").play();
    },
  });
};

export default animate;
