(function () {
  var sendForm = document.querySelector("#sendForm");
  // SEND DATA TO SERVER

  sendForm.onsubmit = async (e) => {
    e.preventDefault();
    notif = document.querySelector("#notif");
    try {
      let response = await fetch("https://hamzachikhi.me/sendmail.php", {
        method: "POST",
        body: new FormData(sendForm),
      });
      let result = await response.json();

      children = sendForm.children;
      for (x in children) {
        if (children[x].type !== "submit") {
          children[x].value = "";
        }
      }
      notif.innerHTML = result;
      notif.style.bottom = ".5rem";
      notif.classList.add("success");
      setTimeout(function () {
        notif.style.bottom = "-10rem";
        notif.classList.remove("success");
      }, 3000);
    } catch (e) {
      notif.innerHTML = "Error : " + e;

      notif.classList.add("error");
      notif.style.bottom = ".5rem";
      setTimeout(function () {
        notif.style.bottom = "-10rem";
        notif.classList.remove("error");
      }, 3000);
    }
  };
})();
