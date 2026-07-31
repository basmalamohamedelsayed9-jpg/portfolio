function sendEmail() {
    const Data = {
        to_email: 'basmala946614@gmail.com',
        from_name: document.querySelector("#name").value,
        from_email: document.getElementById("email").value,
        subject: "contact",
        message: `
        name:${document.getElementById("name").value}
        email:${document.getElementById("email").value}
        message:${document.getElementById("message").value}
                        `
    };
    emailjs.send("service_3pspunq","template_65xhxv3",Data)
    .then((response) => {
        alert("success");
         document.getElementById("form").reset();
    })
    .catch((error)=>{
         console.log(error);
        alert("contact error")
    })
}
document.getElementById("btn").addEventListener("click",(e)=>{
      e.preventDefault();
    sendEmail();
  
})
