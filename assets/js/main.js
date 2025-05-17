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