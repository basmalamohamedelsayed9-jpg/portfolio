function sendEmail() {
    const Data = {
        to_email: 'basmala946614@gmail.com',
        from_name: document.querySelector("#name").value,
        from_email: 'basmala946614@gmail.com',
        subject: "contact",
        mesaage: `
        name:${document.getElementById("name")}
        email:${document.getElementById("email")}
        message:${document.getElementById("message")}
                        `
    };
    emailjs.send("service_3pspunq","template_65xhxv3",Data)
    .then((response) => {
        alert("success");
    })
    .catch((error)=>{
        alert("contact error"+error)
    })
}
document.getElementById("btn").addEventListener("click",()=>{
    sendEmail();
})
