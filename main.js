window.addEventListener("load", () => {
    const element = document.querySelector(".typed-text");
    if (element) {
      new Typed(".typed-text", {
        strings: [
          "Hello, I’m <strong>DevX</strong>",
          "Front-end Developer",
          "Creative Coder"
        ],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 1500,
        loop: true
      });
    } else {
      console.error("عنصر .typed-text پیدا نشد.");
    }
  });
  window.addEventListener("load", () => {
    const element = document.querySelector(".typed-text");
  
    // دکمه‌ها از ابتدا کاملاً مخفی
    gsap.set(".buttons a", { opacity: 0, y: 30, pointerEvents: "none" });
  
    // خطوط اولیه
    gsap.from(".terminal-line", { opacity: 0, y: 30, duration: 1 });
    gsap.from(".typed-wrapper", { opacity: 0, y: 30, duration: 1.2, delay: 0.3 });
  
    if (element) {
      const typed = new Typed(".typed-text", {
        strings: [
          "Hello, I’m <strong>DevX</strong>",
          "Front-end Developer",
          "Creative Coder"
        ],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 1500,
        loop: false,
        onBegin: () => {
          // هیچ‌چیز نشون داده نشه تا تایپ شروع نشده
          gsap.set(".buttons a", { opacity: 0, y: 30, pointerEvents: "none" });
        },
        onComplete: () => {
          // بعد از اتمام تایپ، دکمه‌ها وارد شن
          gsap.to(".buttons a", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            pointerEvents: "auto"
          });
        }
      });
    }
  });
  // About Me animations
gsap.from(".about-content h2", {opacity:0, x:-50, duration:1, scrollTrigger:{trigger:".about", start:"top 80%"}});
gsap.from(".about-content p", {opacity:0, x:-50, duration:1, delay:0.3, scrollTrigger:{trigger:".about", start:"top 80%"}});
gsap.utils.toArray(".skills .progress").forEach((el, i)=>{
  gsap.to(el, {width: el.style.width, duration: 1.2, delay: 0.5 + i*0.2, scrollTrigger:{trigger:".about", start:"top 80%"}});
});

gsap.from(".about-image img", {opacity:0, y:50, duration:1, scrollTrigger:{trigger:".about", start:"top 80%"}});

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", e => {
  e.preventDefault();
  alert("پیام شما با موفقیت ارسال شد!");
  contactForm.reset();
});
