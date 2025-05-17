// EMAIL JS 
const contactForm = document.getElementById("contact-form"),
contactMessage = document.getElementById("contact-message");

const sendEmail = (e)=>{
    e.preventDefault();


// Service id - template id - #form - publickey
emailjs.sendForm('service_8wjnrw8','template_jiqp5r2','#contact-form','1GefQonkuix4azxAZ')

.then(()=>{
    // Show sent message
    contactMessage.textContent = "Message sent successfully ✅"

    // Remove message after five seconds
    setTimeout(()=>{
        contactMessage.textContent = ""
    },5000)

    // Clear input fields
    contactForm.reset()
    } ,
    ()=>{
        contactMessage.textContent = "Message not sent (service error) ❌"
    })
}
contactForm.addEventListener("submit", sendEmail);

/* ========  SCROLL UP ========= */
const scrollUp = ()=>{
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 350 viewport height , add this script
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

/* ========  SCROLL SECTION ACTIVE LINK ========= */
const sections = document.querySelectorAll("section[id]");

const scrollActive = ()=>{
    const scrollDown = window.scrollY;

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener("scroll", scrollActive);

/* ========== SCROLL REVEAL ANIMATION ========== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true, // animations repeat
})

sr.reveal('.perfil','contact__form');
sr.reveal('info', { origin: 'left' , delay: 800});
sr.reveal('skills', { origin: 'left' , delay: 1000});
sr.reveal('about', { origin: 'right' , delay: 1200});
sr.reveal('projects__card, .services__card, .experience__card', { interval: 100});
