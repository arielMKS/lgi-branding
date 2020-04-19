(function fn1() {
  document.querySelector("#submit").addEventListener("click", evt => {
    evt.preventDefault();
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var subject = document.querySelector("#subject").value;
    var message = document.querySelector("#message").value;

    var index = name.indexOf(" ");
    var firstName = name.substring(0, index);

    document.querySelector(
      "#exampleModalCenterTitle"
    ).innerHTML = `Thank You, ${firstName}!`;

    var service_id = "default_service";
    var template_id = "test1";

    var template_params = {
      name: name,
      reply_email: email,
      subject: subject,
      message: message
    };

    emailjs.send(service_id, template_id, template_params);

    // clear input boxes on submit clicked
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#subject").value = "";
    document.querySelector("#message").value = "";
  });
})();
