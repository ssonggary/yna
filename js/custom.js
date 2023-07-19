gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".type");
let maxWidth = 0;

const getMaxWidth = () => {
  maxWidth = 0;
  sections.forEach((section) => {
    maxWidth += section.offsetWidth;
  });
};
getMaxWidth();
ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

gsap.to(sections, {
  xPercent: -70,
  x: () => `-${maxWidth - window.innerWidth}`,
  ease: "none",
  scrollTrigger: {
    trigger: "#wrap",
    pin: true,
    scrub: 1,
    end: () => `+=${maxWidth}`,
    invalidateOnRefresh: true,
  },
});
// gsap.to(".title-wrap", { autoAlpha: 0.2, top: 0, left: 0, duration: 1 });

const tl1 = gsap.timeline({ repeatDelay: 0.3 });
tl1.to(".title-wrap", { autoAlpha: 0.2, top: 0, duration: 1 });
tl1.to(".working-wrap", { autoAlpha: 1, top: "45%", duration: 0.9 });

// var sound = new Howl({
//   src: ["./common/audio/audio.mp3"],
//   autoplay: true,
//   volume: 1,
//   onend: function () {
//     console.log("Finished!");
//   },
// });
// sound.play();
