(function () {
  var sendForm = document.querySelector("#sendForm");
  // SEND DATA TO SERVER

  sendForm.onsubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch("http://hamzachikhi.me/sendmail.php", {
        method: "POST",
        body: new FormData(sendForm),
      });
      let result = await response.json();
      console.log(result);
      children = sendForm.children;
      for (x in children) {
        if (children[x].type !== "submit") {
          children[x].value = "";
        }
      }
      notif.innerHTML = "Merci. Votre message a bien ete envoye.";
      notif = document.querySelector("#notif");
      notif.classList.add("success");
      notif.style.transform = "translateY(0%)";
      setTimeout(function () {
        notif.style.transform = "translateY(150%)";
      }, 2000);
    } catch (e) {
      notif.innerHTML = "Error : " + e;
      notif = document.querySelector("#notif");
      notif.classList.add("error");
      notif.style.transform = "translateY(0%)";
      setTimeout(function () {
        notif.style.transform = "translateY(150%)";
      }, 2000);
    }
  };
})();
