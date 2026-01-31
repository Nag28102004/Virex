// gsap.fromTo("#title",{
//     y: -180
// },{
//     y:0,
//     scrollTrigger:{
//         trigger:"#title",
//         end: "bottom top",
//         invalidateOnRefresh: true,
//         scrub: 2,
//         ease: "expoScale(0.5,7,none)"
//     }
// })
// Netflix-style zoom IN animation for "Redefine Your Style" text
gsap.to('.cover-image h1', {
    scale: 10,
    opacity: 0,
    ease: 'power2.inOut',
    scrollTrigger: {
        trigger: '.cover-image-wrapper',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
        pin: '.cover-image',
        anticipatePin: 1,
        markers: false,
        onLeave: () => {
            document.querySelector('.cover-image').style.overflow = 'hidden';
        },
        onEnterBack: () => {
            document.querySelector('.cover-image').style.overflow = 'visible';
        }
    }
});

// Optional: Add a subtle rotation for extra flair
gsap.to('.cover-image h1', {
    rotationY: 15,
    ease: 'power2.inOut',
    scrollTrigger: {
        trigger: '.cover-image-wrapper',
        start: 'top top',
        end: 'bottom top',
        scrub: 2
    }
});
// discover section animation 

const discover_t1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".slide",
        start: "top 20%",
        scrub:2,
        ease:"ease"
    }
})

discover_t1.to(".slide1",{
    y:220
});
discover_t1.to(".slide2",{
    y:220
});
discover_t1.to(".slide3",{
    y:220
});
discover_t1.to(".slide4",{
    y:220
});


gsap.to("#image-section2",{
    clipPath: "circle(100% at 50% 50%)",
    scrollTrigger:{
        trigger: "#image-section > .container",
        start:"top top",
        end : "bottom bottom",
        scrub:4,
        pin :true,
        onEnter : () => {
            document.body.classList.add("dark-theme")
        },
        onLeaveBack: () => {
            document.body.classList.remove("dark-theme")
        }
    }
})

// furniture section  animation 
//select all grid iteam 
const gridWrapper  = gsap.utils.toArray(".grid-items");

gridWrapper.forEach(wrapper => {
    // select all box within the current wrapper 
    const boxes = wrapper.querySelectorAll(".box");

    //create gsap animtion with box element 
    boxes.forEach(box => {
        //create gsap animation 
        gsap.from(box,{
            y:150,
            duration: 0.5,
            scrollTrigger:{
                trigger:box,
                start: "top bottom",
                end: "bottom top",
                scrub:4
            }
        })
    });
})

// change text of furniture section
const heading = document.querySelector(".furniture-title h2")
const sections = gsap.utils.toArray(".grid-wrapper");

let Text_h2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#furniture-section > .container",
        start:"top 50%",
        end:"top 50%",
        scrub:2,
        ease:"ease",
        markers:false,
        onEnter: ()=> {
            gsap.set(heading,{position:"fixed",bottom:"0",zIndex:-1000})
        },
        onLeaveBack: ()=> {
            gsap.set(heading,{position:"relative",bottom:"0"})
            document.body.classList.remove("darker-theme")
        }
    }
})
//change text on scroll 
sections.forEach((section,i)=>{
    //create gsap animation 
    ScrollTrigger.create({
        trigger: section,
        start:"bottom-=20% bottom",
        end: "bottom top",
        onEnter: ()=> {
            updateHeading(i)
            //add dark theme on the body when index is 0 
                document.body.classList.remove("dark-theme")
        },
        onLeaveBack: ()=> {
            updateHeading(i)
                document.body.classList.add("darker-theme")
        }
    })
})

//update the heading text base on the index 

function updateHeading(index){
    const headingText = ["Furniture","Decor","Office","Tech"];
    heading.textContent = headingText[index];
}
//initially set the heading text to the first item
updateHeading(0)
