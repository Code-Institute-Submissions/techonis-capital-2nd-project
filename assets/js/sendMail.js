
function sendMail(contactForm) {
    emailjs.send("default_service", "techonis", {
        "from_email": contactForm.emailaddress.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            $('form').html("");
            $('#message').html("<h1>Thank you for your subscription</h1>");
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; 
}