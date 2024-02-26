// Email.js Function

// function sendEmail() {
//   // alert("HELLO");
//   const emailTo = document.querySelector(".emailTo").value;
//   const message = document.querySelector(".message").value;
//   const emailForm = document.querySelector(".emailForm");

//   if (emailTo == "" || message == "") {
//     alert("Input Field Required");
//   } else {
//     Email.send({
//       SecureToken: "864e6dbb-9d31-47ca-8af1-4371d598e59f",
//       To: emailTo,
//       From: "yakubuanas04@gmail.com",
//       Subject: "Contact Form",
//       Body: "<h3>" + message + "</h3>" + "<h6>Thank You..</h6>",
//     }).then(
//       (message) => alert(message + " " + "Check your Email"),
//       emailForm.reset()
//       // alert("Sent")
//     );
//   }
// }
