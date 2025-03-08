const initSmoothScrolling = ()=>{
    const lenis = new Lenis({
        duration:1.2,
        lerp:0.15,
        smoothWheel:true
    });

    function raf(time){
        lenis.raf(time)
        requestAnimationFrame(raf)
    };

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time)=>{
        lenis.raf(time*1000)
    });
}

initSmoothScrolling();

gsap.to(".hChar",{
    x:-1500,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:".mainFirstContainer",
        scroller:"body",
        markers:false,
        scrub:2,
        start: "top 0%",
        end: "top -120%",
        pin:true
    }
});

gsap.to('.ehar',{
    x:-600,
    y:-800,
    duration:2,
    delay:1,
    scrollTrigger:{
        scrub:2,
        start: "top 0%",
        end: "top -100%",
        pin:true
    }
})

gsap.to('.lChar',{
    y:-800,
    duration:2,
    delay:1,
    scrollTrigger:{
        scrub:2,
        start: "top 0%",
        end: "top -100%",
        pin:true
    }
})

gsap.to('.oChar',{
    x:1300,
    duration:2,
    delay:1,
    scrollTrigger:{
        scrub:2,
        start: "top 0%",
        end: "top -100%",
        pin:true
    }
});

gsap.from('.aboutImg .imgConatiner',{
    opacity: 0,
    duration:2,
    scale: 0,
    delay:1,
    scrollTrigger:{
        markers:false,
        scrub:2,
        start: "top -30%",
        end: "top -100%",
        pin:true
    }
})

gsap.from('.aboutText',{
    opacity: 0,
    duration:2,
    right: "30%",
    delay:1,
    scrollTrigger:{
        markers:false,
        scrub:2,
        start: "top -30%",
        end: "top -100%",
        pin:true
    }
})


gsap.from('.aboutSecondContainer .videoContainer',{
    duration:2,
    scale: 0.5,
    delay:1,
    scrollTrigger:{
        trigger:".aboutSecondContainer",
        scroller:"body",
        markers:false,
        scrub:2,
        start: "top 0%",
        end: "top -90%",
        pin:true
    }
})

    gsap.to('.pinThirdContainer h1',{
        // duration:2,
        transform: "translateX(-87%)",
        delay:1,
        scrollTrigger:{
            trigger:".pinThirdContainer",
            scroller:"body",
            markers:false,
             scrub:3,
            start: "top 0%",
            end: "top -500%",
            pin:true
        }
    })

// let imgScrollT1 = gsap.timeline()


gsap.from('.imgCommonContainer',{
    top: "160%",
    stagger: 1,
    duration: 2,
    scrollTrigger:{
        trigger:".pinThirdContainer",
        scroller:"body",
        scrub:3,
        start: "top 0%",
        end: "top -500%",
    }
})

window.addEventListener('wheel', (args)=>{
    gsap.to(".marqElement",{
        transform: args.deltaY > 0 ? 'translateX(-200%)' : 'translateX(100%)',
        ease: 'none',
        duration:5,
        repeat: -1
    });

    gsap.to(".marqImg img",{
        rotate : args.deltaY > 0 ? 0 : 180,
    });
});

const artElements = document.querySelectorAll('.art');
const artImageContainer = document.querySelector('.artImageContainer');

artElements.forEach((artElement) => {
    artElement.addEventListener('mouseenter', (inargs) => {
        const imageId = artElement.getAttribute('data-imageid');

        if(!isNaN(imageId) && imageId != null){
            artImageContainer.style.display = 'block';
            artImageContainer.innerHTML = '';

            const imgContainer = document.createElement('img')
            imgContainer.setAttribute('src', `./Assets/img${imageId}.jpg`);

            artImageContainer.appendChild(imgContainer)

            gsap.from(imgContainer,{
                opacity: 0,
                scale: 0.9,
                transform: "translateY(-10%)",
                ease: 'ease'
            })

        }
    });


    artElement.addEventListener('mouseleave', (outargs) => {
        gsap.to('.artImageContainer img',{
            opacity: 0,
            scale: 0,
            ease: 'ease'
        })
        artImageContainer.style.display = 'none';
    });
});